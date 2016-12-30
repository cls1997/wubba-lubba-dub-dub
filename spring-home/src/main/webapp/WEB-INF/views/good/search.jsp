<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/12/30
  Time: 0:18
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

<br><br><br><br><br><br>
<div class="carctn">
    <div class="carheader">
        <div class="carhdtitle">搜索结果</div>
    </div>
    <c:forEach items="${result}" var="item">
    <div class="carbody">
        <div class="carbdimg"><img src="${item.get("goodPic")}"></div>
        <div class="carbdmsg">
            <ul>
                <li class="carbdtitle">${item.get("goodName")}&nbsp;${item.get("goodIntro")}</li>
                <li class="carbdtype">标签：<div>${item.get("goodTypeName")}</div></li>
                <li class="carbdstork">库存：${item.get("goodStock")}件</li>
            </ul>
        </div>
        <div class="carbdprice">￥${item.get("goodPrice")}</div>
        <div class="carbdnum" id="scgo">前去查看</div>
    </div>
    </c:forEach>

</div>
</body>
</html>