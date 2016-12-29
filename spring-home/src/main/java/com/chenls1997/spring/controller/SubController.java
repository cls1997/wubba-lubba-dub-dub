package com.chenls1997.spring.controller;

import com.chenls1997.spring.Constants;
import com.chenls1997.spring.annotation.Login;
import com.chenls1997.spring.model.Sub;
import com.chenls1997.spring.model.User;
import com.chenls1997.spring.service.CartService;
import com.chenls1997.spring.service.GoodService;
import com.chenls1997.spring.service.SubService;
import com.chenls1997.spring.service.UserService;
import com.chenls1997.spring.util.UploadUtils;

import com.chenls1997.spring.utils.LoginType;
import com.zlzkj.core.sql.Row;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.bind.annotation.XmlList;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * Created by Chenls on 16/12/15.
 */
@Controller
@RequestMapping("sub")
public class SubController extends BaseController {
    private final SubService subService;
    private final CartService cartService;
    private final GoodService goodService;

    @Autowired
    public SubController(HttpSession httpSession, CartService cartService, SubService subService, GoodService goodService) {
        super(httpSession);
        this.cartService = cartService;
        this.subService = subService;
        this.goodService = goodService;
    }

    @Login
    @RequestMapping(value = "list")
    public String subViewHandler(Model model, HttpServletRequest request, HttpServletResponse response){
        List<Row> subs = subService.getSubsByUserid (this.getCurrentUserId());
        List<Row> outdatedSubs = subService.getOutdatedSubsByUserid(this.getCurrentUserId());
        for (Row r : subs){
            r.put("goodname", goodService.findByID(
                    r.getInt("goodId")
            ).getGoodName());
            r.put("goodimage", UploadUtils.parseFileUrl(goodService.findByID(
                    r.getInt("goodId")
            ).getGoodImage()));
        }

        for (Row r : outdatedSubs){
            r.put("goodname", goodService.findByID(
                    r.getInt("goodId")
            ).getGoodName());
            r.put("goodimage", UploadUtils.parseFileUrl(goodService.findByID(
                    r.getInt("goodId")
            ).getGoodImage()));
        }

        model.addAttribute("subs",subs);
        model.addAttribute("outdatedSubs",outdatedSubs);
        return "good/sub";
    }
    @Login
    @RequestMapping(value = "buynow")
    public String checkoutHandler(Model model,HttpServletRequest request,HttpServletResponse response,
                                  @RequestParam Integer goodId,
                                  @RequestParam Integer orderCount){
        Sub s = new Sub();
        s.setUserId(this.getCurrentUserId());
        s.setGoodId(goodId);
        s.setOrderedTime(new Timestamp(new Date().getTime()));
        s.setReceiveAddress(this.getCurrentUser().getAddress());
        s.setPrice(goodService.findByID(goodId).getGoodPrice()*orderCount);
        s.setState(1);

        return ajaxReturn(response,null,"",subService.save(s));

    }

    @Login
    @RequestMapping(value = "checkout")
    public String checkoutHandler(Model model,HttpServletRequest request,HttpServletResponse response,
                                @RequestParam String saddress){
        List<Row> cart = cartService.findByUserid(this.getCurrentUserId());
        Sub s = null;
        Integer ret = 0;
        for (Row r:cart){
            s = new Sub();
            s.setUserId(this.getCurrentUserId());
            s.setGoodId(r.getInt("goodId"));
            s.setOrderedTime(new Timestamp(new Date().getTime()));
            s.setReceiveAddress(saddress);
            s.setPrice(r.getDouble("orderPrice")*r.getInt("orderCount"));
            s.setState(1);
            ret+= subService.save(s);
            cartService.delete(r.getInt("id"));
        }
        return ajaxReturn(response,null,ret.toString(),ret>=1?1:0);
    }

    @Login
    @RequestMapping("confirm")
    public String checkoutHandler(Model model,HttpServletRequest request,HttpServletResponse response,
                                  @RequestParam Integer id){
        Sub s = subService.findByID(id);
        s.setState(0);
        Integer ret = subService.update(s);
        return ajaxReturn(response,null,ret.toString(),ret);
    }

}
