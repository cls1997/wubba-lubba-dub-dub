<%@ taglib prefix="mvc" uri="http://www.springframework.org/tags/form" %>
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
    <%@include file="../index/resource.jsp"%>
</head>
<body>

<%@include file="../include/header.jsp"%>

<div class="sellbody">
    <form method="post" action="${z:u('good/sellsave')}" enctype="multipart/form-data">
        <div class="found-mb">请输入商品名称：</div>
        <div class="found-mb"><input type="text" name="goodName" id="good_name"></div>
        <div class="found-mb">请输入商品单价 (单位：￥)：</div>
        <div class="found-mb"><input type="text" name="goodPrice" id="good_price"></div>
        <div class="found-mb">请输入商品库存：</div>
        <div class="found-mb"><input type="text" name="goodStock" id="good_stock"></div>
        <div class="found-mb">请输入商品描述：</div>
        <div class="found-mb"><input type="text" name="goodIntro" id="good_intro"></div>
        <div class="found-mb">请输入商品类型：</div>
        <div class="found-mb"><input type="text" name="typeName" id="good_type"></div>
        <div class="found-mb">请上传商品图片：</div>
        <div class="found-mb"><input type="file" name="file_data" id="file_data" /></div>
        <div class="found-mb"><input type="submit" value="上架商品" id=""></div>
    </form>
</div>


<div class="login" id="logbody">
</div>
</body>
</html>