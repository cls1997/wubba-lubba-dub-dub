package com.chenls1997.spring.model;

public class Good {
    private Integer id;

    private String goodName;

    private Double goodPrice;

    private Integer goodTypeId;

    private String goodIntro;

    private String goodImage;

    private Long goodSold;

    private Long goodStock;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGoodName() {
        return goodName;
    }

    public void setGoodName(String goodName) {
        this.goodName = goodName == null ? null : goodName.trim();
    }

    public Double getGoodPrice() {
        return goodPrice;
    }

    public void setGoodPrice(Double goodPrice) {
        this.goodPrice = goodPrice;
    }

    public Integer getGoodTypeId() {
        return goodTypeId;
    }

    public void setGoodTypeId(Integer goodTypeId) {
        this.goodTypeId = goodTypeId;
    }

    public String getGoodIntro() {
        return goodIntro;
    }

    public void setGoodIntro(String goodIntro) {
        this.goodIntro = goodIntro == null ? null : goodIntro.trim();
    }

    public String getGoodImage() {
        return goodImage;
    }

    public void setGoodImage(String goodImage) {
        this.goodImage = goodImage == null ? null : goodImage.trim();
    }

    public Long getGoodSold() {
        return goodSold;
    }

    public void setGoodSold(Long goodSold) {
        this.goodSold = goodSold;
    }

    public Long getGoodStock() {
        return goodStock;
    }

    public void setGoodStock(Long goodStock) {
        this.goodStock = goodStock;
    }
}