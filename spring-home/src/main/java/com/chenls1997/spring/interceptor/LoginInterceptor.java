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

    @Autowired
    public LoginInterceptor(HttpSession httpSession) {
        this.httpSession = httpSession;
    }

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HandlerMethod h = (HandlerMethod) handler;
        Login login = h.getMethodAnnotation(Login.class);

        if (login == null) {
            return true;
        }
        User cu = (User) httpSession.getAttribute(Constants.user);
        System.out.println("LoginInterceptor:35 "+cu);
        if (cu==null){
            request.getRequestDispatcher("/user/login").forward(request, response);
            return false;
        }
        return true;
    }
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
