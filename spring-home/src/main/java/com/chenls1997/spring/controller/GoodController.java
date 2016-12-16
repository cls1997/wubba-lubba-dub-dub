package com.chenls1997.spring.controller;

import com.chenls1997.spring.model.Good;
import com.chenls1997.spring.service.CommentService;
import com.chenls1997.spring.service.GoodService;
import com.chenls1997.spring.service.TypeService;
import com.chenls1997.spring.util.UploadUtils;
import com.zlzkj.core.base.BaseController;
import com.zlzkj.core.sql.Row;
import org.apache.ibatis.ognl.IntHashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 商品相关控制器
 */

@Controller
@RequestMapping(value = "good")
public class GoodController extends BaseController {
    @Autowired
    private GoodService goodService;

    @Autowired
    private TypeService typeService;

    @Autowired
    private CommentService commentService;

    @RequestMapping(value = "good_view")
    public String GoodViewHandler(Model model,Integer id,HttpServletRequest request,HttpServletResponse response){
        Map<String, Object> attrs = new HashMap<String, Object>();
        Good ret = goodService.findByID(id);
        List<Row> commentList = commentService.getCommentListByGoodId(id);
        Integer commentCount = commentList.size();
        String goodTypeName = typeService.findByID(ret.getGoodTypeId()).getName();
        attrs.put("good",ret);
        attrs.put("pic_url", UploadUtils.parseFileUrl(ret.getGoodImage()));
        attrs.put("commentList",commentList);
        attrs.put("commentCount",commentCount);
        attrs.put("goodTypeName",goodTypeName);

        model.addAllAttributes(attrs);

        return "good/detail";
    }
}
