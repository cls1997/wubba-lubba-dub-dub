package com.chenls1997.spring.controller;

import com.chenls1997.spring.annotation.Login;
import com.chenls1997.spring.model.Good;
import com.chenls1997.spring.service.CommentService;
import com.chenls1997.spring.service.GoodService;
import com.chenls1997.spring.service.TypeService;
import com.chenls1997.spring.service.UserService;
import com.chenls1997.spring.util.UploadUtils;
import com.zlzkj.core.sql.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * 商品相关控制器
 */

@Controller
@RequestMapping(value = "good")
public class GoodController extends BaseController {
    private final GoodService goodService;
    private final TypeService typeService;
    private final UserService userService;
    private final CommentService commentService;

    @Autowired
    public GoodController(HttpSession httpSession, CommentService commentService, GoodService goodService,
                          TypeService typeService, UserService userService) {
        super(httpSession);
        this.commentService = commentService;
        this.goodService = goodService;
        this.typeService = typeService;
        this.userService = userService;
    }

    @RequestMapping(value = "{goodid}")
    public String GoodViewHandler(Model model, @PathVariable("goodid") Integer id, HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> attrs = new HashMap<String, Object>();
        Good ret = goodService.findByID(id);
        Integer commentCount = commentService.getCommentCountByGoodId(id);
        String goodTypeName = typeService.findByID(ret.getGoodTypeId()).getName();
        List<Row> commentList = commentService.getCommentListByGoodId(id);
        List<Row> bdsp = goodService.searchServiceHandler(null,null,ret.getProviderId());

        for (Row r:bdsp)
            r.put("goodPic",UploadUtils.parseFileUrl(r.getString("goodImage")));

        for (Row r:commentList)
            r.put("author",userService.findByID(r.getInt("userId")).getUsername());

        attrs.put("good", ret);
        attrs.put("pic_url", UploadUtils.parseFileUrl(ret.getGoodImage()));
        attrs.put("commentCount", commentCount);
        attrs.put("commentList", commentList);
        attrs.put("goodTypeName", goodTypeName);
        attrs.put("providerName", userService.findByID(ret.getProviderId()).getUsername());
        attrs.put("bendianshangpin", bdsp.subList(0,bdsp.size()<=5?bdsp.size():5));

        model.addAllAttributes(attrs);

        return "good/detail";
    }

    @RequestMapping(value = "getComments")
    public String CommentGetHandler(Integer id, HttpServletRequest request, HttpServletResponse response) {
        List<Row> commentList = commentService.getCommentListByGoodId(id);
        return ajaxReturn(response, commentList);
    }

    @Login
    @RequestMapping("sell")
    public String sellHandler(Model model,HttpServletRequest request,HttpServletResponse response){
        return "good/sell";
    }

    @Login
    @RequestMapping(value = "sellsave",method = RequestMethod.POST)
    public String sellSaveHandler(Model model, HttpServletRequest request, HttpServletResponse response,
                                  @RequestParam("file_data") MultipartFile file_data,
                                  @RequestParam String goodName,
                                  @RequestParam Double goodPrice,
                                  @RequestParam Long goodStock,
                                  @RequestParam String goodIntro,
                                  @RequestParam String typeName){
        String picWeb = "";
        if (!file_data.isEmpty()){
            Map<String,Object> pic = UploadUtils.saveMultipartFile(file_data);
            if((Integer)pic.get("status")>0){
                picWeb = pic.get("saveName").toString();
            } else { //上传出错
                return ajaxReturn(response,null,pic.get("errorMsg").toString(),-1);
            }
        }
        Good entity = new Good();

        entity.setGoodName(goodName);
        entity.setGoodPrice(goodPrice);
        entity.setGoodStock(goodStock);
        entity.setGoodIntro(goodIntro);
        entity.setGoodImage(picWeb);
        entity.setGoodSold(0l);
        entity.setDiscount(0d);
        entity.setProviderId(this.getCurrentUserId());

        if (typeService.has(typeName))
            entity.setGoodTypeId(typeService.getIdByName(typeName));
        else
            entity.setGoodTypeId(typeService.newAndReturnId(typeName));

        int flag = goodService.save(entity);
        if (flag == 1) {
            return ajaxReturn(response, null, "添加成功", 1);
        } else {
            return ajaxReturn(response, null, "添加失败", 0);
        }
    }

    /**
     * 商品搜索
     * @param name
     * @param typeName
     * @param providerName
     * @return
     */
    @RequestMapping(value = "search")
    public String searchHandler(Model model,HttpServletRequest request,HttpServletResponse response,
                                @RequestParam(required = false) String name,
                                @RequestParam(required = false) String typeName,
                                @RequestParam(required = false) String providerName
                                ){
        Integer typeId = typeService.getIdByName(typeName);
        Integer providerId = userService.getIdByUsername(providerName);
        List<Row> result = goodService.searchServiceHandler(name,typeId,providerId);

        for (Row r:result){
            r.put("goodTypeName",typeService.findByID(r.getInt("goodTypeId")).getName());
            r.put("goodPic",UploadUtils.parseFileUrl(r.getString("goodImage")));
        }
        model.addAttribute("result",result);
        return "good/search";
    }
}
