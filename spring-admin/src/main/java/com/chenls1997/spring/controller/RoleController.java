package com.chenls1997.spring.controller;/*package com.zlzkj.app.com.chenls1997.spring.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zlzkj.app.com.chenls1997.spring.model.Role;
import com.zlzkj.app.com.chenls1997.spring.service.ActionNodeService;
import com.zlzkj.app.com.chenls1997.spring.service.RoleService;
import com.zlzkj.app.util.StringUtil;
import com.zlzkj.app.util.UIUtils;
import com.zlzkj.core.base.BaseController;

*//**
 * 用户控制器
 *//*
@Controller
public class RoleController extends BaseController{
	
	
	@Autowired
	private RoleService roleService;
	@Autowired
	private ActionNodeService actionNodeService;

	
	
	@RequestMapping(value={"role/"})
	public String index(Model com.chenls1997.spring.model,HttpServletRequest request,HttpServletResponse response) {

		return "role/test";
	}
	
	@RequestMapping(value={"role/find_by_id"},method = RequestMethod.POST)
	public String findById(Integer id, HttpServletRequest request, HttpServletResponse response) {
		
		Role role = roleService.findById(id);	
		return ajaxReturn(response, role);
	}	
	
	@RequestMapping(value={"admin/role"})
	public String list(Model com.chenls1997.spring.model, HttpServletRequest request, HttpServletResponse response) {
		
		Map<String, Object>	roleList = roleService.getUIGridData(null,UIUtils.getPageParams(request));
			
		com.chenls1997.spring.model.addAttribute("roleList",roleList);
		if(request.getMethod().equals("POST")){
			return ajaxReturn(response, roleList);
		}else{
			return "admin/role";
		}
	}	
	
	@RequestMapping(value={"role/save"})
	public String save(Role entity, HttpServletRequest request, HttpServletResponse response){
        Integer count = null;
			try {
				count = roleService.save(entity);
			} catch (Exception e) {
				return ajaxReturn(response,null,e.getLocalizedMessage(),-1);
			}
		
        if(count==0)
        	return ajaxReturn(response,null,"添加失败",0);
        else
        	return ajaxReturn(response, null,"添加成功",1);
	}
	
	
	@RequestMapping(value={"role/update"})
	public String update(Role entity, HttpServletRequest request, HttpServletResponse response) {
		Integer count = null;
		try {
			count = roleService.update(entity);
		} catch (Exception e) {
			return ajaxReturn(response,null,e.getLocalizedMessage(),-1);
		}
	
    if(count==0)
    	return ajaxReturn(response,null,"更新失败",0);
    else
    	return ajaxReturn(response, null,"更新成功",1);
    
	}
	@RequestMapping(value={"role/delete"})
	public String delete(HttpServletRequest request, HttpServletResponse response) {
		String delIds = request.getParameter("delIds");
		
		String[] ids = delIds.split(",");
		System.out.println(ids[0]);
		int count = 0;
		for(String id : ids){
		  count += roleService.delete(StringUtil.stringToInteger(id));
		}
		  
		if(count==0)
			return ajaxReturn(response,null,"删除失败",0);
		else
			return ajaxReturn(response, count+"","删除成功",1);
		
	}

	*//**
	 * 权限节点列表
	 * @param com.chenls1997.spring.model
	 * @return
	 *//*
	@RequestMapping(value={"action_node"})
	public String actionNode(HttpServletRequest request, HttpServletResponse response) {
		
		if(request.getMethod().equals("POST")){
			if("combo".equals(request.getParameter("ui"))){
				List<Map<String, Object>> res = new ArrayList<Map<String, Object>>();
				Map<String, Object> node = new HashMap<String, Object>();
				node.put("id", 0);
				node.put("text", "--顶级节点--");
				res.add(node);
				res.addAll(actionNodeService.getUIComboData());
				return ajaxReturn(response, res);
			}else{
				return ajaxReturn(response, actionNodeService.getUIGridData());
			}
		}else{
			return "admin/action_node";
		}
	}
	
}
*/