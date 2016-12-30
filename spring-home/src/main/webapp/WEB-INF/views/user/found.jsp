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
    <%@include file="../index/resource.jsp"%>
</head>
<body>

<%@include file="../include/header.jsp"%>

<div class="center"><img src="${__static__}/images/found.png"></div>
<div class="foundform">

        <div class="found-mb">请输入您的用户名：</div>
        <div class="found-mb"><input type="text" id="username"></div>
        <div class="found-mb">请输入您的安全问题：</div>
        <div class="found-mb"><input type="text" id="question"></div>
        <div class="found-mb">请输入您的安全问题答案：</div>
        <div class="found-mb"><input type="text" id="result"></div>
        <div class="found-mb">请输入您的新密码：</div>
        <div class="found-mb"><input type="password" id="pwd"></div>
        <div class="found-mb">请确认您的新密码：</div>
        <div class="found-mb"><input type="password" id="cfmpwd"></div>
        <div class="found-mb"><input type="submit" value="找回密码" id="foundbtn" onclick="submit();"></div>

</div>

<div class="login" id="logbody">
</div>

<%@include file="../include/footer.jsp"%>
<script>
    function submit() {
        alert("a");
        var pwd = $("#pwd").val();
        var cfmpwd = $("#cfmpwd").val();
        //todo 检验
        var data = {
            username: $("#username").val(),
            question: $("#question").val(),
            result: $("#result").val(),
            newpass: pwd,
        }
        $.post(urls.forgot,data,
            function (r) {
                alert("找回成功");

            }
        );
    }
</script>
</body>
</html>