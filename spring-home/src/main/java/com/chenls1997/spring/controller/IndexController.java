package com.chenls1997.spring.controller;

import com.chenls1997.spring.service.ActionNodeService;
import com.chenls1997.spring.service.AdminService;
import com.zlzkj.core.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 首页控制器
 */
@Controller
public class IndexController extends BaseController{
	@Autowired
	ActionNodeService actionNodeService;

    @RequestMapping(value = "/")
    public String QAQ(Model model,HttpServletRequest request,HttpServletResponse response){
        return "index/index";
    }


	@RequestMapping(value={"/sys"})
	public String index(Model model,HttpServletRequest request,HttpServletResponse response) {
		model.addAttribute("leftMenuList",actionNodeService.getList(1));
		model.addAttribute("roleId",1);
		return "admin/index";
	}
	
	@RequestMapping(value={"/test/notice"})
	public String notice(HttpServletRequest request,HttpServletResponse response) {
		return "test/notice";
	}
	@RequestMapping(value={"/test/test0"})
	public String test0(HttpServletRequest request,HttpServletResponse response) {
		return "test/test0";
	}
	@RequestMapping(value={"/test/test1"})
	public String test1(HttpServletRequest request,HttpServletResponse response) {
		return "test/test1";
	}
	@RequestMapping(value={"/test/test2"})
	public String test2(HttpServletRequest request,HttpServletResponse response) {
		return "test/test2";
	}
	@RequestMapping(value={"/test/test3"})
	public String test3(HttpServletRequest request,HttpServletResponse response) {
		return "test/test3";
	}
	@RequestMapping(value={"/test/test4"})
	public String test4(HttpServletRequest request,HttpServletResponse response) {
		return "test/test4";
	}
	@RequestMapping(value={"/sys/sysMenu"})
	public String sysMenu(HttpServletRequest request,HttpServletResponse response) {
		return "sys/sysMenu";
	}
	
	@RequestMapping(value={"/sys/sysUser"})
	public String sysUser(HttpServletRequest request,HttpServletResponse response) {
		return "sys/sysUser";
	}
	@RequestMapping(value={"/sys/sysUserRole"})
	public String sysUserRole(HttpServletRequest request,HttpServletResponse response) {
		return "sys/sysUserRole";
	}
	
}
