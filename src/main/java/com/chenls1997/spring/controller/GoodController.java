package com.chenls1997.spring.controller;

import com.alibaba.druid.pool.DruidDataSource;
import com.chenls1997.spring.model.Good;
import com.chenls1997.spring.model.Types;
import com.chenls1997.spring.service.GoodService;
import com.chenls1997.spring.service.TypeService;
import com.chenls1997.spring.util.StringUtil;
import com.sun.corba.se.impl.encoding.CodeSetConversion;
import com.zlzkj.core.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Controller
@RequestMapping(value = "good")
public class GoodController extends BaseController {
    @Autowired
    private GoodService goodService;

    @Autowired
    private TypeService typeService;

    @RequestMapping(value = "good_add",method = RequestMethod.POST)
    public String addGood(Good entity,HttpServletRequest request, HttpServletResponse response){
        Long ret = null;
        Long tid = entity.getGtypeid();
        Types t = typeService.findByID(tid);
        if (t==null)
            return ajaxReturn(response,null,"No Type",0);
        try{
            ret = goodService.save(entity);
        }catch (Exception e){
            return ajaxReturn(response,null,e.getLocalizedMessage(),-1);
        }
        if (ret>0){
            return ajaxReturn(response,null,"添加成功",1);
        }else {
            return ajaxReturn(response,null,"添加失败",0);
        }
    }

    @RequestMapping(value = "good_delete",method = RequestMethod.POST)
    public String deleteGood(HttpServletRequest request,HttpServletResponse response){
        String delIds = request.getParameter("ids");
        String ids[] = delIds.split(",");
        Integer count = 0;
        for(String id : ids){
            count += goodService.delete(StringUtil.stringToLong(id));
        }
        if(count==0){
            return ajaxReturn(response, count+"", "删除失败", 0);
        } else {
            return ajaxReturn(response, count+"", "删除成功", 1);
        }
    }

    @RequestMapping(value = "good_edit")
    public String editGood(Model model, HttpServletRequest request, HttpServletResponse response, Good entity){
        if (request.getMethod().equals("POST")){
            Integer ret=null;
            try{
                ret = goodService.update(entity);
            } catch (Exception e){
                return ajaxReturn(response,null,e.getLocalizedMessage(),-1);
            }
            if(ret==null){
                return ajaxReturn(response,null,"更新失败",0);
            } else {
                return ajaxReturn(response, null, "更新成功", 1);
            }
        } else {
            model.addAttribute("admin", goodService.findByID(entity.getGid()));
            return "good/edit";
        }
    }

    @RequestMapping(value = "good_view")
    public String goodView(Long id,HttpServletRequest request,HttpServletResponse response){
        Good ret = goodService.findByID(id);
        return ajaxReturn(response,ret);
    }

    @RequestMapping(value = "type_add")
    public String addType(Types entity,HttpServletRequest request,HttpServletResponse response){
        Long ret = null;
        try {
            ret = typeService.save(entity);
        } catch (Exception e) {
            ajaxReturn(response,null,e.getLocalizedMessage(),-1);
        }
        if (ret == null){
            return ajaxReturn(response,null,"添加失败",0);
        } else {
            return ajaxReturn(response,null,"添加成功",1);
        }
    }

    @RequestMapping(value = "type_delete")
    public String deleteType(){
        //TODO
        return null;
    }

    @RequestMapping(value = "type_edit")
    public String editType() {
        //TODO
        return null;
    }

}
