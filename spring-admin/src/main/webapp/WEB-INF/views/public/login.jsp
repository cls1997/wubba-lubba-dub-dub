<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://zlzkj.com/tags" prefix="z"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" >
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>用户登录</title>
		<%@include file="resource.jsp" %>
    	<link rel="stylesheet" type="text/css" href="${__static__}/css/main.css">
    	<link rel="stylesheet" type="text/css" href="${__static__}/css/user_login.css">
	</head>
	<form id="loginForm" action="${z:u('main/main')}" method="post">
	<body id=userlogin_body>
		<div></div>
		<div id=user_login>
			<dl>
				<dd id=user_top>
					<ul>
						<li class=user_top_l></li>
						<li class=user_top_c></li>
						<li class=user_top_r></li>
					</ul>
				<dd id=user_main>
					<ul>
						<li class=user_main_l></li>
						<li class=user_main_c>
							<div class=user_main_box>
								<ul>
									<li class=user_main_text>
										用户名：
									</li>
									<li class=user_main_input>
										<input class="txtusernamecssclass easyui-validatebox"  data-options="required:true,missingMessage:'用户名不能为空.',"  value="admin" maxlength="20">
									</li>
								</ul>
								<ul>
									<li class=user_main_text>
										密 码：
									</li>
									<li class=user_main_input>
										<input class="txtpasswordcssclass easyui-validatebox"   data-options="required:true,missingMessage:'密码不能为空.'" type="password" name="pwd" value="123456">
									</li>
								</ul>
<!-- 								<ul>
									<li class=user_main_input>
										<input class="user_bottom " type="submit">
									</li>
								</ul> -->
<!-- 								<ul>
									<li class=user_main_text>
										验证码：
									</li>
									<li class=user_main_input>
										<img class="vc-pic" width="65" height="23" title="点击刷新验证码" src="ImageServlet?time=new Date().getTime()">
										<input class="vc-text easyui-validatebox" data-options="required:true,missingMessage:'验证码不能为空.'" maxlength="4" type="text" name="verifyCode">
									</li>
								</ul> -->
							</div>
						</li>
						<li class=user_main_r>
							<input type="image"
								style="border-top-width: 0px; border-left-width: 0px; border-bottom-width: 0px; border-right-width: 0px"
								 src="${__static__}/images/login/user_botton.gif">
						</li>
					</ul>
				<dd id=user_bottom>
					<ul>
						<li class=user_bottom_l></li>
						<li class=user_bottom_c>
						<li class=user_bottom_r></li>
					</ul>
				</dd>
			</dl>
		</div></body>
		</form>
		<script type="text/javascript" src="${__static__}/js/ux/login.js"></script>
	</body>
</html>
