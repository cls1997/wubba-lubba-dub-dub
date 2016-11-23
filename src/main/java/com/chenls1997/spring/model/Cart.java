package com.chenls1997.spring.model;

import java.util.Date;

public class Cart {
    private Long carid;

    private String userid;

    private String goodsid;

    private Date ordertime;

    private Integer ordercount;

    private Double goodsprice;

    private Integer usercheck;

    private Double orderprice;

    public Long getCarid() {
        return carid;
    }

    public void setCarid(Long carid) {
        this.carid = carid;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid == null ? null : userid.trim();
    }

    public String getGoodsid() {
        return goodsid;
    }

    public void setGoodsid(String goodsid) {
        this.goodsid = goodsid == null ? null : goodsid.trim();
    }

    public Date getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(Date ordertime) {
        this.ordertime = ordertime;
    }

    public Integer getOrdercount() {
        return ordercount;
    }

    public void setOrdercount(Integer ordercount) {
        this.ordercount = ordercount;
    }

    public Double getGoodsprice() {
        return goodsprice;
    }

    public void setGoodsprice(Double goodsprice) {
        this.goodsprice = goodsprice;
    }

    public Integer getUsercheck() {
        return usercheck;
    }

    public void setUsercheck(Integer usercheck) {
        this.usercheck = usercheck;
    }

    public Double getOrderprice() {
        return orderprice;
    }

    public void setOrderprice(Double orderprice) {
        this.orderprice = orderprice;
    }
}