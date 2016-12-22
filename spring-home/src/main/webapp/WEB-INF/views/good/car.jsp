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
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/master.css">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/master.js"></script>
</head>
<body>

<div class="header">
    <div class="top">
        <ul>
            <a href="#" target="_blank"><li>我要卖</li></a>
            <div id="section-login" class="toplog">
                <a href="#" id="loginbtn"><li>登录</li></a>
                <a href="#" id="registerbtn"><li>注册</li></a>
            </div>
        </ul>

        <div class="topsvc">
            <ul>
                <a href="user.html" target="_blank"><li>个人中心</li></a>
                <!--	sha bi cls <a href="#"><li>消息</li></a></a> -->
                <a href="#" target="_blank"><li>我的订单</li></a>
                <li>
                    <a href="#" target="_blank"><div class="topcar">我的购物车</div></a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="search">
    <div class="logo"><img src="images/logo.gif"/></div>
    <div class="searchtext">
        <span>搜本店</span>
        <form method="get">
            <input type="text">
            <input type="submit" value="">
        </form>
    </div>
</div>
<div class="center"><img src="images/carhr.png"></div>
<div class="carctn">
    <div class="carheader">
        <div class="carhdtitle">商品信息</div>
        <div class="carhdprice">单价</div>
        <div class="carhdnum">数量</div>
    </div>
    <div class="carbody">
        <div class="carbdimg"><img src="images/goodtest.png"></div>
        <div class="carbdmsg">
            <ul>
                <li class="carbdtitle">三只松鼠 夏威夷果200g</li>
                <li class="carbdtype">标签：<div>坚果</div></li>
                <li class="carbdstork">库存：200件</li>
                <li class="carbddelete">删除</li>
            </ul>
        </div>
        <div class="carbdprice">￥120.00</div>
        <div class="carbdnum">1</div>
    </div>
    <div class="carbody">
        <div class="carbdimg"><img src="images/goodtest.png"></div>
        <div class="carbdmsg">
            <ul>
                <li class="carbdtitle">三只松鼠 夏威夷果200g</li>
                <li class="carbdtype">标签：<div>坚果</div></li>
                <li class="carbdstork">库存：200件</li>
                <li class="carbddelete">删除</li>
            </ul>
        </div>
        <div class="carbdprice">￥120.00</div>
        <div class="carbdnum">1</div>
    </div>
    <div class="carbody">
        <div class="carbdimg"><img src="images/goodtest.png"></div>
        <div class="carbdmsg">
            <ul>
                <li class="carbdtitle">三只松鼠 夏威夷果200g</li>
                <li class="carbdtype">标签：<div>坚果</div></li>
                <li class="carbdstork">库存：200件</li>
                <li class="carbddelete">删除</li>
            </ul>
        </div>
        <div class="carbdprice">￥120.00</div>
        <div class="carbdnum">1</div>
    </div>
    <div class="carfooter">
        <div class="leftarea">购物车可以暂存您的商品，并且显示商品的最新价格。</div>
        <div class="rightarea" id="carshopbtn">结算</div>
        <div class="rightarea" id="cartotalprice">小计（3件商品）：<span>￥360.00</span> </div>
    </div>
</div>
<div class="footer">
    &copy;Copyright 2016. cls. All rights reserved.
    <div class="rightarea">
        <img src="images/visa.gif">
        <img src="images/master.gif">
        <img src="images/paypal.gif">
    </div>
</div>
<div class="login" id="logbody">
    <div class="login-head">登&nbsp;录</div>
    <div class="login-body">
        <form >
            <div class="login-mb"><img src="images/userlogo.gif"><input type="text" name="username" class="userinput" value="请输入您的账号"></div>
            <div class="login-mb"><img src="images/passwordlogo.gif"><input type="text" name="userpassword" class="passwordinput" value="请输入您的密码"></div>
            <div class="login-mb"><input type="submit" value="登&nbsp;录"></div>
            <div class="login-btm">
                <div class="leftarea"><input name="rem" type="checkbox" checked="checked" value="" /><a href="#">记住我</a></div>
                <div class="rightarea"><a href="#">忘记密码？</a></div>
            </div>
        </form>
    </div>
</div>
<div class="login" id="regbody">
    <div class="login-head">注&nbsp;册</div>
    <div class="login-body">
        <form >
            <div class="login-mb"><img src="images/userlogo.gif"><input type="text" name="username" class="userinput" value="请输入您的账号"></div>
            <div class="login-mb"><img src="images/passwordlogo.gif"><input type="text" name="password" class="passwordinput" value="请输入您的密码"></div>
            <div class="login-mb"><img src="images/passwordlogo.gif"><input type="text" name="confirmpassword" class="passwordinput2" value="请确认您的密码"></div>
            <div class="login-mb"><input type="submit" value="注&nbsp;册"></div>
        </form>
    </div>
</div>
</body>
</html>