package com.chenls1997.spring.controller;

import com.chenls1997.spring.model.Good;
import com.chenls1997.spring.model.Types;
import com.chenls1997.spring.service.CommentService;
import com.chenls1997.spring.service.GoodService;
import com.chenls1997.spring.service.TypeService;
import com.chenls1997.spring.util.StringUtil;
import com.chenls1997.spring.util.UploadUtils;
import com.zlzkj.core.base.BaseController;
import com.zlzkj.core.sql.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;

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
    public String GoodViewHandler(Model model,HttpServletRequest request,HttpServletResponse response,Integer id){
        Good ret = goodService.findByID(id);
        List<Row> commentList = commentService.getCommentListByGoodId(id);
        model.addAttribute("good",ret);
        model.addAttribute("pic_url", UploadUtils.parseFileUrl(ret.getGoodImage()));
        model.addAttribute("commentList",commentList);

        return "good/good";
    }
}
