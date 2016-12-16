package com.chenls1997.spring.controller;

import com.chenls1997.spring.model.User;
import com.chenls1997.spring.service.UserService;
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
@RequestMapping("admin/user")
public class AdminUserController extends BaseController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "list")
    public String listHandler(Model model, HttpServletRequest request, HttpServletResponse response, Integer id){
        Map<String, Object> userList = userService.getUIGridData(null, UIUtils.getPageParams(request));
        model.addAttribute("userList",userList);
        if (request.getMethod().equals("POST")){
            return ajaxReturn(response, userList);
        } else {
            return "user/list";
        }
    }
}
