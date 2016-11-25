package com.chenls1997.spring.model;

import java.util.Date;

public class Sub {
    private Long subid;

    private String userid;

    private Long goodsid;

    private String raddress;

    private Date spdate;

    private Integer spcount;

    private Double gprice;

    private Double spprice;

    private Date senddate;

    private Integer state;

    public Long getSubid() {
        return subid;
    }

    public void setSubid(Long subid) {
        this.subid = subid;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid == null ? null : userid.trim();
    }

    public Long getGoodsid() {
        return goodsid;
    }

    public void setGoodsid(Long goodsid) {
        this.goodsid = goodsid;
    }

    public String getRaddress() {
        return raddress;
    }

    public void setRaddress(String raddress) {
        this.raddress = raddress == null ? null : raddress.trim();
    }

    public Date getSpdate() {
        return spdate;
    }

    public void setSpdate(Date spdate) {
        this.spdate = spdate;
    }

    public Integer getSpcount() {
        return spcount;
    }

    public void setSpcount(Integer spcount) {
        this.spcount = spcount;
    }

    public Double getGprice() {
        return gprice;
    }

    public void setGprice(Double gprice) {
        this.gprice = gprice;
    }

    public Double getSpprice() {
        return spprice;
    }

    public void setSpprice(Double spprice) {
        this.spprice = spprice;
    }

    public Date getSenddate() {
        return senddate;
    }

    public void setSenddate(Date senddate) {
        this.senddate = senddate;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }
}