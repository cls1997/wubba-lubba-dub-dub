package com.chenls1997.spring.controller;

import com.chenls1997.spring.service.SubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Chenls on 16/12/15.
 */
@Controller
@RequestMapping("sub")
public class SubController  {
    @Autowired
    private SubService subService;

}
