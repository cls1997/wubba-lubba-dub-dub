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

<div class="shopbody">
    <div class="shopleft">
        <div class="sgtitle">商品信息</div>
        <c:forEach items="${checkouts}" var="item" varStatus="i">
            <div class="sgbody">
                <div class="sgimg"><img src="${item.get("goodPic")}"></div>
                <div class="sgmsg">
                    <ul>
                        <li class="sgmsg1">${item.get("goodName")}</li>
                        <li class="sgmsg2">
                            <div>
                                ${item.get("typeName")}
                            </div>
                        </li>
                        <li class="sgmsg3">${item.get("orderCount")}件&nbsp;
                            <span>共<fmt:formatNumber type="currency">${item.getDouble("orderPrice")*item.getInt("orderCount")}</fmt:formatNumber></span></li>
                    </ul>
                </div>
            </div>
        </c:forEach>
    </div>
    <div class="shopright">
        <div class="satitle">您的收货地址：</div>
        <div class="sainput"><input type="text" value="${user.address}" id="sads"></div>
        <div class="saphone">联系电话：<input type="text" value="${user.phone}" id="sphone"></div>
        <div class="satotalprice">合计：<span><fmt:formatNumber type="currency">${price}</fmt:formatNumber> </span></div>
        <div class="sashopbtn" id="sasubmit" onclick="submit()">购买</div>
    </div>
</div>

<div class="login" id="logbody">
</div>
<script>

    function submit() {
        var data={
            "saddress": $("#sads").val(),
        };
        $.post(urls.carCheckout,data,function (r) {
            alert("购买成功")
            $(location).attr('href',"/sub/list");
            }
        );
        /*
         * TODO 自己写 info是成功的数量
         * Time: 16/12/29 7:20
         * Creator: Chenls
         */
    }
</script>
</body>
</html>