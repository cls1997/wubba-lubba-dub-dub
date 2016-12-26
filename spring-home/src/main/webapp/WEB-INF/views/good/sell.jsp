<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/12/9
  Time: 10:54
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
<div class="sellbody">
    <form action="" method="post" enctype="multipart/form-data">
        <div class="found-mb">请输入商品名称：</div>
        <div class="found-mb"><input type="text"></div>
        <div class="found-mb">请输入商品单价 (单位：￥)：</div>
        <div class="found-mb"><input type="text"></div>
        <div class="found-mb">请输入商品库存：</div>
        <div class="found-mb"><input type="text"></div>
        <div class="found-mb">请输入商品描述：</div>
        <div class="found-mb"><input type="text"></div>
        <div class="found-mb">请上传商品图片：</div>
        <div class="found-mb"><input class="jq-validatebox w300" type="file" name="file_data" data-options="required:false"/></div>
        <div class="found-mb"><input type="submit" value="上架商品" id=""></div>
    </form>
</div>


<div class="login" id="logbody">
</div>

<div class="commentbody">
    <div class="cm_head">评&nbsp;论</div>
    <div class="cm_body">
        <div class="cm_msg">确认收货成功！写点评论吧</div>
        <form action="" method="">
            <div class="login-mb"><textarea id="commenttext" wrap="physical"></textarea>
                <div class="login-mb"><input type="submit" id="commentbtn"></div>
            </div>
        </form>
    </div>
</div>
</body>
</html>