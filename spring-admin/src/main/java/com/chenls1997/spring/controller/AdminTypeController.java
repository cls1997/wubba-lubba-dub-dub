package com.chenls1997.spring.controller;

import com.chenls1997.spring.model.Type;
import com.chenls1997.spring.service.TypeService;
import com.chenls1997.spring.util.StringUtil;
import com.chenls1997.spring.util.UIUtils;
import com.zlzkj.core.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * Created by Chenls on 16/12/16.
 */
@Controller
@RequestMapping("admin/type")
public class AdminTypeController extends BaseController {
    @Autowired
    private TypeService typeService;

    @RequestMapping(value = "add")
    public String TypeAddRequest(Type entity, HttpServletRequest request, HttpServletResponse response){
        Integer ret = null;
        try {
            ret = typeService.save(entity);
        } catch (Exception e) {
            ajaxReturn(response, null, e.getLocalizedMessage(), -1);
        }
        if (ret == null) {
            return ajaxReturn(response, null, "添加失败", 0);
        } else {
            return ajaxReturn(response, null, "添加成功", 1);
        }
    }

    @RequestMapping(value = "delete")
    public String TypeDeleteHandler(Model model, HttpServletRequest request, HttpServletResponse response, Type entity){
        String delIds = request.getParameter("ids");

        String ids[] = delIds.split(",");
        int count = 0;
        for(String id : ids){
            count += typeService.delete(StringUtil.stringToInteger(id));
        }
        if(count==0){
            return ajaxReturn(response,null,",删除失败",0);
        } else {
            return ajaxReturn(response,count+"","删除成功",1);
        }
    }

    @RequestMapping(value = "edit")
    public String TypeEditHandler(Model model,Type entity,HttpServletRequest request,HttpServletResponse response,Integer id){
        if (request.getMethod().equals("POST")){
            Integer count = null;
            try{
                count = typeService.update(entity);
            } catch (Exception e){
                return ajaxReturn(response,null,e.getLocalizedMessage(),-1);
            }
            if(count==0)
                return ajaxReturn(response,null,"更新失败",0);
            else
                return ajaxReturn(response, null,"更新成功",1);
        } else {
            model.addAttribute("type",typeService.findByID(id));
            return "type/edit";
        }
    }

    @RequestMapping("list")
    public String TypeListHandler(Model model,HttpServletRequest request,HttpServletResponse response){
        Map<String, Object> typeList = typeService.getUIGridData(null, UIUtils.getPageParams(request));
        model.addAttribute("typeList",typeList);

        if (request.getMethod().equals("POST")){
            return ajaxReturn(response,typeList);
        } else {
            return "type/list";
        }
    }
}
