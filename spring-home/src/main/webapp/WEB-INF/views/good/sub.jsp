<%--
  Created by IntelliJ IDEA.
  User: touka
  Date: 2016/12/22
  Time: 20:50
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

<div class="subtitleline">
    <div class="titleleft">当前订单</div>
    <div class="titleright">往期订单</div>
</div>
<div class="subbody">
    <div class="subnow">
        <c:forEach items="${subs}" var="sub">
        <div class="subnowbody">
            <div class="subimg"><img src="${sub.get('goodimage')}"></div>
            <ul>
                <li><div class="subtitle">${sub.get("goodname")}</div></li>
                <li><div class="subnum">订单编号：<span>${sub.get("id")}</span></div></li>
                <li><div class="ordertime">下单时间：<span>${sub.get("orderedtime")}</span></div></li>
                <!-- todo ??? 加个按键-->
                <li><div class="subconfirm" id="confirmsub" onclick="confirm(${sub.get("id")});">确认收货</div></li>
            </ul>
        </div>
        </c:forEach>

        <c:if test="${subs.size()==0}">
            <div class="subnowbody">
                <li><div class="subtitle">没有订单</div></li>
            </div>
        </c:if>


    </div>
    <div class="subhis">
        <c:forEach items="${outdatedSubs}" var="sub">
            <div class="subnowbody">
                <div class="subimg"><img src="${sub.get('goodimage')}"></div>
                <ul>
                    <li><div class="subtitle">${sub.get("goodname")}</div></li>
                    <li><div class="subnum">订单编号：<span>${sub.get("id")}</span></div></li>
                    <li><div class="ordertime">下单时间：<span>${sub.get("orderedtime")}</span></div></li>
                    <!-- todo ??? 加个按键-->
                    <li><div class="subconfirm" id="onemore" onclick="onemore(${sub.get("id")});">再来一单</div></li>
                </ul>
            </div>
        </c:forEach>
        <c:if test="${outdatedSubs.size()==0}">
            <div class="subnowbody">
                <li><div class="subtitle">没有订单</div></li>
            </div>
        </c:if>
    </div>
</div>

<div class="login" id="logbody">
</div>
<div class="commentbody">
    <div class="cm_head">评&nbsp;论</div>
    <div class="cm_body">
        <div class="cm_msg">确认收货成功！写点评论吧</div>
        <form>
            <div class="login-mb"><textarea id="commenttext" wrap="physical" name="content"></textarea>
                <div class="login-mb"><input type="submit" id="commentbtn"></div>

            </div></form>
    </div>
<script>
    function confirm(id) {
        var data ={
            "id" :id,
        };
        $.ajax({
            type: "POST",
            url: urls.confirmGet,
            data: data,
            dataType:"json",
            async:false,
            success: function(r){
                if(r.status==1) {
                    alert("Data Saved: " + id);
                    $(".commentbody").show(600);
                    $("#commentbtn").click(function () {
                        var cdata={
                            "content":$("#commenttext").val(),
                            "subId":id
                        }
                        $.ajax({
                            type:"POST",
                            url:"/comment/do",
                            data:cdata,
                            dataType:"json",
                            async:false,
                            success:function (r) {
                                alert("评价成功"+r.status);
                            },
                            error: function(XMLHttpRequest,textStatus, errorThrown) {
                                alert(XMLHttpRequest.status);
                                alert(XMLHttpRequest.readyState);
                                alert(textStatus);
                            },
                        });
                    });
                }
                else alert("fail"+r.info);
            },
            error: function(r){
                alert( "Error");
            }
        });
        /*
         * TODO info/status 1成功 0失败
         * Time: 16/12/29 7:16
         * Creator: Chenls
         */ 
    }

    function onemore(id) {
        alert(id)
        url.oneMore

    }
</script>
</body>
</html>