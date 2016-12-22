<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/12/22
  Time: 20:50
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
<div class="subtitleline">
    <div class="titleleft">当前订单</div>
    <div class="titleright">往期订单</div>
</div>
<div class="subbody">
    <div class="subnow">
        <div class="subnowbody">
            <div class="subimg"><img src="images/goodtest.png"></div>
            <ul>
                <li><div class="subtitle">三只松鼠 夏威夷果200g</div></li>
                <li><div class="subnum">订单编号：<span>11111111111</span></div></li>
                <li><div class="ordertime">下单时间：<span>1111年11月1日</span></div></li>
                <li><div class="subconfirm" id="confirmsub">确认收货</div></li>
            </ul>
        </div>
        <div class="subnowbody">
            <div class="subimg"><img src="images/goodtest.png"></div>
            <ul>
                <li><div class="subtitle">三只松鼠 夏威夷果200g</div></li>
                <li><div class="subnum">订单编号：<span>11111111111</span></div></li>
                <li><div class="ordertime">下单时间：<span>1111年11月1日</span></div></li>
                <li><div class="subconfirm" id="confirmsub">确认收货</div></li>
            </ul>
        </div>
    </div>
    <div class="subhis">
        <div class="subnowbody">
            <div class="subimg"><img src="images/goodtest.png"></div>
            <ul>
                <li><div class="subtitle">三只松鼠 夏威夷果200g</div></li>
                <li><div class="subnum">订单编号：<span>11111111111</span></div></li>
                <li><div class="ordertime">完成时间：<span>1111年11月1日</span></div></li>
                <li><div class="subconfirm" id="shopagain">再次购买</div></li>
            </ul>
        </div>
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
<div id="commentbody">

</div>
</body>
</html>