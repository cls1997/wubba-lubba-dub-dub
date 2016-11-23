
//showSWF(id,dataXmlName); id:外边层ID,dataXmlName:dataXML名
function showSWF(id,dataXmlName){
    var so = new SWFObject("/dataxml/ampie.swf", "ampie", "488", "230", "8", "#FFFFFF");
	so.addVariable("path", "js/");
	so.addVariable("settings_file", escape("/dataxml/ampie_settings.xml"));
	so.addVariable("data_file", escape(""+ dataXmlName));
	so.addVariable("preloader_color", "#999999");
	so.write(id);
}

//客户展示
function show(cur){
	timer = setTimeout(function(){
		if(cur == 2) {
			cur = 0;
		}else {
			++cur;
		}
		$(".toShowTab span").eq(cur).addClass("on").siblings().removeClass("on");
		var innerwidth = $(".toShowInner ul").width();
		$(".toShowInner").animate({
			"left" : -innerwidth
		},800,function(){
			$(".toShowInner ul").eq(0).appendTo($(".toShowInner"));
			$(".toShowInner").css("left",0);
		});
		show(cur);	
	},3500);
}

//初始化关键词搜索次数框的设置
function initManage(){
	$(".keywordItem .theNum").each(function(){
		var k = $(this).closest(".keywordItem");
		var pwidth = k.outerWidth();
		var pheight = k.outerHeight();
		var height = $(this).height();
		$(this).css({"left":pwidth,"top":(pheight - height)/2});	
	});
}
//关键词分类层的显示和隐藏
function showkeyword(obj,type){
	if(type== 1){
		var id = $(obj).attr("id");
		var popularid = $(".popular .on").attr("id");
	}
	if(type == 2){
		var id = $(".sortNav .on").attr("id");
		var popularid = $(obj).attr("id");
	}
	$(obj).addClass("on").siblings().removeClass("on");
	$("."+id).show().siblings(".sortDiv").hide();
	$("."+id+" ."+popularid).show().siblings().hide();	
}

function showBlock(o) {
	var idx = $(o).index();
	$(o).parent().find("li").attr("class", "");
	$(o).attr("class", "now");
	$(o).parents(".members").find(".m-list").hide();
	$($(o).parents(".members").find(".m-list")[idx]).show();
}

//百度分享异步加载
var bds_config = { "snsKey": { 'tsina': '3385074302', 'tqq': '801517773', 't163': '', 'tsohu': '' } }
function loadBaiduShare() {
    var baiduShareHtml = "<div class=\"bdshare_t bds_tools_32 get-codes-bdshare\" id=\"bdshare\">";
    baiduShareHtml += "<a class=\"bds_tsina\" title=\"分享到新浪微博\"></a><a class=\"bds_tqq\" title=\"分享到腾讯微博\"></a><a class=\"bds_qzone\" title=\"分享到QQ空间\"></a>";
    baiduShareHtml += "<a class=\"bds_huaban\" title=\"分享到花瓣\"></a><a class=\"bds_douban\" title=\"分享到豆瓣网\"></a><a class=\"bds_renren\" title=\"分享到人人网\"></a>";
    baiduShareHtml += "<span class=\"bds_more\"></span><a class=\"shareCount\"title=\"累计分享0次\">0</a>";
	$(baiduShareHtml).appendTo($(".bdShareBox"));
	var bdshare_js = document.createElement("script");
	bdshare_js.id = "bdshare_js";
	bdshare_js.type = "text/javascript";
	bdshare_js.setAttribute("data", "type=tools&amp;uid=14122");
	document.getElementById("bdshare").appendChild(bdshare_js);
	var bdshell_js = document.createElement("script");
	bdshell_js.id = "bdshell_js";
	bdshell_js.type = "text/javascript";
	bdshell_js.src = "http://share.baidu.com/static/js/shell_v2.js?t=" + new Date().getHours();
	document.getElementById("bdshare").appendChild(bdshell_js);
	$("#bdshare").css("width","210px")
}

