package com.chenls1997.spring.controller;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.chenls1997.spring.annotation.Login;
import com.chenls1997.spring.model.Cart;
import com.chenls1997.spring.service.CartService;
import com.chenls1997.spring.service.GoodService;
import com.chenls1997.spring.service.TypeService;
import com.chenls1997.spring.util.UploadUtils;
import com.sun.org.apache.xpath.internal.operations.Mod;
import com.zlzkj.core.sql.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.*;

/**
 * 购物车相关控制器
 * Created by Chenls on 16/12/07.
 */

@Controller
@RequestMapping(value = "cart")
@SessionAttributes("user_id")
public class CartController extends BaseController {
    private final CartService cartService;
    private final GoodService goodService;
    private final TypeService typeService;

    @Autowired
    public CartController(HttpSession httpSession,GoodService goodService, CartService cartService, TypeService typeService) {
        super(httpSession);
        this.goodService = goodService;
        this.cartService = cartService;
        this.typeService = typeService;
    }

    /**
     * @param model
     * @return
     */
    @RequestMapping(value = "list")
    @Login
    public String list(Model model, HttpServletRequest request, HttpServletResponse response) {
        List<Row> result = cartService.findByUserid(this.getCurrentUserId());
        Double price = 0d;

        for (Row r : result) {
            price+= r.getDouble("orderPrice")*r.getInt("orderCount");
            r.put("good_name",
                    goodService.findByID(r.getInt("goodId"))
                            .getGoodName());
            r.put("good_price",
                    goodService.findByID(r.getInt("goodId"))
                            .getGoodPrice());
            r.put("good_stock",
                    goodService.findByID(r.getInt("goodId"))
                            .getGoodStock());
            r.put("good_img", UploadUtils.parseFileUrl(
                    goodService.findByID(r.getInt("goodId"))
                            .getGoodImage()
            ));
            r.put("type_name", typeService.findByID(
                    goodService.findByID(r.getInt("goodId")).getGoodTypeId()
            ).getName());

        }

        model.addAttribute("count", result.size());
        model.addAttribute("price", price);
        model.addAttribute("cart", result);
        return "good/car";
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    @Login
    public String add(Model model, HttpServletRequest request, HttpServletResponse response,
                      @RequestParam("goodId") Integer goodId,
                      @RequestParam("orderCount") Integer orderCount) {
        Cart cart = new Cart();
        cart.setGoodId(goodId);
        cart.setUserId(this.getCurrentUserId());
        cart.setOrderPrice(goodService.findByID(goodId).getGoodPrice());
        cart.setOrderCount(orderCount);
        cart.setOrderTime(new Date());
        Integer flag = 0;
        try {
            flag = cartService.save(cart);
        } catch (Exception e) {
            return ajaxReturn(response, null, e.getLocalizedMessage(), -1);
        }

        return ajaxReturn(response, null,
                flag == 1 ? "添加成功" : "添加失败", flag);
    }

    @RequestMapping(value = "delete",method = RequestMethod.POST)
    public String deleteHandler(Model model, HttpServletRequest request, HttpServletResponse response,
                                @RequestParam("id") Integer id) {
        System.out.println("CartController:110 "+id);
        Integer flag = cartService.delete(id);
        return ajaxReturn(response, null,
                flag == 1 ? "删除成功" : "删除失败", flag);
    }

    /**
     * 用户清空购物车
     * @return 返回的json对象包含2个值 successs表示操作成功个数，total代表总操作数
     */
    @RequestMapping(value = "purge",method = RequestMethod.POST)
    @Login
    public String purgeHandler(Model model,HttpServletRequest request,HttpServletResponse response){
        Integer result = 0;
        List<Row> list = cartService.findByUserid(this.getCurrentUserId());
        for (Row r : list){
            result += cartService.delete(r.getInt("id"));
        }
        Map<String,Integer> ret = new HashMap<>();
        ret.put("success",result);
        ret.put("total",list.size());
        return ajaxReturn(response, ret);
    }

    @RequestMapping(value = "checkout", method = RequestMethod.GET)
    @Login
    public String checkoutHandler(Model model,HttpServletRequest request,HttpServletResponse response){
        List<Row> checkouts = cartService.findByUserid(this.getCurrentUserId());
        Double price = 0d;

        for (Row r : checkouts){
            price+= r.getDouble("orderPrice") * r.getInt("orderCount");
            r.put("goodName",goodService.findByID(r.getInt("goodId")).getGoodName());
            r.put("typeName",typeService.findByID(goodService.findByID(r.getInt("goodId")).getGoodTypeId()).getName());
            r.put("goodPic",UploadUtils.parseFileUrl(goodService.findByID(r.getInt("goodId")).getGoodImage()));
        }

        model.addAttribute("checkouts",checkouts);
        model.addAttribute("user",this.getCurrentUser());
        model.addAttribute("price",price);
        return "good/shop";
    }


    @RequestMapping(value = "buynow")
    @Login
    public String buynowHandler(Model model,HttpServletRequest request,HttpServletResponse response,
                                @RequestParam Integer goodId,
                                @RequestParam Integer orderCount){

        return ajaxReturn(response,null);
    }


}
