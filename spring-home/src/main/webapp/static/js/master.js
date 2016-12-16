// 控制登录注册框value值
$(function(){ 
    var text;
    $(".userinput").focus(function() {
        text = $(this).val();
        $(this).val("");
    });
    $(".userinput").blur(function() {
        $(this).val()!="" || $(this).val(text);
    });
})

   $(function(){  
    var text="请输入您的密码";
    $(".passwordinput").focus(function() {
        $(this).val("");
        $(this).attr('type','password');
    });
    $(".passwordinput").blur(function() {
        $(this).val()!="" || $(this).val(text);
        $(this).val()!=text || $(this).attr('type','text');
    });
})

 $(function(){  
    var text="请确认您的密码";
    $(".passwordinput2").focus(function() {
        $(this).val("");
        $(this).attr('type','password');
    });
    $(".passwordinput2").blur(function() {
        $(this).val()!="" || $(this).val(text);
        $(this).val()!=text || $(this).attr('type','text');
    });
})
 
 //点击登录弹窗
$(function(){
    $("#loginbtn").click(function(){$("#logbody").toggle(600);});
})
//注册弹窗
$(function(){
    $("#registerbtn").click(function(){$("#regbody").toggle(600);});
})

//banner标题效果
$(function(){
    $("#bntitle").mouseover(function(){
        $(this).css("opacity","0.8");
    });
    $("#bntitle").mouseout(function(){
        $(this).css("opacity","0.5");
    });
})
//主页广告加购物车效果
$(function(){
    $(".showincar").mouseover(function(){
        $(this).css("background-color","#DCDCDC");
        $(this).css("cursor","pointer");
    });
    $(".showincar").mouseout(function(){
        $(this).css("background-color","#FFF");
        $(this).css("cursor","default");
    });
})
//banner图片轮播
$(function(){
    var len = $(".scrollnum > li").length;
    var index = 0;  
    var adTimer;
    $(".scrollnum li").mouseover(function() {
        index = $(".scrollnum li").index(this); 
        showImg(index);
    }).eq(0).mouseover();
    $('.banner').hover(function() {
        clearInterval(adTimer);
    }, function() {
        adTimer = setInterval(function() {
            showImg(index)
            index++;
            if (index == len) {      
                index = 0;
            }
        }, 3000);
    }).trigger("mouseleave");
    function showImg(index) {
        var adHeight = $(".banner>ul>li:first").height();
        $(".slider").stop(true, false).animate({
            "marginTop": -adHeight * index + "px"  
        }, 300);
        $(".scrollnum li").removeClass("on")
            .eq(index).addClass("on");
    }
})

//首页商品展示切换选项卡
$(function(){
 $(".tab_menu ul li").click(function(){$(this).addClass("on").siblings().removeClass("on"); 
 var index=$(this).index(); 
 $(".tab_box > div").eq(index).show().siblings().hide();});
})

//选项卡按钮字体，指针
$(function(){
    $(".tab_menu ul li").mouseover(function(){
        $(this).css("font-weight","bold");
        $(this).css("cursor","pointer");
    });
    $(".tab_menu ul li").mouseout(function(){
        $(this).css("font-weight","normal");
        $(this).css("cursor","default");
    });
})

//首页商品展示鼠标滑过显示眼睛
$(function(){
    $(".goodhov").mouseover(function(){
        $(this).css("opacity","0.4");
    });
    $(".goodhov").mouseout(function(){
        $(this).css("opacity","0");
    });
})

//购买商品点击按钮改变数量
$(function(){
    $("#jian").click(function(){
    $("#he").val()==1||$("#he").val($("#he").val()-1);
    });
})
$(function(){
    $("#jia").click(function(){
        $("#he").val($("#he").val()-(-1));
    });
})
//找回密码按钮
$(function(){
    $("#foundbtn").mouseover(function(){
        $(this).css("background-color","#6699CC");
        $(this).css("color","#FFF");
    });
    $("#foundbtn").mouseout(function(){
        $(this).css("background-color","#FFF");
        $(this).css("color","#6699CC");
    });
})
//user页面按钮
$(function(){
    $("#mysub").mouseover(function(){
        $(this).css("background-color","#FFF");
        $(this).css("color","#5c6575");
    });
    $("#mysub").mouseout(function(){
        $(this).css("background-color","#5c6575");
        $(this).css("color","#FFF");
    });
})
$(function(){
    $("#mycar").mouseover(function(){
        $(this).css("background-color","#FFF");
        $(this).css("color","#5c6575");
    });
    $("#mycar").mouseout(function(){
        $(this).css("background-color","#5c6575");
        $(this).css("color","#FFF");
    });
})
//商品页面购买&加购物车按钮特效
$(function(){
    $("#tobuy").mouseover(function(){
        $(this).css("background-color","#FF3300");
        $(this).css("color","#FFF");
    });
    $("#tobuy").mouseout(function(){
        $(this).css("background-color","#FFF");
        $(this).css("color","#FF3300");
    });
})
$(function(){
    $("#tocar").mouseover(function(){
        $(this).css("background-color","#FF3300");
        $(this).css("color","#FFF");
    });
    $("#tocar").mouseout(function(){
        $(this).css("background-color","#FFF");
        $(this).css("color","#FF3300");
    });
})
//?????