var t;
function tabView(i){
	t = setTimeout(function(){
		if(i==2){i = 0;}else {++i;}
		$(".tabImg a").eq(i).fadeIn().siblings().fadeOut();
		$(".tabNav span").eq(i).addClass("on").siblings().removeClass("on");
		tabView(i);
	},3000);	
}
function showTab(i,obj,type){
	$(obj).hover(function(){
		if(type == 1){
			$(obj).fadeIn().siblings().fadeOut();
			$(".tabNav span").eq(i).addClass("on").siblings().removeClass("on");
		}
		if(type == 2){
			$(obj).addClass("on").siblings().removeClass("on");
			$(".tabImg a").eq(i).fadeIn().siblings().fadeOut();
		}
		clearTimeout(t);
	},function(){
		tabView(i);
	});
}
var timers;
function makeTabViews(i,o1,o2,t){
	i++;
	timers = setTimeout(function(){tabViewsChange(i,o1,o2,t);},5000);
}
function tabViewsChange(i,o1,o2,t){
	var a = o1,
		len = a.size(),
		img = o2,
		desc = $(".tab-views-shortdesc-list"),
		name = $(".tab-views-each-name");
	if(i >= len){i = 0;}	
	a.eq(i).addClass("on").siblings().removeClass("on");
	img.eq(i).show().siblings("img").hide();
	var width = name.eq(i).css("width","auto").width();
	name.eq(i).siblings().removeClass("on").end().css("width","0px").addClass("on").animate({"width":width+"px"},800);
	desc.stop(true).animate({top: -i * 156},500);
	if(t){makeTabViews(i,o1,o2,true);}
}
function goSlide(n, o) {
	var box = $(".info-slide-box"),
		wrapWidth = box.outerWidth(),
		list = 	$(".info-slide-list"),
		li = list.find("li"),
		len = li.size(),
		liwidth = li.eq(0).outerWidth(),
		triggerLeft = $(".info-trigger-left"),
		triggerRight = $(".info-trigger-right");
	if (n == 0) { list.css("width", len * liwidth); return; }
	o.unbind("click");
	if(triggerLeft.hasClass("info-trigger-left-disabled") && n == -1 || triggerRight.hasClass("info-trigger-right-disabled") && n == 1) return;
	var index = n,
		left = parseInt(list.css("left")),
		left = left + (-index * wrapWidth),
		step = Math.abs(left)/ wrapWidth;
	if(step >= len - 1){
	    triggerRight.addClass("info-trigger-right-disabled");
	    triggerLeft.bind("click", function () { goSlide(-1, triggerLeft); });
	}else {
        triggerRight.removeClass("info-trigger-right-disabled");    
	}
	if(step <= 0){
	    triggerLeft.addClass("info-trigger-left-disabled");
	    triggerRight.bind("click", function () { goSlide(1, triggerRight); });
	}else {
        triggerLeft.removeClass("info-trigger-left-disabled");       
    }
    list.stop(true).animate({ "left": left }, 500, function () {
        if (n == -1) {
            triggerRight.bind("click", function () { goSlide(1, triggerRight); });
        } else {
            triggerLeft.bind("click", function () { goSlide(-1, triggerLeft); });
        }
        o.bind("click", function () { goSlide(n, o); });
    });
}
var tim;
function scrollShow(i){
	var len = $(".info-show-tab a").size();
	tim = setTimeout(function(){
		var cur = (++i)%len;
		makeScroll(cur);	
		scrollShow(cur);
	},3500);	
}
function makeScroll(i){
	$(".info-show-tab a").eq(i).addClass("on").siblings().removeClass("on");
	$(".info-user-show-list").data("index",i).stop(true).animate({"top":-i * 228},800);
}
function showRank(){
	var self = $(this),
		tab = self.attr("tab-sort");
	self.addClass("on").siblings().removeClass("on");	
	$("#" + tab).show().siblings(".m-list").hide();
}
function showBlock(o) {
	var idx = $(o).index();
	$(o).parent().find("li").attr("class", "");
	$(o).attr("class", "now");
	$(o).parents(".members").find(".m-list").hide();
	$($(o).parents(".members").find(".m-list")[idx]).show();
}
function setClassifyOn(){
	var classify =  QueryString("classify");	
	if(classify == null && $("#classify" + classify).length == 0){classify = 0;}
	$("#classify" + classify).addClass("on").siblings().removeClass("on");
}
function loadCommentBox(){
	var nickname = GetCookie("NickName"),str;
	if(nickname == null){
		str = "<div class=\"law-consult-textarea disabled-textarea\"><div class=\"law-login-tip\">您需要[<a href=\"http://user.huitu.com/op/login.aspx?backurl="+ window.location +"\" class=\"color_red\" title=\"登录\">登录</a>]后才能发表评论！</div></div>";
	}else {
		var time = new Date(),
			year = time.getFullYear(),
			month = time.getMonth() + 1,
			day = time.getDate();
		if(month < 10) {month = "0" + month;}
		if(day < 10) {day = "0" + day;}
		var date = year+"-"+month+"-"+day;
		str = "<div class=\"info-commentBox\">";
		str +="<div><b>"+ nickname +"</b>&nbsp;&nbsp;"+ date +"</div>";
		str += "<textarea class=\"comment-textarea\" id=\"info-consult-textarea\"></textarea>";
		str += "<input type=\"button\" value=\"提交评论\" id=\"infoCommentSubmit\" onclick=\"checkcomment()\" />";
		str += "<div class=\"clear\"></div><div id='comment'><div class='f'></div><div class='opt'><i class=\"sf on\">小</i><i class=\"mf\">中</i><i class=\"lf\">大</i></div></div></div>";
	}
	document.write(str);
}
function loadTheFace() {
    var f = $("#comment .f");
    if (f.length > 0) { LoadFace(f, 0); $("#comment .opt i").click(function () { if (!$(this).hasClass("on")) { $("#comment .opt i").removeClass("on"); $(this).addClass("on"); LoadFace(f, $("#comment .opt i").index(this)) } }); }
}
function LoadFace(f, idx) {
    var size, prefix;
    if (f.length > 0) {
        var faces = ['aoman.gif', 'baifo.gif', 'da1.gif', 'da2.gif', 'daku.gif', 'deyi.gif', 'ding.gif', 'guzhang.gif', 'haha.gif', 'haixiu.gif', 'han.gif', 'hao.gif', 'huaixiao.gif', 'jingya.gif', 'kelian.gif', 'leiji.gif', 'ma.gif', 'manyi.gif', 'meiguikai.gif', 'meiguixie.gif', 'miaoshi.gif', 'nanguo.gif', 'ok.gif', 'qiang.gif', 'shangxin.gif', 'shengqi.gif', 'shiai.gif', 'shui.gif', 'tiaopi.gif', 'tu.gif', 'weiqu.gif', 'weixiao.gif', 'wenhao.gif', 'wuyu.gif', 'xia.gif', 'yanchan.gif', 'ye.gif', 'yun.gif', 'zhichi.gif', 'zhuakuang.gif'];

        switch (idx) {
            case 0:
                prefix = "SF";
                size = "20";
                break;
            case 1:
                prefix = "MF";
                size = "32";
                break;
            case 2:
                prefix = "LF";
                size = "42";
                break;
        }

        f.html("");

        for (var i = 0; i < faces.length; i++) {
            var face = faces[i];
            f.append("<img onclick=\"inface('[" + prefix + (i + 1) + "]')\" src=\"http://skin.huitu.com/images/smiley/" + size + "/" + face + "\" />");
        }
    }
}
function inface(face) {
    $("#info-consult-textarea").get(0).value += face;
}
function getInfoNews(index) {
    var classify = QueryString("classify");
    if (classify == null) classify = 0;
    $(".info-news-list").html("<div style='text-align:center;padding:30px 0px;'>正在加载资讯，请稍候...</div>");
    $(".pageNumWrap").html("");
    $.getJSON("http://info.huitu.com/do/informationpage.ashx?classify=" + classify +"&pageidx=" + index + "&r=" + Math.random(), function (r) {
        setNewsList(r.info);
        setPage(r);
    });
}

