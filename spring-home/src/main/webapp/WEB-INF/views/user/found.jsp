<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/12/16
  Time: 3:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-Type" content="text/html;charset=UTF-8">
    <title>Delicacy in Leside</title>
    <%@include file="../public/resource.jsp"%>
</head>
<body>

<%@include file="../include/header.jsp"%>

<div class="center"><img src="${__static__}/images/found.png"></div>
<div class="foundform">
    <form>
        <div class="found-mb">请输入您的用户名：</div>
        <div class="found-mb"><input type="text"></div>
        <div class="found-mb">请输入您的安全问题：</div>
        <div class="found-mb"><input type="text"></div>
        <div class="found-mb">请输入您的安全问题答案：</div>
        <div class="found-mb"><input type="text"></div>
        <div class="found-mb">请输入您的新密码：</div>
        <div class="found-mb"><input type="password"></div>
        <div class="found-mb">请确认您的新密码：</div>
        <div class="found-mb"><input type="password"></div>
        <div class="found-mb"><input type="submit" value="找回密码" id="foundbtn"></div>
    </form>
</div>


<div class="login" id="logbody">
    <div class="login-head">登&nbsp;录</div>
    <div class="login-body">
        <form action="${z:u('user/register')}" method="post">
            <div class="login-mb"><img src="${__static__}/images/userlogo.gif"><input type="text" name="username"
                                                                                      class="userinput" value="请输入您的账号">
            </div>
            <div class="login-mb"><img src="${__static__}/images/passwordlogo.gif"><input type="text"
                                                                                          name="userpassword"
                                                                                          class="passwordinput"
                                                                                          value="请输入您的密码"></div>
            <div class="login-mb"><input type="submit" value="登&nbsp;录"></div>
            <div class="login-btm">
                <div class="leftarea"><input name="rem" type="checkbox" checked="checked" value=""/><a href="#">记住我</a>
                </div>
                <div class="rightarea"><a href="#">忘记密码？</a></div>
            </div>
        </form>
    </div>
</div>

<div class="login" id="regbody">
    <div class="login-head">注&nbsp;册</div>
    <div class="login-body">
        <form action="${z:u('user/register')}" method="post">
            <div class="login-mb"><img src="${__static__}/images/userlogo.gif"><input type="text" name="username"
                                                                                      class="userinput" value="请输入您的账号">
            </div>
            <div class="login-mb"><img src="${__static__}/images/passwordlogo.gif"><input type="text" name="password"
                                                                                          class="passwordinput"
                                                                                          value="请输入您的密码"></div>
            <div class="login-mb"><img src="${__static__}/images/passwordlogo.gif"><input type="text"
                                                                                          name="confirmpassword"
                                                                                          class="passwordinput2"
                                                                                          value="请确认您的密码"></div>
            <div class="login-mb"><input type="submit" value="注&nbsp;册"></div>
        </form>
    </div>
</div>

<%@include file="../include/footer.jsp"%>

</body>
</html>