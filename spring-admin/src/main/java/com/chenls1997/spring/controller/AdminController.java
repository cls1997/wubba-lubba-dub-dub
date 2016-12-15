package com.chenls1997.spring.controller;

import com.chenls1997.spring.model.ActionNode;
import com.chenls1997.spring.model.Admin;
import com.chenls1997.spring.model.Role;
import com.chenls1997.spring.model.RoleNode;
import com.chenls1997.spring.service.ActionNodeService;
import com.chenls1997.spring.service.AdminService;
import com.chenls1997.spring.service.RoleNodeService;
import com.chenls1997.spring.service.RoleService;
import com.chenls1997.spring.util.StringUtil;
import com.chenls1997.spring.util.UIUtils;
import com.chenls1997.spring.util.UploadUtils;
import com.zlzkj.core.base.BaseController;
import com.zlzkj.core.util.Fn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 管理员控制器
 */
@Controller
@RequestMapping(value={"admin"})
public class AdminController extends BaseController{
	@Autowired
	private AdminService adminService;
	@Autowired
	private ActionNodeService actionNodeService;
	@Autowired
	private RoleService roleServcie;
	@Autowired
	private RoleNodeService roleNodeService;
	
	@RequestMapping(value={"/"})
	public String index(Model model,HttpServletRequest request,HttpServletResponse response) {
		model.addAttribute("leftMenuList",actionNodeService.getList(1));
		model.addAttribute("roleId",1);
		return "admin/index";
	}
		
	@RequestMapping(value={"find_by_id"},method = RequestMethod.POST)
	public String findById(Integer id, HttpServletRequest request, HttpServletResponse response) {
		
		Admin admin = adminService.findById(id);
		return ajaxReturn(response, admin);
	}
	
	@RequestMapping(value={"list"})
	public String list1(Model model, HttpServletRequest request, HttpServletResponse response) {
		
		Map<String, Object>	adminList = adminService.getUIGridData(null, UIUtils.getPageParams(request));
			
		model.addAttribute("adminList",adminList);
		if(request.getMethod().equals("POST")){
			return ajaxReturn(response, adminList);
		}else{
			return "admin/list";
		}
	}	
	
	@RequestMapping(value={"add"})
	public String add(Admin entity, HttpServletRequest request, HttpServletResponse response){
		if(request.getMethod().equals("POST")){
			 Integer count = null;
				try {
					count = adminService.save(entity);
				} catch (Exception e) {
					return ajaxReturn(response,null,e.getLocalizedMessage(),-1);
				}
			if(count==0)
				return ajaxReturn(response,null,"添加失败",0);
			else
				return ajaxReturn(response, null,"添加成功",1);
		}else{
			return "admin/add";
		}
 	}
	
	@RequestMapping(value={"edit"})
	public String edit(Model model, Admin entity, HttpServletRequest request, HttpServletResponse response) {
		if(request.getMethod().equals("POST")) {
			Integer count = null;
			try {
				//entity.setId(Integer.parseInt(request.getParameter("id")));
				count = adminService.update(entity);
			} catch (Exception e) {
				return ajaxReturn(response, null, e.getLocalizedMessage(), -1);
			}
			if (count == 0)
				return ajaxReturn(response, null, "更新失败", 0);
			else
				return ajaxReturn(response, null, "更新成功", 1);
		} else {
			model.addAttribute("admin", adminService.findById(entity.getId()));
			return "admin/edit";
		}
	}
	
	@RequestMapping(value={"delete"},method=RequestMethod.POST)
	public String Delete(HttpServletRequest request,HttpServletResponse response,Integer id) {
		String delIds = request.getParameter("delIds");
		
		String[] ids = delIds.split(",");
		int count = 0;
		for(String temp : ids){
		  count += adminService.delete(StringUtil.stringToInteger(temp));
		}
		if(count==0)
			return ajaxReturn(response,null,"删除失败",0);
		else
			return ajaxReturn(response, count+"","删除成功",1);
		
	}
	
	/**
	 * 权限节点列表
	 * @param model
	 * @return
	 */
	@RequestMapping(value={"action_node"})
	public String actionNode(Model model,HttpServletRequest request, HttpServletResponse response) {
		if(request.getMethod().equals("POST")){
			Map<String, Object> where = new HashMap<String, Object>();
			return ajaxReturn(response, actionNodeService.getUIGridData(where,UIUtils.getPageParams(request)));
		}else{
			return "admin/action_node";
		}
	}
	
	/**
	 * 新增权限节点
	 * @param model
	 * @return
	 */
	@RequestMapping(value={"action_node_add"})
	public String actionNodeAdd(Model model, HttpServletRequest request, HttpServletResponse response,
			ActionNode actionNode) {
		
		if(request.getMethod().equals("POST")){
			actionNodeService.insert(actionNode);
			return ajaxReturn(response, null,"添加成功",1);
		}else{
			return "admin/action_node_add";
		}
	}
	
	/**
	 * 修改权限节点
	 * @param model
	 * @return
	 */
	@RequestMapping(value={"action_node_edit"})
	public String actionNodeEdit(Model model,HttpServletRequest request, HttpServletResponse response,
			ActionNode actionNode) {
		
		if(request.getMethod().equals("POST")){
			actionNodeService.update(actionNode);
			return ajaxReturn(response, null,"修改成功",1);
		}else{
			model.addAttribute("actionNode",actionNodeService.findById(actionNode.getId()));
			return "admin/action_node_edit";
		}
	}
	