//page:当前页码;totalPage:总页码;siblingsNum:左右2侧各显示几个
function setFrontBackPageNum(page, totalPage, siblingsNum) {
    if (totalPage - page < siblingsNum) {
        var minus = page - siblingsNum - (siblingsNum - (totalPage - page));
    } else {
        var minus = page - siblingsNum;
    }
    if (page - siblingsNum < 1) {
        var plus = page + siblingsNum + (siblingsNum - (page - 1));
    } else {
        var plus = page + siblingsNum;
    }
    var beginPos = minus >= 1 ? minus : 1,
	    endPos = plus <= totalPage ? plus : totalPage,
		frontList = [],
		backList = [];
    for (var i = beginPos; i < page; i++) {
        frontList.push(i);
    }
    for (var i = page + 1; i <= endPos; i++) {
        backList.push(i);
    }
    return {
        frontList: frontList,
        backList: backList
    }
}

function setPage(r) {
    var pageSize = r.pageSize,
        totalCount = r.totalCount,
        totalPage = Math.ceil(parseInt(totalCount) / parseInt(pageSize)),
        pageIdx = r.pageIdx,
        totalHtml = "<span class=\"totalNum\">共" + totalPage + "页</span>",
        pager = "<span class=\"currentNum\">" + pageIdx + "&nbsp;&nbsp;/&nbsp;&nbsp;" + totalPage + "页</span>",
        pageList = setFrontBackPageNum(pageIdx, totalPage, 2),
        frontList = pageList.frontList,
        backList = pageList.backList,
        firstStr = "",
        lastStr = "",
        prevStr = "",
        nextStr = "",
        prevSiblings = "",
        nextSiblings = "",
        currentStr = "<a href=\"javascript:void(0)\" class=\"on\">" + pageIdx + "</a>",
        switchStr = "<div id=\"switchWrap\">共<span id=\"J_total\" data-total=\"" + totalPage + "\">" + totalPage + "</span>页&nbsp;&nbsp;到第<span class=\"switch-box\"><input type=\"text\" id=\"switchInput\" onkeyup=\"limitSwitchInput();\" onkeydown=\"doSwitch(event);\" value=\"" + pageIdx + "\"><input type=\"button\" id=\"switchBtn\" onclick=\"doSwitchSearch();\" value=\"GO\" /></span>页</div>";
    if (frontList.length != 0) {
        firstStr = "<a class=\"prev\" title=\"首页\" href=\"javascript:getInfoNews('1');\">|&lt;</a>";
        prevStr = "<a class=\"prev\" title=\"上一页\" href=\"javascript:getInfoNews('" + (parseInt(pageIdx) - 1) + "');\">&lt;</a>";
        $.each(frontList, function (i, n) {
            prevSiblings += "<a class=\"law-pageNum\" href=\"javascript:getInfoNews('" + n + "')\">" + n + "</a>";
        });
    }
    if (backList.length != 0) {
        lastStr = "<a class=\"next\" title=\"末页\" href=\"javascript:getInfoNews('"+ totalPage +"');\">&gt;|</a>";
        nextStr = "<a class=\"next\" title=\"下一页\" href=\"javascript:getInfoNews('" + (parseInt(pageIdx) + 1) + "');\">&gt;</a>";
        $.each(backList, function (i, n) {
            nextSiblings += "<a class=\"law-pageNum\" href=\"javascript:getInfoNews('" + n + "')\">" + n + "</a>";
        });
    }
    var pageHtml = switchStr + "<div class=\"pageNum\">" + firstStr + prevStr + prevSiblings + currentStr + nextSiblings + nextStr + lastStr + "</div>";
    $(".pageNumWrap").html(pageHtml);
    $(window).scrollTop(0);
    if($.browser.msie && $.browser.version == "6.0"){
        doFixPageWidth();
    }
}

