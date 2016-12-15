package com.chenls1997.spring.controller;

import com.chenls1997.spring.model.User;
import com.chenls1997.spring.service.UserService;
import com.chenls1997.spring.util.StringUtil;
import com.zlzkj.core.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Timestamp;
import java.util.Date;

/**
 * 用户相关控制器
 * Created by Chenls on 16/11/23.
 */
@Controller
@RequestMapping(value = "user")
public class UserController extends BaseController {
    @Autowired
    private UserService userService;

    /**
     * 用户登陆
     * @param entity\
     * @return
     */
    @RequestMapping(value = "register")
    public String registerHandler(User entity, HttpServletRequest request, HttpServletResponse response){
        if (request.getMethod().equals("POST")) {
            Date date = new Date();
            Timestamp timestamp = new Timestamp(date.getTime());
            entity.setRegTime(timestamp);

            Integer status=null;
            try{
                status = userService.save(entity);
            }catch (Exception e){
                return ajaxReturn(response,null,e.getLocalizedMessage(),-1);
            }
            if(status==0){
                return ajaxReturn(response,null,"注册失败",0);
            }else {
                return ajaxReturn(response,null,"注册成功",1);
            }
        }else{
            return "user/register";
        }
    }
    /**
     *  用户登陆
     *  @param model
     *  @return
     */
    @RequestMapping(value = "login")
    public String loginHandler(Model model,HttpServletRequest request,HttpServletResponse response) {
        if(request.getMethod().equals("POST")){
            String username = (String)request.getParameter("username");
            String password = (String)request.getParameter("userpassword");
            System.out.println(username);
            System.out.println(password);
            User entity = userService.LoginGetObj(username,password);
            request.getSession().setAttribute("username",entity.getUsername());
            request.getSession().setAttribute("userid",entity.getId());

            if (entity==null) {
                return ajaxReturn(response,null,"登陆失败",0);
            }else {
                return ajaxReturn(response,entity,"登陆成功",1);
            }
        }else{
            return "user/login";
       }
    }

    @RequestMapping(value = "logout")
    public String logoutHandler(HttpServletRequest request,HttpServletResponse response){
        request.getSession().invalidate();
        return "public/main";
    }

/*    @RequestMapping(value = "delete", method = RequestMethod.POST)
    public String deleteHandler(Model model,HttpServletRequest request,HttpServletResponse response){
        String delIds = request.getParameter("ids");
        String ids[] = delIds.split(",");
        int count = 0;
        for(String id : ids){
            count += userService.delete(StringUtil.stringToInteger(id));
        }
        if(count==0){
            return ajaxReturn(response,null,"删除失败",0);
        } else {
            return ajaxReturn(response,count+"","删除成功",1);
        }
    }*/

    @RequestMapping(value = "edit")
    public String userpanelHandler(Model model,HttpServletRequest request,HttpServletResponse response,User entity){

        return null;
    }

}
