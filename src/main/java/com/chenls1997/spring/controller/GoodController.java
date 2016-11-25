package com.chenls1997.spring.controller;

import com.chenls1997.spring.model.Good;
import com.chenls1997.spring.model.Types;
import com.chenls1997.spring.service.GoodService;
import com.chenls1997.spring.service.TypeService;
import com.chenls1997.spring.util.StringUtil;
import com.zlzkj.core.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by Chenls on 16/11/25.
 */
@Controller
@RequestMapping(value = "good")
public class GoodController extends BaseController {
    @Autowired
    private GoodService goodService;

    @Autowired
    private TypeService typeService;

    @RequestMapping(value = "add",method = RequestMethod.POST)
    public String addMethod(Good entity,HttpServletRequest request, HttpServletResponse response){
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
    @RequestMapping(value = "delete",method = RequestMethod.POST)
    public String deleteMethod(HttpServletRequest request,HttpServletResponse response){
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
}