/*限制跳页输入框输入*/
function limitSwitchInput() {
    var switchInput = $("#switchInput"),
        val = switchInput.val(),
        expr = /\D+/g;
    if(expr.test(val)){
        switchInput.val(val.replace(expr,""));
    }
}
/*按enter搜索*/
function doSwitch(e) {
    var e = e ? e : window.event;
    if (e.keyCode == 13) {
        doSwitchSearch();
        if(e.preventDefault){
            e.preventDefault();
        }
        if(e.returnValue){
            e.returnValue = false;
        }
        return;
    }
}

function doSwitchSearch() {
    var switchInput = $("#switchInput"),
        val = switchInput.val(),
        total = $("#J_total").data("total");
    if(val && val.isAllNumber()){
        if(parseInt(val) > parseInt(total)){
            val = total;
        }
        if (parseInt(val) < 1) {
            val = 1;
        }
        getInfoNews(val);
    }
}

/*修正ie6下页码按钮宽度问题*/
function doFixPageWidth() {
    $("#pageNumWrap .pageNum a").each(function () {
        var self = $(this),
            width = parseInt(self.width());
        if (width < 22) {
            self.css("width", "22px");
        }
    });
}

function setNewsList(info) {
    var newsHtml = "";
    $.each(info, function (i, items) {
        var date = items.date,
            id = items.id,
            pid = items.pid,
            title = items.title,
            summary = items.summary,
            img = items.img;
        newsHtml += "<li class=\"info-news-item\">";
        newsHtml += "<div class=\"info-news-item-imgBox\">";
        newsHtml += "<a href=\"http://info.huitu.com/show/" + pid + "/" + id + "\" title=\""+title+"\"><img class=\"info-news-item-img\" src=\"http://lib.huitu.com" + img + "\" alt=\"" + title + "\"></a>";
        newsHtml += "<a class=\"info-news-item-link\" target=\"_blank\" title=\"" + title + "\" hidefocus=\"true\" href=\"http://info.huitu.com/show/" + pid + "/" + id + "\">" + title + "</a></div>";
        newsHtml += "<div class=\"info-news-detail\">";
        newsHtml += "<div class=\"info-news-title\"><a target=\"_blank\" title=\"" + title + "\" href=\"http://info.huitu.com/show/" + pid + "/" + id + "\">" + title + "</a></div>";
        newsHtml += "<p>" + summary + "</p>";
        newsHtml += "<div class=\"info-news-detail-other\"><a href=\"http://info.huitu.com/show/" + pid + "/" + id + "\" title=\"阅读详情\">阅读详情&gt;&gt;</a><span>时间：" + date + "</span></div>";
        newsHtml += "</div></li>";
    });
    $(".info-news-list").html("").html(newsHtml);
}
function getFace(c) {
    var faces = ['aoman.gif', 'baifo.gif', 'da1.gif', 'da2.gif', 'daku.gif', 'deyi.gif', 'ding.gif', 'guzhang.gif', 'haha.gif', 'haixiu.gif', 'han.gif', 'hao.gif', 'huaixiao.gif', 'jingya.gif', 'kelian.gif', 'leiji.gif', 'ma.gif', 'manyi.gif', 'meiguikai.gif', 'meiguixie.gif', 'miaoshi.gif', 'nanguo.gif', 'ok.gif', 'qiang.gif', 'shangxin.gif', 'shengqi.gif', 'shiai.gif', 'shui.gif', 'tiaopi.gif', 'tu.gif', 'weiqu.gif', 'weixiao.gif', 'wenhao.gif', 'wuyu.gif', 'xia.gif', 'yanchan.gif', 'ye.gif', 'yun.gif', 'zhichi.gif', 'zhuakuang.gif'],
        reg = /\[SF\d{1,2}\]|\[MF\d{1,2}\]|\[LF\d{1,2}\]/g;
    return c.replace(reg, function (items) {
        var item = items.replace(/\[|\]/g, "").split("F"),
           type = item[0],
           index = item[1], size;
        if (type == "S") { size = 20; }
        if (type == "M") { size = 32; }
        if (type == "L") { size = 42; }
        var src = decodeURIComponent("<img src='http://skin.huitu.com/images/smiley/" + size + "/" + faces[index - 1] + "' align='absmiddle' />");
        return src;
    })
}
function getConsult(index) {
    var id = $("#detailId").val();
    $(".law-consultList").html("<div style='text-align:center;padding:30px 0px;'>正在加载评论列表，请稍候...</div>");
    $(".law-page").html("");
    $.getJSON("http://info.huitu.com/do/CommentPage.ashx?pageidx=" + index + "&id=" + id + "&r=" + Math.random(), function (r) { setPageBar(r); });
}
function setPageBar(r) {
    var pageSize = r.pageSize,
        totalCount = r.totalCount,
        totalPage = Math.ceil(parseInt(totalCount) / parseInt(pageSize)),
        pageIdx = r.pageIdx,
        info = r.info,
        pageHtml = "",
        prevHtml = "",
        pageNumHtml = "",
        nextHtml = "";
    if (pageIdx == "1") {
        prevHtml += "<span class=\"prev\">上一页</span>";
        prevHtml += "<span class=\"firstPage\"><b class=\"ico\"></b></span>";
    } else {
        var prevIdx = parseInt(pageIdx) - 1;
        prevHtml += "<a class=\"prev\" href=\"javascript:getConsult('" + prevIdx + "');\">上一页</a>";
        prevHtml += "<a class=\"firstPage\" href=\"javascript:getConsult('1');\"><b class=\"ico\"></b></a>";
    }
    if (pageIdx == totalPage || totalPage <=1) {
        nextHtml += "<span class=\"lastPage\"><b class=\"ico\"></b></span>";
        nextHtml += "<span class=\"next\">下一页</span>";
    } else {
        var nextIdx = parseInt(pageIdx) + 1;
        nextHtml += "<a class=\"lastPage\" href=\"javascript:getConsult('" + totalPage + "');\"><b class=\"ico\"></b></a>";
        nextHtml += "<a class=\"next\" href=\"javascript:getConsult('" + nextIdx + "');\">下一页</a>";
    }
    var firstHtml = "", lastHtml = "", pageIdx = parseInt(pageIdx), totalPage = parseInt(totalPage);
    for (var i = 1; i <= 2; i++) {
        if (pageIdx + i <= totalPage) {
            lastHtml += "<a class=\"law-pageNum\" href=\"javascript:getConsult('" + (pageIdx + i) + "')\">" + (pageIdx + i) + "</a>";
        }
    }
    for (var i = 2; i > 0; i--) {
        if (pageIdx - i > 0) {
            firstHtml += "<a class=\"law-pageNum\" href=\"javascript:getConsult('" + (pageIdx - i) + "')\">" + (pageIdx - i) + "</a>";
        }
    }
    var currentHtml = "<span class=\"on law-pageNum\">" + pageIdx + "</span>";
    pageNumHtml = firstHtml + currentHtml + lastHtml;
    var pageHtml = prevHtml + pageNumHtml + nextHtml;
    $(".law-page").html("").html(pageHtml);
    var askHtml = "";
    if (totalCount == 0) {
        askHtml += "沙发空缺中，快来抢啦～";
    }
    $("#commentHd").html("(共有 " + totalCount + " 条评论)");
    $.each(info, function (i, items) {
        var userId = items.userid,
            nickName = items.nickname,
            content = items.conntent,
            addTime = items.addtime,
			id = items.id,
            fixContent = getFace(content),
            infos = items.infos,
            len = infos.length,
            r = "";
        r += "<div class=\"reply-manage\"><a hidefocus=\"true\" onclick=\"showReplyComment('" + id + "')\" class=\"reply-btn\" title=\"回复\" href=\"javascript:void(0)\"><span class=\"ico\"></span>回复</a></div>";
        r += "<div class=\"diary-comment-content\">";
        if (len > 0) {
            r += "<div id=\"replyInner" + id + "\" class=\"reply-inner\">";
        }else {
            r += "<div id=\"replyInner" + id + "\" class=\"reply-inner\" style=\"display:none;\">";
        }
        r += "<div class=\"reply-ico\"></div>";
        r += "<ul class=\"reply-list\">";
        if (len > 0) {
            $.each(infos, function (i, v) {
                var rcontent = v.pcontent,
                    rdate = v.pdate,
                    rname = v.pnickname,
                    ruserid = v.puserid,
                    fixrcontent = getFace(rcontent);
                r += "<li class=\"comment-content-item clearfix\">";
                r += "<a class=\"reply-imgbox\" title=\"" + rname + "\" href=\"http://hi.huitu.com/" + ruserid + "\"><img src=\"http://show.huitu.com/avatar/0/" + ruserid + ".gif\" onerror=\"this.src='http://skin.huitu.com/images/noface.gif'\" alt=\"" + rname + "\" /></a>";
                r += "<div class=\"reply-detail\"><div><a class=\"reply-name\" title=\"" + rname + "\" href=\"http://hi.huitu.com/" + ruserid + "\">" + rname + "</a>在&nbsp;<span class=\"reply-time\" style='vertical-align:middle;'>" + rdate + "</span>&nbsp;回复：</div>";
                r += "<p>" + fixrcontent + "</p>";
                r += "</div></li>";
            });
        }
        r += "</ul>";
        r += "<div class=\"reply-textarea-box\" id=\"replyTextBox" + id + "\">";
        r += "<textarea class=\"reply-textarea\" id=\"replyTextarea" + id + "\"></textarea>";
        r += "<div class=\"reply-bottom-manage\"><div onclick=\"showReplyFace('" + id + "',0)\" id=\"face" + id + "\" class=\"face\"></div><div class=\"reply-error-tip\"></div><input type=\"button\" onclick=\"return replyCheck('" + id + "')\" class=\"replyCommentBtn\" value=\"确认回复\" /></div>";
        r += "</div>";
        r += "</div></div>";
        askHtml += "<dl class=\"consultItem clearfix\">";
        askHtml += "<dt class=\"userImg\"><a href=\"http://hi.huitu.com/" + userId + "/\"><img border=\"0\" alt=\"" + nickName + "\" onerror=\"this.src='http://skin.huitu.com/images/noface.gif'\" src=\"http://show.huitu.com/avatar/0/" + userId + ".gif\"></a></dt>";
        askHtml += "<dd><div class=\"aboutConsult\"><a href='http://hi.huitu.com/" + userId + "/' hidefocus='true' title='" + nickName + "' target='_blank' style='color:#c22a3b;font-weight:bold;outline:none;'>" + nickName + "</a> 在&nbsp;<span class=\"reply-time\" style='vertical-align:middle;'>" + addTime + "</span>&nbsp;评论：</div>";
        askHtml += "<p>" + fixContent + "</p>";
        askHtml += r;
        askHtml += "</dd>";
        askHtml += "</dl>";
    });
    $(".law-consultList").html(askHtml);
    $("body").append("<div class=\"faceList\"><div class=\"faceListHd\"><span class=\"on\">小</span><span>中</span><span>大</span><div onclick=\"closeFace()\" class=\"closeFace\">[×]</div></div><ul class=\"faceSort clearfix\"></div>");
}
function showReplyComment(id) {
    var inner = $("#replyInner" + id),
        text = $("#replyTextBox" + id),
        items = inner.find(".comment-content-item");
    if(items.length == 0){
        inner.toggle();
    }
    text.toggle();
    if (text.css("display") != "none") {
        text.find("textarea").focus();  
    }
}
function showReplyFace(id,idx) {
    var self = $("#face" + id),
        offset = self.offset(),
        left = offset.left,
        top = offset.top,
        f = $(".faceList .faceSort");
    LoadReplyFace(f, idx);
    $(".faceList").data("id", id).css({ "left": left, "top": top + 33 }).show().find("span").unbind("click").bind("click", changeFace);
}
function LoadReplyFace(f, idx) {
    var size, prefix;
    if (f.length > 0) {
        var faces = ['aoman.gif', 'baifo.gif', 'da1.gif', 'da2.gif', 'daku.gif', 'deyi.gif', 'ding.gif', 'guzhang.gif', 'haha.gif', 'haixiu.gif', 'han.gif', 'hao.gif', 'huaixiao.gif', 'jingya.gif', 'kelian.gif', 'leiji.gif', 'ma.gif', 'manyi.gif', 'meiguikai.gif', 'meiguixie.gif', 'miaoshi.gif', 'nanguo.gif', 'ok.gif', 'qiang.gif', 'shangxin.gif', 'shengqi.gif', 'shiai.gif', 'shui.gif', 'tiaopi.gif', 'tu.gif', 'weiqu.gif', 'weixiao.gif', 'wenhao.gif', 'wuyu.gif', 'xia.gif', 'yanchan.gif', 'ye.gif', 'yun.gif', 'zhichi.gif', 'zhuakuang.gif'];
        switch (idx) {
            case 0:
                prefix = "SF";
                size = "20";
                break;
            case 1:
                prefix = "MF";
                size = "32";
                break;
            case 2:
                prefix = "LF";
                size = "42";
                break;
        }
        f.html("");
        for (var i = 0; i < faces.length; i++) {
            var face = faces[i];
            f.append("<li><img onclick=\"replyInface('[" + prefix + (i + 1) + "]')\" src=\"http://skin.huitu.com/images/smiley/" + size + "/" + face + "\" /></li>");
        }
    }
}
function closeFace() {$(".faceList").hide(); }
function replyInface(face) {
    var id = $(".faceList").data("id"),
        textarea = $("#replyTextarea" + id),
        val = textarea.val();
    textarea.val(val + face);
}
function replyCheck(id) {
    var n_name = GetCookie("NickName"),
        userid = GetCookie("UserId"),
        tip = $("#replyTextBox" + id).find(".reply-error-tip");
    if (n_name == null && n_name != "") {
        tip.html("请登录后再回复。");
        setTimeout(function () { tip.html(" "); }, 2000);
        return false;
    }
    var content = $("#replyTextarea" + id).val();
    if (content == "" || $.trim(content).replace(/\r\n/ig, "").length == 0) {
        tip.html("回复内容不能为空。");
        setTimeout(function () { tip.html(" "); }, 2000);
        return false;
    }
    content = content.replace(/<[^>]*>/gi, "");
    content = content.replace(/</gi, "&lt;");
    content = content.replace(/>/gi, "&gt;");
    var t = content.replace(/[\[SF|MF|LF\d{1,2}\]\.，。,:;?？：；“”‘’~`~·\"\']/gi, "");
    if (content == "" || (t == "" || $.trim(t).replace(/\r\n/ig, "").length == 0)) {
        tip.html("不允许只输入符号、表情等。");
        setTimeout(function () { tip.html(" "); }, 2000);
        return false;
    } else if (content.length < 5) {
        tip.html("回复内容长度不能少于5。");
        setTimeout(function () { tip.html(" "); }, 2000);
        return false;
    }
    submitReply(content, id);
    return false;
}
function submitReply(content,id) {
    var uid = GetCookie("UserId"),
        nname = GetCookie("NickName"),
        nickname = encodeURIComponent(nname),
        detailId = $("#detailId").val(),
        tip = $("#replyTextBox" + id).find(".reply-error-tip"),
        btn = $("#replyTextBox" + id).find(".replyCommentBtn"),
        ctn = getFace(content);
    btn.attr("disabled","disabeld");
    $.ajax({
        "type": "POST",
        "url": "http://info.huitu.com/do/addreplycomment.ashx?content=" + encodeURIComponent(content) + "&nickname=" + nickname + "&userid=" + uid + "&infoId=" + detailId + "&id=" + id,
        "success": function (r) {
            if (r == 1) {
                var time = new Date(),
                    year = time.getFullYear(),
                    month = time.getMonth() + 1,
                    day = time.getDate(),
                    hour = time.getHours(),
                    minute = time.getMinutes(),
                    second = time.getSeconds();
                if (month < 10) month = "0" + month;
                if (day < 10) day = "0" + day;
                if (hour < 10) hour = "0" + hour;
                if (minute < 10) minute = "0" + minute;
                if (second < 10) second = "0" + second;
                var tim = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
                str = "<li class=\"comment-content-item clearfix\">";
                str += "<a class=\"reply-imgbox\" title=\"" + nname + "\" href=\"http://hi.huitu.com/" + uid + "\"><img src=\"http://show.huitu.com/avatar/0/" + uid + ".gif\" onerror=\"this.src='http://skin.huitu.com/images/noface.gif'\" alt=\"" + nname + "\" /></a>";
                str += "<div class=\"reply-detail\"><div><a class=\"reply-name\" title=\"" + nname + "\" href=\"http://hi.huitu.com/" + uid + "\">" + nname + "</a>在&nbsp;<span class=\"reply-time\">" + tim + "</span>&nbsp;回复：</div>";
                str += "<p>" + ctn + "</p>";
                str += "</div></li>";
                $("#replyInner" + id).find("ul").append(str);
                $("#replyTextBox" + id + ",.faceList").hide();
            }
            if (r == 0) {
                tip.html("回复失败。");
                setTimeout(function () { tip.html(" "); }, 2000);
            }
            btn.removeAttr("disabled");
        },
        "error": function () {
            tip.html("回复失败。");
            setTimeout(function () { tip.html(" "); }, 2000);
            btn.removeAttr("disabled");
        }
    });
}
function changeFace() {
    $(this).addClass("on").siblings().removeClass("on");
    var index = $(this).index(),
        id = $(this).closest(".faceList").data("id");
    showReplyFace(id,index);
}
function checkcomment() {
    var n_name = GetCookie("NickName"),
        userid = GetCookie("UserId");
    if (n_name == null && n_name != "") {
        alert("请登录后再发表评论。");
        return false;
    }

    var content = $("#info-consult-textarea").val();
    if (content == "" || $.trim(content).replace(/\r\n/ig, "").length == 0) {
        alert("评论内容不能为空。");
        return false;
    }
    content = content.replace(/<[^>]*>/gi, "");
    content = content.replace(/</gi, "&lt;");
    content = content.replace(/>/gi, "&gt;");
    var t = content.replace(/[\[SF|MF|LF\d{1,2}\]\.，。,:;?？：；“”‘’~`~·\"\']/gi, "");
    if (content == "" || (t == "" || $.trim(t).replace(/\r\n/ig, "").length == 0)) {
        alert("不允许只输入符号、表情等。");
        return false;
    }else if(content.length < 5){
        alert("评论内容长度不能少于5。");
        return false;
    }else {
        $("#info-consult-textarea").val(content);
    }
    submitAsk(content,n_name,userid);
    return false;
}
function submitAsk(content, nickname, userid) {
    $.ajax({
        type: "POST",
        url: "http://info.huitu.com/do/AddComment.ashx",
        data: { content: content, nickname: nickname, userid: userid, id: $("#detailId").val() },
        success: function (r) {
            if (r == "True") {
                getConsult(1);
                $(".comment-textarea").val("");
            } else {
                alert("抱歉，出错了。");
            }
        },
        error: function () {
            alert("error");
        }
    });
}
function getVote() {
    $.ajax({
        type: "GET",
        url: "http://info.huitu.com/do/GetVote.ashx",
        data: { id: $("#detailId").val(), r: Math.random() },
        success: function (r) {
            var support = r.support,
                views = r.views;
            if (support == "") { support = 0; }
            if (views == "") { views = 0; }
            $("#num").html(support);
            $("#views").html(views);
        },
        error: function () { }
    });
    var Vote = GetCookie("Vote");
    if (Vote != null) {
        var voteList = Vote.split(","), detailId = $("#detailId").val(),n = 0;
        $.each(voteList, function (i, items) {
            if (items == detailId) {
                n++;
            }
        });
        if(n > 0){
            $(".law-viewpoint .ico").css({ "cursor": "default" ,"color":"grey"}).html("已喜欢").unbind("click");
            $(".law-agree,.law-disagree").unbind("click");            
        }
    }
    
}
function toVote() {
    var num = $(this).find("#num"),
        numval = parseInt(num.html());
    $.ajax({
        type: "GET",
        url: "http://info.huitu.com/do/AddVote.ashx",
        data: { id: $("#detailId").val(), r: Math.random() },
        success: function (r) {
            if (r == "True") {
                num.html(numval + 1);
            } else {
                $(".law-agree").css("cursor", "default").html("已喜欢").unbind("click");
            }
        },
        error: function () { }
    });
}
function addViews() {
    $.ajax({
        type : "GET",
        url: "http://info.huitu.com/do/SetViews.ashx",
        data: { id: $("#detailId").val() , r: Math.random() },
        success: function () { },
        error: function () { }
    });
}
$(function () {
    $(".keywordItem").each(function (i) {
        var rand = parseInt(Math.random() * 8);
        $(this).addClass("tag" + rand);
        if ($.browser.msie) {
            $(this).css("z-index", 599 - i);
        }
    });
    if ($("#keyword").length > 0) { initManage(); }
    if ($(".infoTabView").length > 0) { tabView(0); }
    $(".tabImg a").each(function (i) { showTab(i, this, 1); });
    $(".tabNav span").each(function (i) { showTab(i, this, 2); });
    $(".keywordItem a").hover(function () {
        var self = $(this),
			width = self.width(),
			theNum = self.siblings(".theNum"),
			theNumHeight = theNum.height() / 2;
        self.siblings(".theNum").css({ "left": (width + 12), "margin-top": "-" + theNumHeight + "px" }).show().closest(".keywordItem").siblings(".keywordItem").find(theNum).hide();
    }, function () {
        $(this).siblings(".theNum").hide();
    });
    $(".sortNav span").bind("click", function () { showkeyword(this, 1); initManage(); });
    $(".popular span").bind("click", function () { showkeyword(this, 2); initManage(); });
    if ($(".toShowList").length > 0) { show(0); }
    $(".toShowInner ul").each(function (i) { $(this).hover(function () { clearTimeout(timer); }, function () { show(i); }); });
    if ($(".slider-box").length > 0) { $(".slider-box").infoSlider({ "autoPlay": true }); }
    animateScroll($("#task-list"), "li");
})
