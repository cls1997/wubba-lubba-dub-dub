package com.chenls1997.spring.controller;


import com.chenls1997.spring.model.Cart;
import com.chenls1997.spring.service.CartService;
import com.chenls1997.spring.service.GoodService;
import com.chenls1997.spring.service.TypeService;
import com.chenls1997.spring.util.UploadUtils;
import com.sun.org.apache.xpath.internal.operations.Mod;
import com.zlzkj.core.base.BaseController;
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
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * 购物车相关控制器
 * Created by Chenls on 16/12/07.
 */

@Controller
@RequestMapping(value = "cart")
@SessionAttributes("user_id")
public class
CartController extends BaseController {
    private final CartService cartService;
    private final GoodService goodService;
    private final TypeService typeService;

    @Autowired
    public CartController(GoodService goodService, CartService cartService, TypeService typeService) {
        this.goodService = goodService;
        this.cartService = cartService;
        this.typeService = typeService;
    }

    /**
     * @param model
     * @param id
     * @return
     */
    @RequestMapping(value = "list")
    public String list(Model model, Integer id, HttpServletRequest request, HttpServletResponse response) {
        List<Row> result = cartService.findByUserid(id);

        Double price = 0d;
        for (Row r : result) {
            price+= r.getDouble("order_price")*r.getInt("order_count");
            r.put("good_name",
                    goodService.findByID(r.getInt("good_id"))
                            .getGoodName());
            r.put("good_price",
                    goodService.findByID(r.getInt("good_id"))
                            .getGoodPrice());
            r.put("good_stock",
                    goodService.findByID(r.getInt("good_id"))
                            .getGoodStock());
            r.put("good_img", UploadUtils.parseFileUrl(
                    goodService.findByID(r.getInt("good_id"))
                            .getGoodImage()
            ));
            r.put("type_name", typeService.findByID(
                    goodService.findByID(r.getInt("good_id")).getGoodTypeId()
            ).getName());

        }
        System.out.println(price);
        model.addAttribute("count", result.size());
        model.addAttribute("price", price.doubleValue());
        model.addAttribute("cart", result);
        return "good/car";
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public String add(Model model, HttpServletRequest request, HttpServletResponse response,
                      @RequestParam("goodId") Integer goodId,
                      @RequestParam("orderCount") Integer orderCount) {
        Integer userid = (Integer) request.getSession().getAttribute("user_id");

        Cart cart = new Cart();
        cart.setGoodId(goodId);
        cart.setUserId(userid);
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

    @RequestMapping(value = "delete")
    public String deleteHandler(Model model, HttpServletRequest request, HttpServletResponse response,
                                @RequestParam("id") Integer id) {
        Integer flag = cartService.delete(id);
        return ajaxReturn(response, null,
                flag == 1 ? "删除成功" : "删除失败", flag);
    }

    @RequestMapping(value = "checkout")
    public String checkoutHandler(Model model,HttpServletRequest request,HttpServletResponse response,
                                  @RequestParam Integer[] ids){
        List<Cart> checkouts = new ArrayList<Cart>();
        for (Integer i : ids)
            checkouts.add(cartService.findByID(i));

        return ajaxReturn(response, null);
    }

    @RequestMapping(value = "buynow")
    public String buynowHandler(Model model,HttpServletRequest request,HttpServletResponse response,
                                @RequestParam Integer goodId,
                                @RequestParam Integer orderCount){

        return ajaxReturn(response,null);
    }
}
