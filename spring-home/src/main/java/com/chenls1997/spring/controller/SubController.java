package com.chenls1997.spring.controller;

import com.chenls1997.spring.Constants;
import com.chenls1997.spring.model.Sub;
import com.chenls1997.spring.service.GoodService;
import com.chenls1997.spring.service.SubService;
import com.chenls1997.spring.util.UploadUtils;
import com.zlzkj.core.base.BaseController;
import com.zlzkj.core.sql.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by Chenls on 16/12/15.
 */
@Controller
@RequestMapping("sub")
public class SubController extends BaseController {
    @Autowired
    private SubService subService;

    @Autowired
    private GoodService goodService;

    @RequestMapping(value = "list")
    public String subViewHandler(Model model, HttpServletRequest request, HttpServletResponse response){
        Integer userId = (Integer) request.getSession().getAttribute(Constants.userId);
        List<Row> subs = subService.getSubsByUserid (userId);
        List<Row> outdatedSubs = subService.getOutdatedSubsByUserid(userId);
        for (Row r : subs){
            r.put("goodname", goodService.findByID(
                    r.getInt("good_id")
            ).getGoodName());
            r.put("goodimage", UploadUtils.parseFileUrl(goodService.findByID(
                    r.getInt("good_id")
            ).getGoodImage()));
        }

        for (Row r : outdatedSubs){
            r.put("goodname", goodService.findByID(
                    r.getInt("good_id")
            ).getGoodName());
            r.put("goodimage", UploadUtils.parseFileUrl(goodService.findByID(
                    r.getInt("good_id")
            ).getGoodImage()));
        }

        model.addAttribute("subs",subs);
        model.addAttribute("outdatedSubs",outdatedSubs);
        return "good/sub";
    }

}
