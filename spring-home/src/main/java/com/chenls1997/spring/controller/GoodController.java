package com.chenls1997.spring.controller;

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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 商品相关控制器
 */

@Controller
@SessionAttributes("userId")
@RequestMapping(value = "good")
public class GoodController extends BaseController {
    private final GoodService goodService;
    private final TypeService typeService;
    private final CommentService commentService;

    @Autowired
    public GoodController(HttpSession httpSession, CommentService commentService, GoodService goodService, TypeService typeService) {
        super(httpSession);
        this.commentService = commentService;
        this.goodService = goodService;
        this.typeService = typeService;
    }

    @RequestMapping(value = "{goodid}")
    public String GoodViewHandler(Model model, @PathVariable("goodid") Integer id, HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> attrs = new HashMap<String, Object>();
        Good ret = goodService.findByID(id);
        Integer commentCount = commentService.getCommentCountByGoodId(id);
        String goodTypeName = typeService.findByID(ret.getGoodTypeId()).getName();

        attrs.put("good", ret);
        attrs.put("pic_url", UploadUtils.parseFileUrl(ret.getGoodImage()));
        attrs.put("commentCount", commentCount);
        attrs.put("commentList", commentService.getCommentListByGoodId(id));
        attrs.put("goodTypeName", goodTypeName);

        model.addAllAttributes(attrs);

        return "good/detail";
    }

    @RequestMapping(value = "getComments")
    public String CommentGetHandler(Integer id, HttpServletRequest request, HttpServletResponse response) {
        List<Row> commentList = commentService.getCommentListByGoodId(id);
        return ajaxReturn(response, commentList);
    }
}
