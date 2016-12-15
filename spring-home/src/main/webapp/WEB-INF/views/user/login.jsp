<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/11/26
  Time: 1:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="z" uri="http://zlzkj.com/tags" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
    <title>login</title>
</head>
<body>
<form action="${z:u("user/login")}" method="post">
    <table>
        <tr>
            <td>用户名：</td>
            <td><input type="text" name="username"></td>
        </tr>
        <tr>
            <td> 密码：</td>
            <td><input type="password" name="userpassword"></td>
        </tr>
        <tr>
            <td>
                <input type="submit" value="登录">
            </td>
            <td>
                <a href="#">忘记密码？</a>
            </td>
        </tr>
    </table>
</form>
</body>
</html>
