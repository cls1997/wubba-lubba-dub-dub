<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/12/22
  Time: 20:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-Type" content="text/html;charset=UTF-8">
    <title>Delicacy in Leside</title>
    <%@include file="../index/resource.jsp"%>
</head>
<body>

<%@include file="../include/header.jsp"%>

<div class="center"><img src="${__static__}/images/carhr.png"></div>
<div class="carctn">
    <div class="carheader">
        <div class="carhdtitle">商品信息</div>
        <div class="carhdprice">单价</div>
        <div class="carhdnum">数量</div>
    </div>
    <c:if test="${cart.size()==0}">
        <div class="carbody">
            <span>您的购物车为空</span>
        </div>
    </c:if>
    <c:forEach items="${cart}" var="item">
    <div class="carbody">
        <div class="carbdimg"><img src="${__static__}/images/goodtest.png"></div>
        <div class="carbdmsg">
            <ul>
                <li class="carbdtitle">${item.get("good_name")}</li>
                <li class="carbdtype">标签：<div>${item.get("type_name")}</div></li>
                <li class="carbdstork">库存：${item.get("good_stock")}</li>
                <li class="carbddelete"><a href="${z:u('')}+?id=${cart.get("good_id")}"> 删除</a></li>
            </ul>
        </div>
        <div class="carbdprice">￥120.00</div>
        <div class="carbdnum">1</div>
    </div>
    </c:forEach>
    <div class="carfooter">
        <div class="leftarea">购物车可以暂存您的商品，并且显示商品的最新价格。</div>
        <div class="rightarea" id="carshopbtn">结算</div>
        <div class="rightarea" id="cartotalprice">
            小计（${count}件商品）：<span><fmt:formatNumber value="${price}" type="currency"/></span>
        </div>
    </div>
</div>
<div class="login" id="logbody">
</div>

<%@include file="../include/footer.jsp"%>
</body>
</html>