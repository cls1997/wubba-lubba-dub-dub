<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/12/16
  Time: 3:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-Type" content="text/html;charset=UTF-8">
    <title>Delicacy in Leside</title>
    <link rel="stylesheet" type="text/css" href="${__static__}/css/reset.css">
    <link rel="stylesheet" type="text/css" href="${__static__}/css/master.css">
    <script type="text/javascript" src="${__static__}/js/jquery.js"></script>
    <script type="text/javascript" src="${__static__}/js/master.js"></script>
</head>
<body class="userbody">
<div class="userlogo">
    <img src="${__static__}/images/userlogo.png">
</div>
<div class="userbanner">
    <img src="${__static__}/images/userbanner.png">
</div>
<div class="usertitle">欢迎来到个人中心</div>
<div class="usernav">
    <!--#5c6575-->
    <div id="mysub">我的订单</div>
    <div id="mycar">我的购物车</div>
</div>
<div class="usertitle">完善个人资料</div>
<div class="userdetail">
    <div class="leftarea">
        <div class="udform"><span>用户名</span><input type="text" value="CZS"></div>
        <div class="udform"><span>手机号</span><input type="text" value="1888888888"></div>
        <div class="udform"><span>邮箱</span><input type="text" value="11111111@163.com"></div>
    </div>
    <div class="rightarea">
        <div class="udform"><span>安全问题</span><input type="text" value="我是谁？"></div>
        <div class="udform"><span>问题答案</span><input type="text" value="CZS"></div>
        <div class="udform"><span>地址</span><input type="text" value="浙江-杭州-临安-胜联路168号"></div>
    </div>
    <div class="userbutton"><input type="button" value="确认"> </div>
</div>
<img src="${__static__}/images/userfooter.png">
<div class="footer">
    &copy;Copyright 2016. cls. All rights reserved.
    <div class="rightarea">
        <img src="${__static__}/images/visa.gif">
        <img src="${__static__}/images/master.gif">
        <img src="${__static__}/images/paypal.gif">
    </div>
</div>
</body>
</html>