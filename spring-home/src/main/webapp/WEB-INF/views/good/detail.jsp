<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/12/16
  Time: 3:
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
<div class="center"><img src="images/hr1.png"></div>
<div class="details">
    <div class="gsell">
        <div class="dgimg"><img src="${pic_url}"></div>
        <div class="detitle">${good.goodName}</div>
        <div class="goodspan">
            <div class="goodtype">标签：<div >${goodTypeName}</div></div>
            <div class="deprice">价格：<span class="pricenum">${good.goodPrice}</span></div>
            <div class="city">物流：<span>上海市</span> 运至 <span>浙江 杭州</span></div>
            <div class="commennum">
                <ul>
                    <li>月销量：<span>${good.goodSold}</span>件 </li>
                    <li>累计评论：<span>${commentCount}</span></li>
                </ul>
            </div>
            <div class="deform">
                购买数量：<input type="button" id="jian" value="-">
                <input type="text" id="he" value="1">
                <input type="button" id="jia" value="+">
                件
            </div>
            <div class="destork">库存：${good.goodStock} &nbsp;件</div>
        </div>
        <div class="deshop">
            <div class="toshopbtn" id="tobuy">立即购买</div>
            <div class="toshopbtn" id="tocar">加入购物车</div>
        </div>
    </div>
    <div class="deseller">
        <div>本店商品</div>
        <ul>
            <li>
                <img src="images/goodtest.png">
            </li>
            <li>
                <img src="images/goodtest.png">
            </li>
            <li>
                <img src="images/goodtest.png">
            </li>
            <li>
                <img src="images/goodtest.png">
            </li>
            <li>
                <img src="images/goodtest.png">
            </li>
        </ul>
        <span>更多>>></span>
    </div>
    <div class="comment">
        <h1>商品评价</h1>
        <ul>
            <script type="text/javascript">
                var commentList = $.post("${z:u('comment/list')}"+${good.id});
            </script>
            <c:forEach items="commentList" var="comment">
                <li>
                    <div>
                        <div class="comtext">${comment.get("content")}</div>
                        <div class="author">
                            <div class="leftarea"><span>作者：</span>${comment.get("author")}</div>
                            <div class="rightarea">${comment.get("date")}</div>
                        </div>
                    </div>
                </li>
            </c:forEach>
        </ul>
    </div>
</div>
<div class="center"><img src="images/hr2.png"></div>
<div class="dcookie">
    <ul>
        <li>
            <div class="cookiectn">
                <div class="cookieimg"><img src="images/goodtest.png"></div>
                <div class="cookietext">夏威夷果200g</div>
            </div>
        </li>
        <li>
            <div class="cookiectn">
                <div class="cookieimg"><img src="images/goodtest.png"></div>
                <div class="cookietext">夏威夷果200g</div>
            </div>
        </li>
        <li>
            <div class="cookiectn">
                <div class="cookieimg"><img src="images/goodtest.png"></div>
                <div class="cookietext">夏威夷果200g</div>
            </div>
        </li>
        <li>
            <div class="cookiectn">
                <div class="cookieimg"><img src="images/goodtest.png"></div>
                <div class="cookietext">夏威夷果200g</div>
            </div>
        </li>
    </ul>
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