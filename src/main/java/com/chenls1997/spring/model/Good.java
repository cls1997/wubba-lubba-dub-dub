package com.chenls1997.spring.model;

public class Good {
    private Long gid;

    private String gname;

    private Double gprice;

    private Long gtypeid;

    private String gintro;

    private String gimage;

    private Long gsail;

    private Long gstock;

    public Long getGid() {
        return gid;
    }

    public void setGid(Long gid) {
        this.gid = gid;
    }

    public String getGname() {
        return gname;
    }

    public void setGname(String gname) {
        this.gname = gname == null ? null : gname.trim();
    }

    public Double getGprice() {
        return gprice;
    }

    public void setGprice(Double gprice) {
        this.gprice = gprice;
    }

    public Long getGtypeid() {
        return gtypeid;
    }

    public void setGtypeid(Long gtypeid) {
        this.gtypeid = gtypeid;
    }

    public String getGintro() {
        return gintro;
    }

    public void setGintro(String gintro) {
        this.gintro = gintro == null ? null : gintro.trim();
    }

    public String getGimage() {
        return gimage;
    }

    public void setGimage(String gimage) {
        this.gimage = gimage == null ? null : gimage.trim();
    }

    public Long getGsail() {
        return gsail;
    }

    public void setGsail(Long gsail) {
        this.gsail = gsail;
    }

    public Long getGstock() {
        return gstock;
    }

    public void setGstock(Long gstock) {
        this.gstock = gstock;
    }
}