package com.chenls1997.spring.controller;

import com.chenls1997.spring.service.CommentService;
import com.chenls1997.spring.util.StringUtil;
import com.chenls1997.spring.util.UIUtils;
import com.zlzkj.core.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * Created by Chenls on 16/12/16.
 */
@Controller
@RequestMapping("admin/comment")
public class AdminCommentController extends BaseController {
    @Autowired
    private CommentService commentService;

    @RequestMapping(value = "commment_delete")
    public String CommentDeleteHandler(Model model, HttpServletRequest request, HttpServletResponse response){
        String delIds = request.getParameter("ids");
        String ids[] = delIds.split(",");
        int count = 0;
        for(String id : ids){
            count += commentService.delete(StringUtil.stringToInteger(id));
        }
        if(count==0){
            return ajaxReturn(response,null,"删除失败",0);
        } else {
            return ajaxReturn(response,count+"","删除成功",1);
        }
    }

    @RequestMapping("list")
    public String CommentListHandler(Model model, HttpServletRequest request, HttpServletResponse response){

        Map<String,Object> commentList = commentService.getUIGridData(null, UIUtils.getPageParams(request));
        model.addAttribute("commentList",commentList);

        if(request.getMethod().equals("POST")){
            return ajaxReturn(response,commentList);
        } else {
            return "comment/list";
        }
    }

}
