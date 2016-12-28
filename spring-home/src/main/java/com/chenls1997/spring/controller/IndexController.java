package com.chenls1997.spring.controller;

import com.chenls1997.spring.service.ActionNodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * 首页控制器
 */
@Controller
public class IndexController extends BaseController {

    @Autowired
    public IndexController(HttpSession httpSession) {
        super(httpSession);
    }

    @RequestMapping(value = "/")
    public String mainHandler(Model model, HttpServletRequest request, HttpServletResponse response) {
        return "index/index";
    }
}
