<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/11/10
  Time: 2:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
    <title>wubaa-lubba-dub-dub</title>
</head>
<body>
<div id="login-section">
    <a href="login.jsp" >登录</a>|<a href="register.jsp" >注册</a>
</div><br>
<form action="" method="get">
    <input type="text" name="scText">
    <input type="submit" value="搜索">
</form>
<a href="sell.jsp">我要卖!</a>
<a href="car.jsp">查看购物车</a>
<%
    // session.setAttribute("username","ha");
    String username=(String)session.getAttribute("username");
    if(username!=null&&username!=""){
%>
<script type="text/javascript">
    document.getElementById("login-section").innerHTML="<a href='users.jsp'><%=username%></a>|<a href='information.jsp'>消息</a>|<a href='#'>退出</a>";
</script>
<%
    }
%>
</body>
<html>