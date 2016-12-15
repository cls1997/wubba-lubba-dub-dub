<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/11/21
  Time: 18:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
    <title>reg</title>
    <script>
    </script>
</head>
<body>
<form action="/user/register" method="post" id="regform" >
    <table>
        <tr>
            <td>用户名：</td>
            <td><input type="text" name="username"></td>
        </tr>
        <tr>
            <td>密码：</td>
            <td><input type="password" name="password"></td>
        </tr>
        <tr>
            <td>确认密码：</td>
            <td><input type="password" name="passwordConfirm"></td>
        </tr>
        <tr>
            <td>邮箱：</td>
            <td><input type="text" name="email"></td>
        </tr>
        <tr>
            <td>联系电话：</td>
            <td><input type="text" name="phone"></td>
        </tr>
        <tr>
            <td>安全问题：</td>
            <td><input type="text" name="question"></td>
        </tr>
        <tr>
            <td>安全问题答案：</td>
            <td><input type="text" name="result"></td>
        </tr>
        <tr>
            <td>地址：</td>
            <td><input type="text" name="address"></td>
        </tr>
        <tr>
            <td colspan="2"><input type="submit" value="注册" onclick="toJson()"></td>
        </tr>
    </table>
</form>
</body>
</html>