	/**
	 * 删除权限节点
	 * @param model
	 * @return
	 */
	@RequestMapping(value={"action_node_delete"},method=RequestMethod.POST)
	public String actionNodeDelete(Model model, HttpServletRequest request,HttpServletResponse response,Integer id) {
		String delIds = request.getParameter("delIds");
		
		String[] ids = delIds.split(",");
		int count = 0;
		for(String temp : ids){
		  count += actionNodeService.delete(StringUtil.stringToInteger(temp));
		}
		if(count==0)
			return ajaxReturn(response,null,"删除失败",0);
		else
			return ajaxReturn(response, count+"","删除成功",1);
		
	}
	
	/**
     * 角色管理
     * @param model
     * @return
     */
	@RequestMapping(value={"role"})
	public String role(Model model, HttpServletRequest request, HttpServletResponse response) {
		if(request.getMethod().equals("POST")){
			Map<String, Object> where = new HashMap<String, Object>();
			return ajaxReturn(response, roleServcie.getUIGridData(where,UIUtils.getPageParams(request)));
		}else{
			return "admin/role";
		}
	}

	/**
     * 角色添加
     * @param model
     * @return
     * @throws Exception 
     */
    @RequestMapping(value={"role_add"})
    public String roleAdd(Model model,HttpServletRequest request, HttpServletResponse response
    		,Role entity) throws Exception {
    	if(request.getMethod().equals("POST")){
    		int flag = roleServcie.save(entity);
    		if(flag == 1){
				return ajaxReturn(response, null,"添加成功",1);
			}else {
				return ajaxReturn(response, null,"发生错误，请重试！",0);
			}
    	}
    	return "admin/role_add";
    }

    /**
     * 角色编辑
     * @param model
     * @return
     * @throws Exception 
     */
    @RequestMapping(value={"role_edit"})
    public String roleEdit(Model model,HttpServletRequest request, HttpServletResponse response
    		,Role entity) throws Exception {
    	
    		if(entity.getId() != null){
    			model.addAttribute("role",roleServcie.findById(entity.getId()));
    		}
    		if(request.getMethod().equals("POST")){
//    			System.out.println(entity.getId()+" "+entity.getName()+" AdminController 248");
    		int flag = roleServcie.update(entity);
    		if(flag == 1){
				return ajaxReturn(response, null,"添加成功",1);
			}else {
				return ajaxReturn(response, null,"发生错误，请重试！",0);
			}
    	}
        return "admin/role_edit";
    }
    
    @RequestMapping(value={"role_delete"})
	public String roleDel(HttpServletRequest request,HttpServletResponse response,Integer id) {
//		if(request.getMethod().equals("POST")){
//			System.out.println(id);
			roleServcie.delete(id);
			return ajaxReturn(response, null,"删除成功",1);
    }
    
    /**
     * 设置角色权限
     * @param model
     * @return
     * @throws Exception 
     */
    @RequestMapping(value={"role_access"})
	public String roleAccess(Model model,HttpServletRequest request,HttpServletResponse response
			,Integer id) throws Exception {
		if(request.getMethod().equals("POST")){
			String[] nodeIds= request.getParameterValues("nodeId");
//			roleNodeService.delete(id);
			if (nodeIds!=null) {
				for (String nodeId : nodeIds) {
					RoleNode roleNode = new RoleNode();
					roleNode.setRoleId(id);
					roleNode.setNodeId(Integer.valueOf(nodeId));
					roleNode.setAddTime(Fn.time());
					roleNodeService.save(roleNode);
				}
			}
			return ajaxReturn(response, null,"授权成功~",1);
		}else {
			List<Map<String, Object>> node = actionNodeService.getNodeList(id);
			System.out.println(node.toString()+"test");
			model.addAttribute("node", node);
			return "admin/role_access";
		}

	}
	
	/**
	 * 头像设置
	 */
	@RequestMapping(value={"set_head"})
	public String setHead(Model model,HttpServletRequest request,HttpServletResponse response) {
		    Admin entity = adminService.findById(1);//假设ID为1
		    model.addAttribute("admin", entity);
		    
		   //model.addAttribute("picUrl", UploadUtils.parseFileUrl(entity.getHeadImage()));
			return "admin/set_head";
	}
	
	/**
	 * 头像设置
	 */
	@RequestMapping(value={"set_head_save"})
	public String setHeadSave(Model model,Integer id,HttpServletRequest request,HttpServletResponse response
			,@RequestParam("file_data") MultipartFile file_data
			,@RequestParam("title") String str
			,@RequestParam("age") Integer age1) {
		
		
		//String title = request.getParameter("title");
		//Integer age = Integer.parseInt(request.getParameter("age"));
		 //处理文件上传
		String picWeb = ""; //图片保存名
		Map<String,Object> picWebInfo = UploadUtils.saveMultipartFile(file_data);
		if((Integer)picWebInfo.get("status")>0){ //上传完成
			picWeb =  UploadUtils.parseFileUrl(picWebInfo.get("saveName").toString());
		}else{ //上传出错
			return ajaxReturn(response,null,picWebInfo.get("errorMsg").toString(),0);
		}
		
		//String id = request.getParameter("id");
		Admin entity = adminService.findById(id);
		//entity.setHeadImage(picWeb);//保存文件url
		//entity.setHeadImage(picWebInfo.get("saveName").toString());//保存文件名
		
		try {
			adminService.update(entity);
		} catch (Exception e) {
			return ajaxReturn(response, null, "更新头像失败", 0);
		}
		
		return ajaxReturn(response, null, "更新头像成功", 1);
	}
}
