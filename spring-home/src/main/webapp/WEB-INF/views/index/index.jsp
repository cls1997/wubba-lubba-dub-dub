<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/11/10
  Time: 2:56
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
    <meta http-equiv="content-Type" content="text/html;charset=UTF-8">
    <title>Delicacy in Leside</title>
    <%@include file="../index/resource.jsp"%>
</head>
<body>

<%@include file="../include/header.jsp"%>

<div class="banner">
    <div class="bntitle" id="bntitle"></div>
    <ul class="slider">
        <li><img src="${__static__}/images/scroll1.png"/></li>
        <li><img src="${__static__}/images/scroll2.png"/></li>
        <li><img src="${__static__}/images/scroll3.png"/></li>
        <li><img src="${__static__}/images/scroll4.png"/></li>
        <li><img src="${__static__}/images/scroll5.png"/></li>
    </ul>
    <ul class="scrollnum" >
        <li class="on"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
<div class="clear"></div>

<div class="showgoods">
    <div class="leftarea">
        <img src="${__static__}/images/show1.png" title="点击查看商品详情" />
        <div class="showincar">加入购物车</div>
    </div>
    <div class="rightarea">
        <img src="${__static__}/images/show2.png" class="leftarea"/>
        <img src="${__static__}/images/show3.png"class="leftarea"/>
    </div>
</div>
<div class="tab">
    <img src="${__static__}/images/goodsh1.png">
    <div class="tab_menu">
        <ul>
            <li class="on">茶饮</li>
            <li >水果</li>
            <li>进口食品</li>
            <li>坚果</li>
            <li>肉食</li>
        </ul>
    </div >
    <div class="tab_box">
        <div>
            <div class="goodstab">
                <a href="detail.html" target="_blank">
                    <img src="${__static__}/images/goodhover.png" class="goodhov" title="去看详情">
                    <div class="imgctn"><img src="${__static__}/images/goodtest.png"></div>
                </a>
                <div class="price">$120.00</div>
                <h3>大吉岭红茶</h3>
                <div class="star">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div class="bigcar"><a href=""><img src="${__static__}/images/carlg2.png" title="放入购物车"></a></div>
                </div>
            </div>
            <div class="goodstab">
                <a href="detail.html" target="_blank">
                    <img src="${__static__}/images/goodhover.png" class="goodhov" title="去看详情">
                    <img src="${__static__}/images/goodtest.png">
                </a>
                <div class="price">$120.00</div>
                <h3>大吉岭红茶</h3>
                <div class="star">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="off"></li>
                    </ul>
                    <div class="bigcar"><a href=""><img src="${__static__}/images/carlg2.png" title="放入购物车"></a></div>
                </div>
            </div>
            <div class="goodstab">
                <a href="detail.html" target="_blank">
                    <img src="${__static__}/images/goodhover.png" class="goodhov" title="去看详情">
                    <img src="${__static__}/images/goodtest.png">
                </a>
                <div class="price">$120.00</div>
                <h3>大吉岭红茶</h3>
                <div class="star">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="off"></li>
                    </ul>
                    <div class="bigcar"><a href=""><img src="${__static__}/images/carlg2.png" title="放入购物车"></a></div>
                </div>
            </div>
            <div class="goodstab">
                <a href="detail.html" target="_blank">
                    <img src="${__static__}/images/goodhover.png" class="goodhov" title="去看详情">
                    <img src="${__static__}/images/goodtest.png">
                </a>
                <div class="price">$120.00</div>
                <h3>大吉岭红茶</h3>
                <div class="star">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="off"></li>
                    </ul>
                    <div class="bigcar"><a href=""><img src="${__static__}/images/carlg2.png" title="放入购物车"></a></div>
                </div>
            </div>
            <div class="goodstab">
                <a href="detail.html" target="_blank">
                    <img src="${__static__}/images/goodhover.png" class="goodhov" title="去看详情">
                    <img src="${__static__}/images/goodtest.png">
                </a>
                <div class="price">$120.00</div>
                <h3>大吉岭红茶</h3>
                <div class="star">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="off"></li>
                    </ul>
                    <div class="bigcar"><a href=""><img src="${__static__}/images/carlg2.png" title="放入购物车"></a></div>
                </div>
            </div>
            <div class="goodstab">
                <a href="detail.html" target="_blank">
                    <img src="${__static__}/images/goodhover.png" class="goodhov" title="去看详情">
                    <img src="${__static__}/images/goodtest.png">
                </a>
                <div class="price">$120.00</div>
                <h3>大吉岭红茶</h3>
                <div class="star">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="off"></li>
                    </ul>
                    <div class="bigcar"><a href=""><img src="${__static__}/images/carlg2.png" title="放入购物车"></a></div>
                </div>
            </div>
            <div class="goodstab">
                <a href="detail.html" target="_blank">
                    <img src="${__static__}/images/goodhover.png" class="goodhov" title="去看详情">
                    <img src="${__static__}/images/goodtest.png">
                </a>
                <div class="price">$120.00</div>
                <h3>大吉岭红茶</h3>
                <div class="star">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="off"></li>
                    </ul>
                    <div class="bigcar"><a href=""><img src="${__static__}/images/carlg2.png" title="放入购物车"></a></div>
                </div>
            </div>
            <div class="goodstab">
                <a href="detail.html" target="_blank">
                    <img src="${__static__}/images/goodhover.png" class="goodhov" title="去看详情">
                    <img src="${__static__}/images/goodtest.png">
                </a>
                <div class="price">$120.00</div>
                <h3>大吉岭红茶</h3>
                <div class="star">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="off"></li>
                    </ul>
                    <div class="bigcar"><a href=""><img src="${__static__}/images/carlg2.png" title="放入购物车"></a></div>
                </div>
            </div>
            <a href="#"><img src="${__static__}/images/loadmore.png" title="点击加载更多"></a>
        </div>
        <div>
            <div><h1>水果</h1></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div><h1>进口食品</h1></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div><h1>坚果</h1></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div><h1>肉食</h1></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
<div class="smid">
    <img src="${__static__}/images/footer1.png">
    <img src="${__static__}/images/footer2.png">
</div>
<div class="footbanner"><img src="${__static__}/images/footer3.png"></div>
<div class="seller">
    <img src="${__static__}/images/seller.png">
    <div>
        <ul>
            <a href="#"><li><img src="${__static__}/images/sell1.png"><br/>三只松鼠</li></a>
            <a href="#"><li><img src="${__static__}/images/seller2.png"><br/>萨拉咪</li></a>
            <a href="#"><li><img src="${__static__}/images/seller3.png"><br/>中闽飘香</li></a>
            <a href="#"><li><img src="${__static__}/images/seller4.png"><br/>巴拿米</li></a>
            <a href="#"><li><img src="${__static__}/images/seller5.png"><br/>熙果</li></a>
        </ul>
    </div>
</div>

<div class="login" id="logbody">
</div>

<%@include file="../include/footer.jsp"%>

</body>
</html>