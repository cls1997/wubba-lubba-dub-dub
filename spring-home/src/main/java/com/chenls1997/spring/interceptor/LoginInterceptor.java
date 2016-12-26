package com.chenls1997.spring.interceptor;

import com.chenls1997.spring.Constants;
import com.chenls1997.spring.controller.UserController;
import com.chenls1997.spring.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by Chenls on 16/12/16.
 */
public class LoginInterceptor implements HandlerInterceptor {
    @Autowired
    private HttpSession httpSession;

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        User u = (User) httpSession.getAttribute(Constants.user);
        return u == null ? false : true;
    }
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
