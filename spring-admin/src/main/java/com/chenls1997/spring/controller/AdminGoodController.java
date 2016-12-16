package com.chenls1997.spring.controller;

import com.chenls1997.spring.model.Good;
import com.chenls1997.spring.model.Type;
import com.chenls1997.spring.service.CommentService;
import com.chenls1997.spring.service.GoodService;
import com.chenls1997.spring.service.TypeService;
import com.chenls1997.spring.util.Param2Bean;
import com.chenls1997.spring.util.StringUtil;
import com.chenls1997.spring.util.UIUtils;
import com.chenls1997.spring.util.UploadUtils;
import com.zlzkj.core.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * Created by Chenls on 16/12/15.
 */
@Controller
@RequestMapping("admin/good")
public class AdminGoodController extends BaseController{
    @Autowired
    private GoodService goodService;
    @Autowired
    private TypeService typeService;
    @Autowired
    private CommentService commentService;

    @RequestMapping(value = "add")
    public String GoodAddHandler(HttpServletRequest request, HttpServletResponse response){
        return "good/add";
    }

    /**
     * 增加商品
     * @param entity
     * @param file_data 上传的图片
     * @return ajax
     */
    @RequestMapping(value = "add_save",method = RequestMethod.POST)
    public String GoodAddSaveHandler(Good entity, HttpServletRequest request, HttpServletResponse response,
                                 @RequestParam("file_data") MultipartFile file_data){
        String picWeb = "";
        if (!file_data.isEmpty()){
            Map<String,Object> picWebInfo;
            picWebInfo= UploadUtils.saveMultipartFile(file_data);
            if((Integer)picWebInfo.get("status")>0){
                picWeb =  picWebInfo.get("saveName").toString();
            }else{
                return ajaxReturn(response,null,picWebInfo.get("errorMsg").toString(),0);
            }
        }
        Integer ret = null;
        Integer tid = entity.getId();
        Type t = typeService.findByID(tid);
        entity.setGoodImage(picWeb);
        if (t == null)
            return ajaxReturn(response, null, "No Type", 0);
        try {
            ret = goodService.save(entity);
        } catch (Exception e) {
            return ajaxReturn(response, null, e.getLocalizedMessage(), -1);
        }
        if (ret > 0) {
            return ajaxReturn(response, null, "添加成功", 1);
        } else {
            return ajaxReturn(response, null, "添加失败", 0);
        }
    }

    @RequestMapping(value = "delete",method = RequestMethod.POST)
    public String GoodDeleteHandler(HttpServletRequest request,HttpServletResponse response){
        String delIds = request.getParameter("delIds");
        String ids[] = delIds.split(",");
        Integer count = 0;
        for(String temp : ids){
            count += goodService.delete(StringUtil.stringToInteger(temp));
        }
        if(count==0){
            return ajaxReturn(response, count+"", "删除失败", 0);
        } else {
            return ajaxReturn(response, count+"", "删除成功", 1);
        }
    }
    
    @RequestMapping(value = "edit",method = RequestMethod.GET)
    public String GoodEditHandler(Model model,HttpServletRequest request,HttpServletResponse response,Integer id){
        if(id!=null) {
            Good good = goodService.findByID(id);
            good.setGoodImage(UploadUtils.parseFileUrl(good.getGoodImage()));
            model.addAttribute("good", good);
        }
        return "good/edit";
    }

    /**
     *
     * @PostParameter id
     * @param file_data
     * @return ajax
     */
    @RequestMapping(value = "edit_save",method = RequestMethod.POST)
    public String GoodEditSaveHandler(Model model, HttpServletRequest request, HttpServletResponse response,
                                  @RequestParam("file_data") MultipartFile file_data){
        String picWeb = "";

        if( !file_data.isEmpty() ){
            Map<String,Object> picWebInfo = UploadUtils.saveMultipartFile(file_data);
            if((Integer)picWebInfo.get("status")>0){
                picWeb =  picWebInfo.get("saveName").toString();
            }else{
                return ajaxReturn(response,null,picWebInfo.get("errorMsg").toString(),0);
            }
        }

        String id = request.getParameter("id");
        Good entity  = goodService.findByID(Integer.parseInt(id));
        Param2Bean.edit_param2Bean(request, entity);

        if(!picWeb.equals(""))
            entity.setGoodImage(picWeb);//设置附件url

        Integer ret=null;
        try{
            ret = goodService.update(entity);
        } catch (Exception e){
            return ajaxReturn(response,null,e.getLocalizedMessage(),-1);
        }
        if(ret==null){
            return ajaxReturn(response,null,"更新失败",0);
        } else {
            return ajaxReturn(response, null, "更新成功", 1);
        }
    }

    @RequestMapping(value = "list")
    public String GoodListHandler(Model model,HttpServletRequest request,HttpServletResponse response){

        Map<String, Object>	goodList = goodService.getUIGridData(null, UIUtils.getPageParams(request));

        model.addAttribute("list",goodList);

        if(request.getMethod().equals("POST")){
            return ajaxReturn(response, goodList);
        }else{
            return "good/list";
        }
    }
}
