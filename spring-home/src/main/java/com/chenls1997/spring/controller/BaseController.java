package com.chenls1997.spring.controller;

import com.chenls1997.spring.Constants;
import com.chenls1997.spring.model.User;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpSession;

/**
 * Created by Chenls on 16/12/28.
 */
public class BaseController extends com.zlzkj.core.base.BaseController{
    private final HttpSession httpSession;

    @Autowired
    public BaseController(HttpSession httpSession) {
        this.httpSession = httpSession;
    }

    public User getCurrentUser(){
        return (User) httpSession.getAttribute(Constants.user);
    }

    public Integer getCurrentUserId(){
        return (Integer) httpSession.getAttribute(Constants.userId);
    }

    public String getCurrentUsername(){
        return (String) httpSession.getAttribute(Constants.username);
    }
}
