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
    <%@include file="../index/resource.jsp"%>
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
    <div id="mysub" onclick="${z:u('sub/list')}">我的订单</div>
    <div id="mycar" onclick="${z:u('cart/list')}">我的购物车</div>
</div>
<div class="usertitle">完善个人资料</div>
<div class="userdetail">
    <div class="leftarea">
        <div class="udform"><span>用户名</span><input id="username" type="text" value="${user.username}"></div>
        <div class="udform"><span>手机号</span><input id="phone" type="text" value="${user.phone}"></div>
        <div class="udform"><span>邮箱</span><input id="email" type="text" value="${user.email}"></div>
    </div>
    <div class="rightarea">
        <div class="udform"><span>安全问题</span><input id="question" type="text" value="${user.question}"></div>
        <div class="udform"><span>问题答案</span><input id="result" type="text" value="${user.result}"></div>
        <div class="udform"><span>地址</span><input id="address" type="text" value="${user.address}"></div>
    </div>
    <div class="userbutton"><input type="button" value="确认" onclick="submit();"> </div>
</div>
<img src="${__static__}/images/userfooter.png">

<%@ include file="../include/footer.jsp"%>

<script>
    function submit() {
        var data = {
            username: $("#username").val(),
            phone: $("#phone").val(),
            email: $("#email").val(),
            question: $("#question").val(),
            result: $("#result").val(),
            address: $("#address").val()
        }
        $.post(urls.usersave,data,function (r) {
            //todo 1成功 0失败。
            alert("修改成功");
        });
    }
</script>
</body>
</html>