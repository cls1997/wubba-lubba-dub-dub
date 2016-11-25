package com.chenls1997.spring.controller;

        import com.chenls1997.spring.model.User;
        import com.chenls1997.spring.service.UserService;
        import com.chenls1997.spring.util.StringUtil;
        import com.zlzkj.core.base.BaseController;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.beans.factory.annotation.Value;
        import org.springframework.stereotype.Controller;
        import org.springframework.ui.Model;
        import org.springframework.web.bind.annotation.RequestBody;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RequestMethod;

        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;

/**
 * Created by Chenls on 16/11/23.
 */
@Controller
@RequestMapping(value = "user")
public class UserController extends BaseController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "register")
    public String registerHandler(User entity, HttpServletRequest request, HttpServletResponse response){
        if (request.getMethod().equals("POST")) {
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

    @RequestMapping(value = "login")
    public String loginHandler(Model model,HttpServletRequest request,HttpServletResponse response){
        if(request.getMethod().equals("POST")){
            String username = (String)request.getAttribute("username");
            String password = (String)request.getAttribute("password");
            User entity = userService.LoginGetObj(username,password);
            if (entity==null) {
                return ajaxReturn(response,null,"登陆失败",0);
            }else {
                return ajaxReturn(response,entity,"登陆成功",1);
            }
        }else{
            return "user/login";
        }
    }

    @RequestMapping(value = "delete", method = RequestMethod.POST)
    public String deleteHandler(HttpServletRequest request,HttpServletResponse response){
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
    }

    @RequestMapping(value = "edit")
    public String userpanelHandler(Model model,HttpServletRequest request,HttpServletResponse response,User entity){
        //TODO
        return null;
    }

}