package com.chenls1997.spring.controller;

import com.chenls1997.spring.mapper.CartMapper;
import com.chenls1997.spring.service.CartService;
import com.zlzkj.core.mybatis.SqlRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Chenls on 16/12/07.
 */

@Controller
@RequestMapping(value = "cart")
public class CartController {
    @Autowired
    private CartService service;

    // TODO: 16/12/07
}
