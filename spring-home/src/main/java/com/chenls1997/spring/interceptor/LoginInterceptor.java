package com.chenls1997.spring.interceptor;

import com.chenls1997.spring.Constants;
import com.chenls1997.spring.annotation.Login;
import com.chenls1997.spring.controller.UserController;
import com.chenls1997.spring.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by Chenls on 16/12/16.
 */
public class LoginInterceptor implements HandlerInterceptor {
    private final HttpSession httpSession;

    public String[] allowUrls;

    @Autowired
    public LoginInterceptor(HttpSession httpSession) {
        this.httpSession = httpSession;
    }

    public void setAllowUrls(String[] allowUrls) {
        this.allowUrls = allowUrls;
    }
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HandlerMethod h = (HandlerMethod) handler;
        Login login = h.getMethodAnnotation(Login.class);
        /*
         * TODO 完成针对 @Login 的处理
         * Time: 16/12/29 1:00
         * Creator: Chenls
         */ 
        if (login == null) {
            return true;
        }

        return true;
    }
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
