package com.chenls1997.spring.interceptor;

import com.chenls1997.spring.Constants;
import com.chenls1997.spring.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by Chenls on 16/12/26.
 */
public class MainInterceptor implements HandlerInterceptor {
    @Autowired
    private HttpSession httpSession;

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //Get current user from session
        User u = (User) httpSession.getAttribute(Constants.user);

        //Set request attribute
        request.setAttribute(Constants.user, u);
        request.setAttribute(Constants.username, u!=null?u.getUsername():Constants.nullUsername);
        request.setAttribute(Constants.userId, u!=null?u.getId():null);

        //System.out.println(u+"\n"+request.getAttribute(Constants.username)+" "+request.getAttribute(Constants.userId));

        return true;
    }

    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
