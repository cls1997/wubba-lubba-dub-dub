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
</div>

<%@include file="../include/footer.jsp"%>

</body>
</html>