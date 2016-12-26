package com.chenls1997.spring.controller;

import com.chenls1997.spring.Constants;
import com.chenls1997.spring.model.User;
import com.chenls1997.spring.service.UserService;
import com.zlzkj.core.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

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
@SessionAttributes({
        Constants.username,
        Constants.userId,
        Constants.user
})
public class UserController extends BaseController {
    @Autowired
    private UserService userService;

    /**
     * 用户登陆
     *
     * @param entity\
     * @return
     */
    @RequestMapping(value = "register")
    public String registerHandler(User entity, HttpServletRequest request, HttpServletResponse response,
                                  @RequestParam String username,
                                  @RequestParam String password,
                                  @RequestParam("confirmpassword")
                                          String confirm) {
        if (username == null || password == null || confirm == null || !password.equals(confirm))
            return ajaxReturn(response, null, "注册失败", 0);

        entity.setPassword(password);
        entity.setUsername(username);
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
    @RequestMapping(value = "login")
    public String loginHandler(Model model, HttpServletRequest request, HttpServletResponse response,
                               @RequestParam String username,
                               @RequestParam String password) {
        System.out.println(username);
        System.out.println(password);
        User entity = userService.LoginGetObj(username, password);

        if (entity == null) {
            return ajaxReturn(response, null, "登陆失败", 0);
        } else {
            model.addAttribute(Constants.username, entity.getUsername());
            model.addAttribute(Constants.userId, entity.getId());
            model.addAttribute(Constants.user, entity);
            return ajaxReturn(response, entity, "登陆成功", 1);
        }
    }

    @RequestMapping(value = "logout")
    public String logoutHandler(HttpServletRequest request, HttpServletResponse response, SessionStatus ss) {
        ss.setComplete();
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

    @RequestMapping("forgot")
    public String forgotHandler(Model model, HttpServletRequest request, HttpServletResponse response) {
        if (request.getMethod().equals("POST")) {
            String username = (String) request.getAttribute("username");
            String question = (String) request.getAttribute("question");
            String result = (String) request.getAttribute("result");

            return ajaxReturn(response,
                    userService.forgetPassword(username, question, result)
            );
        } else {
            return "user/found";
        }
    }

    public String forgot2Handler(Model model) {
        // TODO: 16/12/18 ???
        return null;
    }

    @RequestMapping(value = "user")
    public String userpanelHandler(Model model, HttpServletRequest request, HttpServletResponse response) {
        model.addAttribute("user", userService.findByID(
                (Integer) request.getSession().getAttribute(Constants.userId)
        ));
        return "user/user";
    }

    @RequestMapping(value = "userp")
    public String userPostHandler(Model model,HttpServletRequest request,HttpServletResponse response,
                                  @RequestParam User entity){
        System.out.println(entity.toString());
        userService.save(entity);
        return ajaxReturn(response,null);
    }
}
