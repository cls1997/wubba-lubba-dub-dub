package com.chenls1997.spring.controller;

import com.chenls1997.spring.Constants;
import com.chenls1997.spring.annotation.Login;
import com.chenls1997.spring.model.User;
import com.chenls1997.spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.util.Date;

/**
 * 用户相关控制器
 * Created by Chenls on 16/11/23.
 */
@Controller
@RequestMapping(value = "user")
@SessionAttributes({
        Constants.username,
        Constants.userId,
        Constants.user
})
public class UserController extends BaseController {
    private final UserService userService;

    @Autowired
    public UserController(HttpSession httpSession, UserService userService) {
        super(httpSession);
        this.userService = userService;
    }

    /**
     * 用户登陆
     *
     * @param
     * @return
     */
    @RequestMapping(value = "register")
    public String registerHandler(HttpServletRequest request, HttpServletResponse response,
                                  @RequestParam String xusername,
                                  @RequestParam String xpassword,
                                  @RequestParam("xconfirmpassword") String confirm) {

        //System.out.println("boolean+"+ (xusername == null) +" "+ (xpassword == null) +" "+ (confirm == null) + " "+ (!xpassword.equals(confirm)) +" "+ (!userService.check(xusername)));
        if (xusername == null || xpassword == null || confirm == null || !xpassword.equals(confirm)||userService.check(xusername))
            return ajaxReturn(response, null, "注册失败", 0);

        User entity = new User();
        entity.setPassword(xpassword);
        entity.setUsername(xusername);
        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());
        entity.setRegTime(timestamp);

        Integer status = null;
        try {
            status = userService.save(entity);
        } catch (Exception e) {
            return ajaxReturn(response, null, e.getLocalizedMessage(), -1);
        }
        if (status == 0) {
            return ajaxReturn(response, null, "注册失败", 0);
        } else {
            return ajaxReturn(response, null, "注册成功", 1);
        }
    }

    /**
     * 用户登陆
     *
     * @param model
     * @return
     */
    @RequestMapping(value = "login",method = RequestMethod.POST)
    public String loginHandler(Model model, HttpServletRequest request, HttpServletResponse response,
                               @RequestParam String username,
                               @RequestParam String password) {

        System.out.println(username);
        System.out.println(password);
        User entity = userService.LoginGetObj(username, password);


        if (entity == null) {
            System.out.println("aaaaa");
            return ajaxReturn(response, null, "登陆失败", 0);

        } else {
            model.addAttribute(Constants.username, entity.getUsername());
            model.addAttribute(Constants.userId, entity.getId());
            model.addAttribute(Constants.user, entity);
            return ajaxReturn(response, entity, "登陆成功", 1);
        }

    }

    @RequestMapping(value = "login",method = RequestMethod.GET)
    public String lo(HttpServletRequest request,HttpServletResponse response){
        return "user/login";
    }

    @Login
    @RequestMapping(value = "logout")
    public String logoutHandler(HttpServletRequest request, HttpServletResponse response, SessionStatus ss) {
        ss.setComplete();
        request.getSession().invalidate();
        return "index/index";
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

    @RequestMapping(value = "forgot",method = RequestMethod.GET)
    public String forgotHandler(Model model, HttpServletRequest request, HttpServletResponse response) {
        return "user/found";
    }

    @RequestMapping(value = "forgotsave",method = RequestMethod.POST)
    public String forgot2Handler(Model model, HttpServletRequest request,HttpServletResponse response,
                                 @RequestParam String username,
                                 @RequestParam String question,
                                 @RequestParam String result,
                                 @RequestParam String newpass) {
        if (userService.forgetPassword(username,question,result)){
            User u = userService.findByID(userService.getIdByUsername(username));
            u.setPassword(newpass);
            Integer ret = userService.update(u);
            return ajaxReturn(response,null, ret.toString(),ret);
        } else {
            return ajaxReturn(response, null, "-1", -1);
        }
    }

    @Login
    @RequestMapping(value = "user")
    public String userpanelHandler(Model model, HttpServletRequest request, HttpServletResponse response) {
        model.addAttribute("user", this.getCurrentUser());
        return "user/user";
    }

    @Login
    @RequestMapping(value = "usersave")
    public String userPostHandler(Model model,HttpServletRequest request,HttpServletResponse response,
                                  @RequestParam String username,
                                  @RequestParam String email,
                                  @RequestParam String phone,
                                  @RequestParam String question,
                                  @RequestParam String result,
                                  @RequestParam String address){
        User entity = this.getCurrentUser();
        entity.setUsername(username);
        entity.setEmail(email);
        entity.setPhone(phone);
        entity.setQuestion(question);
        entity.setResult(result);
        entity.setAddress(address);
        Integer ret = userService.update(entity);

        return ajaxReturn(response,null,ret.toString(),ret);
    }
}
