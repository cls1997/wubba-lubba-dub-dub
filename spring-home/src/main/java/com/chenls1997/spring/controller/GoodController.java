package com.chenls1997.spring.controller;

import com.chenls1997.spring.model.Good;
import com.chenls1997.spring.model.Types;
import com.chenls1997.spring.service.CommentService;
import com.chenls1997.spring.service.GoodService;
import com.chenls1997.spring.service.TypeService;
import com.chenls1997.spring.util.StringUtil;
import com.zlzkj.core.base.BaseController;
import com.zlzkj.core.sql.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;

/**
 * 商品相关控制器
 */

@Controller
@RequestMapping(value = "good")
public class GoodController extends BaseController {
    @Autowired
    private GoodService goodService;

    @Autowired
    private TypeService typeService;

    @Autowired
    private CommentService commentService;

    /**
     * 增加商品
     * @param entity
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "good_add",method = RequestMethod.POST)
    public String GoodAddHandler(Good entity,HttpServletRequest request, HttpServletResponse response){
        if (request.getMethod() == "POST") {
            Integer ret = null;
            Integer tid = entity.getId();
            Types t = typeService.findByID(tid);
            if (t == null)
                return ajaxReturn(response, null, "No Type", 0);
            try {
                ret = goodService.save(entity);
            } catch (Exception e) {
                return ajaxReturn(response, null, e.getLocalizedMessage(), -1);
            }
            if (ret > 0) {
                return ajaxReturn(response, null, "添加成功", 1);
            } else {
                return ajaxReturn(response, null, "添加失败", 0);
            }
        } else {
            return "good/add";
        }
    }

    @RequestMapping(value = "good_delete",method = RequestMethod.POST)
    public String GoodDeleteHandler(HttpServletRequest request,HttpServletResponse response,Integer id){
        String delIds = request.getParameter("ids");
        String ids[] = delIds.split(",");
        Integer count = 0;
        for(String temp : ids){
            count += goodService.delete(StringUtil.stringToInteger(temp));
        }
        if(count==0){
            return ajaxReturn(response, count+"", "删除失败", 0);
        } else {
            return ajaxReturn(response, count+"", "删除成功", 1);
        }
    }

    @RequestMapping(value = "good_edit")
    public String GoodEditHandler(Model model, HttpServletRequest request, HttpServletResponse response, Good entity){
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
            model.addAttribute("admin", goodService.findByID(entity.getId()));
            return "good/edit";
        }
    }

    @RequestMapping(value = "good_view")
    public String GoodViewHandler(Model model,HttpServletRequest request,HttpServletResponse response,Integer id){
        Good ret = goodService.findByID(id);
        List<Row> commentList = commentService.getCommentListByGoodId(id);
        model.addAttribute("good",ret);
        model.addAttribute("commentList",commentList);

        return "good/good";
    }



    @RequestMapping(value = "type_add")
    public String TypeAddRequest(Types entity,HttpServletRequest request,HttpServletResponse response){
        Integer ret = null;
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
    public String TypeDeleteHandler(){
        //TODO
        return null;
    }

    @RequestMapping(value = "type_edit")
    public String TypeEditHandler() {
        //TODO
        return null;
    }

}
