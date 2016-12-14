package com.chenls1997.spring.controller;


import com.chenls1997.spring.service.CartService;
import com.chenls1997.spring.service.GoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 购物车相关控制器
 * Created by Chenls on 16/12/07.
 */

@Controller
@RequestMapping(value = "cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private GoodService goodService;

    /*
     * @param model
     */
    @RequestMapping(value = "list")
    public String list(Model model, HttpServletRequest request, HttpServletResponse response){
        //TODO 2016年12月12日 19:14:28

        return "user/list";
    }
}
