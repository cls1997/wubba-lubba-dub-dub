package com.chenls1997.spring.controller;

import com.chenls1997.spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Chenls on 16/11/23.
 */
@Controller
@RequestMapping(value = "user")
public class UserController {
    @Autowired
    private UserService service;

    //TODO
}
