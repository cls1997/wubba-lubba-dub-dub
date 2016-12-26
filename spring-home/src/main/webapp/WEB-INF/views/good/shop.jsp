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
        <div class="sgbody">
            <div class="sgimg"><img src="images/goodtest.png"></div>
            <div class="sgmsg">
                <ul>
                    <li class="sgmsg1">三只松鼠 夏威夷果200g</li>
                    <li class="sgmsg2"><div>坚果</div></li>
                    <li class="sgmsg3">3件&nbsp;<span>共￥120.00</span></li>
                </ul>
            </div>
        </div>
        <div class="sgbody">
            <div class="sgimg"><img src="images/goodtest.png"></div>
            <div class="sgmsg">
                <ul>
                    <li class="sgmsg1">三只松鼠 夏威夷果200g</li>
                    <li class="sgmsg2"><div>坚果</div></li>
                    <li class="sgmsg3">3件&nbsp;<span>共￥120.00</span></li>
                </ul>
            </div>
        </div>
        <div class="sgbody">
            <div class="sgimg"><img src="images/goodtest.png"></div>
            <div class="sgmsg">
                <ul>
                    <li class="sgmsg1">三只松鼠 夏威夷果200g</li>
                    <li class="sgmsg2"><div>坚果</div></li>
                    <li class="sgmsg3">3件&nbsp;<span>共￥120.00</span></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="shopright">
        <div class="satitle">您的收货地址：</div>
        <div class="sainput"><input type="text" value="浙江省杭州市临安青山湖街道胜联路168号" id="sads"></div>
        <div class="saphone">联系电话：<input type="text" value="15555555555" id="sphone"></div>
        <div class="satotalprice">合计：<span>￥360.00</span></div>
        <div class="sashopbtn">购买</div>
    </div>
</div>

<div class="login" id="logbody">
</div>

<%@include file="../include/footer.jsp"%>

</body>
</html>