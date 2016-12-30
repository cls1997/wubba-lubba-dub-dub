<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.chenls1997.spring.Constants" %>
<%@ taglib prefix="z" uri="http://zlzkj.com/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="header">
    <div class="top">
        <ul>
            <li>
                <a href="${z:u('good/sell')}" target="_blank">
                    我要卖
                </a>
            </li>
            <% if (!request.getAttribute("username").equals(Constants.nullUsername)) {%>
                    <div class="toplog">
                        <li>欢迎你！${requestScope.get("username")}</li>
                        <a id="logoutbtn">
                            <li>退出</li>
                        </a>
                    </div>
            <% } else { %>
                    <div id="section-login" class="toplog">
                        <a id="loginbtn">
                            <li>登录</li>
                        </a>
                        <a id="registerbtn">
                            <li>注册</li>
                        </a>
                    </div>
            <% } %>
        </ul>

        <div class="topsvc">
            <ul>
                <a href="${z:u('user/user')}" target="_blank">
                    <li>个人中心</li>
                </a>
                <!--	sha bi cls <a href="#"><li>消息</li></a></a> -->
                <a href="${z:u('sub/list')}" target="_blank">
                    <li>我的订单</li>
                </a>
                <li>
                    <a href="${z:u('cart/list')}" target="_blank">
                        <div class="topcar">我的购物车</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="search">
    <div class="logo"><img src="${__static__}/images/logo.gif"/></div>

        <div class="searchtext">
            <span>搜本店</span>
            <form method="get" action="${z:u('good/search')}">
                <input type="text" id="scname" name="name">
                <input type="submit" value="" id="scsubmit">
            </form>
        </div>


</div>
