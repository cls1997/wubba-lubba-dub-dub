ZDK.define("module.slide",function(){var a=function(a){return this instanceof arguments.callee?void this.entry(a):new arguments.callee(a)};return a.prototype={entry:function(a){var b=this.opche=$.extend({target:null,item:"li",prev:null,next:null,step:1,size:0,time:200,timeout:0,loop:!0,path:!1,moreLink:!1,isRound:!1,oninited:null},a);this.target=$(b.target),this.target.children().length<2||(this.width=this.target.parent().outerWidth(this),this.itemList="string"==typeof b.item?this.target.find(b.item):b.item,this.number=this.itemList.length,this.perWidth=this.itemList.eq(0).outerWidth(!0),this.perHeight=this.itemList.eq(0).outerHeight(!0),this.size=b.size||Math.floor(this.width/this.perWidth),this.step=1==this.size||b.step>this.size?1:b.step,this.hv=b.path?"marginTop":"marginLeft",this.index=this.oindex=0,this.maxIndex=1==this.size?this.number-1:this.number-this.size,this.init(),this.bind(),this.autoPlay(),this.opche.oninited&&this.opche.oninited(this))},init:function(){if(1!==this.size){var a=this.opche.path?this.perWidth:this.size*this.perWidth,b=this.opche.path?this.size*this.perHeight:this.perHeight;if(this.opche.isRound&&this.size<this.number){var c=-(this.number-this.size)*(this.opche.pache?this.perWidth:this.perHeight);this.target.prepend(this.itemList.slice(this.size).clone()).append(this.itemList.slice(0,this.size).clone()),this.number*=2,this.maxIndex=this.number-this.size,this.index=this.number/2-this.size,this.target.css(this.hv,c)}this.scroll=$("<div></div>").css({position:"relative",width:a,height:b,overflow:"hidden"}).appendTo(this.target.parent()).append(this.target),!this.opche.path&&this.target.css("width",this.number*this.perWidth+100)}else this.target.css({position:"relative",overflow:"hidden",padding:"0",width:this.perWidth,height:this.perHeight}),this.itemList.css({position:"absolute",left:this.perWidth+100,top:this.perHeight+100}),this.itemList.eq(0).css({left:0,top:0})},bind:function(){var a=this,b=this.opche;if(b.moreLink){if(b.prev&&$(b.prev).click(function(){var c=$(b.next);c[0].clickCount=0,c.hasClass("channel-bar-slide-more")&&c.removeClass("channel-bar-slide-more").attr("data-more",c.attr("href")).attr("href","###").attr("target","").html('<i class="iconfont">&#xe822;</i>'),a.prev()}),b.next){var c=$(b.next);c[0].clickCount=0,c.click(function(b){2==c[0].clickCount&&($(this).addClass("channel-bar-slide-more").attr("href",$(this).attr("data-more")).html("查看更多交易").attr("target","_blank"),b.preventDefault()),c[0].clickCount++,a.next()})}}else b.prev&&$(b.prev).click(function(){a.prev()}),b.next&&$(b.next).click(function(){a.next()})},autoPlay:function(a){var b=this;return a?b.timer&&clearInterval(b.timer):b.opche.timeout&&(b.timer=setInterval(function(){b.go(b.index+=b.step)},b.opche.timeout)),!0},prev:function(){this.playing||((this.index-=this.step)<0&&0!=this.oindex&&(this.index=0),this.go(this.index,this.autoPlay(!0)),this.trigger("prev",{target:this,index:this.index,oindex:this.oindex}))},next:function(){this.playing||((this.index+=this.step)>this.maxIndex&&this.oindex!=this.maxIndex&&(this.index=this.maxIndex),this.go(this.index,this.autoPlay(!0)),this.trigger("next",{target:this,index:this.index,oindex:this.oindex}))},go:function(a,b){var c=this;this.playing||((this.index=a)<0?this.opche.isRound?(this.target.css(this.hv,-this.number/2*this.perHeight),this.index=this.number/2-this.size):this.index=this.opche.loop?this.maxIndex:0:this.index>this.maxIndex&&(this.opche.isRound?(this.target.css(this.hv,-(this.number/2-this.size)*this.perHeight),this.index=this.number/2):this.index=this.opche.loop?0:this.maxIndex),c.size<c.number&&this.play(b))},play:function(a){var b=this,c={};if("number"==typeof a){if(a==this.index)return;return b.go(a,this.autoPlay(!0))}if(b.playing=!0,b.trigger("play",{target:b,index:b.index,oindex:b.oindex}),1==b.size){var d=b.direction();return b.itemList.eq(b.oindex).animate({left:d[0].l,top:d[0].t},"slow",function(){a&&b.autoPlay(),b.oindex=b.index,b.playing=!1}),b.itemList.eq(b.index).css({left:d[1].l,top:d[1].t}).animate({left:0,top:0},b.opche.time)}b.opche.path?c.marginTop=-b.index*b.perHeight:c.marginLeft=-b.index*b.perWidth,b.target.animate(c,b.opche.time,function(){a&&b.autoPlay(),b.playing=!1,b.oindex=b.index})},direction:function(){var a=this.perHeight,b=this.perWidth,c=this.opche.path;switch(this.path="number"==typeof c?1+8*Math.random():this.oindex>this.index?c?2:4:c?1:3,this.path){case 1:return[{t:-a},{l:0,t:a}];case 2:return[{t:a},{l:0,t:-a}];case 3:return[{l:-b},{t:0,l:b}];case 4:return[{l:b},{t:0,l:-b}];case 5:return[{l:-b,t:-a},{t:a,l:b}];case 6:return[{l:b,t:-a},{t:a,l:-b}];case 7:return[{l:-b,t:a},{t:-a,l:b}];default:return[{l:b,t:a},{t:-a,l:-b}]}}},ZDK.procopy(a,ZDK.EventEmitter)}),function(){function a(){return"j-witkey-page"==document.body.id}function b(){$("#j-pub-entry").hide()}function c(){var a=$("#j-witkey-select");a.size()&&a.change(function(){a.val()&&(document.location.href=a.attr("data-url").replace("#ID#",a.val()))})}function d(){function c(a,b){a.preventDefault(),b=$.trim(b),b+=b.indexOf("?")>=0?"&inajax=1":"?inajax=1",$.getJSON(b,function(a){$("div.mainContent").html(a.msg),setTimeout(function(){ZDK.taskList&&ZDK.taskList.initList()},100)})}if(a()){$("#j-viewtask").on("click",function(a){c(a,$(this).attr("href")),b(),$("#j-viewtask-wrap").addClass("list-catalog--ft-selected"),$("ul.list-catalog-category li").removeClass("selected")});var d="#j-tasklist-api div.pagination a, #j-tasklist-api div.list-filter a, #j-tasklist-api div.list-sorttag a, #zbj-storprice1 div.show-dor li a";$(document.body).delegate(d,"click",function(a){c(a,$(this).attr("href"))}),$(document.body).delegate("#zbj-storprice1","submit",function(a){var b=$(this).attr("action");b+="?j="+$("#minPrice").val(),b+="&b="+$("#maxPrice").val(),b+="&kw="+$('#zbj-storprice1 input[name="kw"]').val(),c(a,b)})}}function e(){$(".list-recommend-showhere .recommend-me").on("click",function(a){a.preventDefault();var b=$(this);ZDK.passport.login(function(){ZDK.module.window({title:"系统弹窗",content:b.attr("act-href"),cache:!1,width:400})})})}function f(){$("div.witkey-list div.witkey-item").ie6hover("witkey-item-hover")}function g(){var a=$(".list-filter-inline").find("input[type=checkbox]");a.click(function(){var b="",c=$(this).attr("data-href");a.each(function(){b+=$(this).is(":checked")?$(this).val():"4"}),c=c.replace("#ID#",b),location.href=c})}function h(){var a=$(".lookMoreService");0!=a.size()&&a.click(function(){var a=$(this),b=a.attr("data-href"),c=a.closest(".look-more").prev(".fws-item-ft").find(".fws-item-table tbody"),d=b.indexOf(location.host)>-1?!1:!0,e={url:b,type:"get"};e.dataType=d?"jsonp":"json",d&&(e.jsonp="jsonpcallback"),e.success=function(b){var d="";if(1==b.state)for(var e=0,f=b.msg.length;f>e;e++)d+='<tr><td><a href="http://home.zhubajie.com/'+b.msg[e].pubUserId+"/sid-"+b.msg[e].saleId+'.html" target="_blank">'+b.msg[e].title+'</a></td><td class="price">￥'+b.msg[e].price+"</td><td>"+b.msg[e].saleCount+'</td><td><a target="_blank" href="http://home.zhubajie.com/'+b.msg[e].pubUserId+"/sid-"+b.msg[e].saleId+'.html#service-evaluate">'+b.msg[e].commentCount+"</a></td></tr>";c.html(d),a.data("originTxt",a.html()).attr("isLoad",1).attr("isExtend",1).html("收起服务<b></b>").addClass("look-more-ex")},1==a.attr("isLoad")?1==a.attr("isExtend")?(c.find("tr:gt(2)").hide(),a.attr("isExtend",0).html(a.data("originTxt")).removeClass("look-more-ex")):(c.find("tr:gt(2)").show(),a.attr("isExtend",1).html("收起服务<b></b>").addClass("look-more-ex")):$.ajax(e)})}function i(){$("img.lazyload").lazyload({effect:"fadeIn"})}function j(){var a=$(".fws-detail-widget");a.hover(function(){$(this).parent().find(".extend-pop").show()},function(){$(this).parent().find(".extend-pop").hide()})}function k(){var a=$("#j-more-filter"),b=a.find(".selected"),c=!1;b.each(function(){"全部"!=$(this).text()&&(c=!0)}),$("#filter-slide-inout").bind("click",function(){var b=$(this);b.hasClass("filter-extend")?(a.slideDown("fast",function(){b.removeClass("filter-extend").addClass("filter-up")}),$(".filter-category").attr("style","")):(a.slideUp("fast",function(){b.removeClass("filter-up").addClass("filter-extend")}),$(".filter-category").css("border","none"))}),c&&$("#filter-slide-inout").trigger("click")}function l(){var a='<span class="loading"></span>',b=$("#j-area-tip"),c=$("#j-area-filter"),d="6566,6560,6561,7275,7276,6567";c.on("click","a",function(c){var e=$(this),f=e.offset(),g=e.attr("data-id"),h=e.attr("href"),i='<a href="'+h+'">全部</a>';return d.indexOf(g)>-1||e.html().indexOf("全部")>-1?!0:($(".click").removeClass("click"),e.addClass("click"),b.show().css({left:f.left,top:f.top+22}).html(a),e.data("html")?b.html(e.data("html")):$.ajax({url:"http://u."+PPInfo.baseURI+"/ajax/getregion?parent_id="+g,type:"get",dataType:"jsonp",jsonp:"jsoncallback",success:function(a){for(var c=0,d=a.length;d>c;c++){var f=h.replace(/r\d+/gi,"r"+a[c].region_id);i+='<a href="'+f+'">'+a[c].region_name+"</a>"}e.data("html",i),b.html(i)}}),c.stopPropagation(),!1)}),$("body").click(function(){b.hide(),$(".click").removeClass("click")})}$(".list-body").on("click",".j-outsourcer-apply",function(){var a=$(this),b=a.attr("data-id"),c=ZDK.module.window({title:"邀请服务商",content:'<div class="invit-area"><span class="j-count-txt">字数在40个字以内</span><textarea name="invite-content" cols="74" rows="5">我们诚挚邀请您的加入，并希望建立长期合作关系</textarea></div>',id:"idbu",width:500,mask:!0,cache:!1,zIndex:500,close:!1,hasIframe:!0,ok:"确认",cancel:"取消"});c.on("onok",function(){var d=$.trim(c.Body.find("textarea[name=invite-content]").val()),e=d.length;return""==d?(ZDK.Tips("邀请内容不能为空！",3e3,"warning"),!1):e>40?(ZDK.Tips("字数请控制在40字以内！已超出"+(e-40)+"个字！",3e3,"warning"),!1):void $.ajax({url:"http://u."+window.PPInfo.baseURI+"/outsource/invite",data:{uid:b,content:d},dataType:"jsonp",jsonp:"jsonpcallback",success:function(b){1==b.state?(ZDK.Tips(b.msg,3e3,"success"),a.html("邀请中").addClass("outsourcer-applying").removeClass("j-outsourcer-apply")):ZDK.Tips(b.msg,3e3,"error")}})})}),$(document).ready(function(){c(),d(),e(),f(),i(),j(),g(),h(),k(),l()})}(),function(){var a={initList:function(){{var a=$(".price-range"),b=$(".list-filter-more");$(".filter-more-btn")}if($(".price-range input").bind("mousedown",function(){a.find(".js_range_input").addClass("show-button")}),$(".js_number_type").bind("keyup",function(a){a.target.value=a.target.value.replace(/[^\d]/g,"")}),$(".list-task tr").bind("mouseenter",function(){$(this).addClass("hover")}).bind("mouseleave",function(){$(this).removeClass("hover")}),b.length){var c=ZDK.store.get("_listFilterMoreVisible");"visible"===c?showFilterMore():"invisible"===c&&hideFilterMore()}$(".j_save_filter").click(function(){var a="http://task."+PPInfo.baseURI+"/main/filtersave?filter="+encodeURIComponent($(this).attr("data-filters"))+"&jsonpcallback=?";ZDK.passport.login(function(){$.ajax({type:"get",dataType:"jsonp",url:a,success:function(a){ZDK.Tips(a.msg,3e3,1==a.state?"success":"error")}})})})},loadRecmdTask:function(){function a(a){$ctn=$("#j-recomendtask-box"),$.getJSON("http://task."+PPInfo.baseURI+"/api/recommendTask?tagid=24245&jsonpcallback=?",function(b){$ctn.fadeOut(function(){$ctn.html(b.msg).fadeIn(),a&&a.data("loading",!1)})})}$("#j-recomendtask-refresh").bind("click",function(b){return b.preventDefault(),$target=$(this),$target.data("loading")?!1:($(this).data("loading",!0),void a($target))}),a()},buyRecmdWitkey:function(){$(document.body).delegate("a.js_recommend_buy","click",function(a){var b=$(this);a.preventDefault(),ZDK.passport.login(function(){ZDK.module.window({title:"系统弹窗",content:b.attr("act-href"),cache:!1,width:400})})})},bindDocEvents:function(){$(document).unbind("click").bind("click",function(a){var b=$(".price-range"),c=$(a.target),d=$(".show-dor ul");c.closest(".price-range").length<1&&b.find(".js_range_input").removeClass("show-button"),c.hasClass("show-dor")&&!d.hasClass("show-con")?d.addClass("show-con"):d.removeClass("show-con")})},buyWitkeyTop:function(){$(document.body).delegate("#J-iwont-top","click",function(a){a.preventDefault();var b=$(this);ZDK.passport.login(function(){ZDK.module.window({title:"系统弹窗",content:b.attr("act-href"),cache:!1,width:400})})})},listRightFix:function(){return},switchChannelOne:function(){$curHeight=$(".list-filter.filter-along .filter-category.filter-gc").eq(0).height();var a=$(".sec_level_more");$(".list-filter.filter-along .filter-category.filter-gc").eq(0).height("50"),a.toggle(function(){$(".list-filter.filter-along .filter-category.filter-gc").eq(0).height($curHeight),a.empty().html("收起")},function(){$(".list-filter.filter-along .filter-category.filter-gc").eq(0).height("50"),a.empty().html("更多")})},changeSuccessTaskLink:function(){var a=$("#successLinkTrigger a");if(0===a.length)return!1;var b=a.attr("href"),c=b.replace(/\/t-/,"/o-").replace(/\/xuqiu/,"/success");a.attr("href",c)}};$(document).ready(function(){var b=$("#j-inajaxrequest");"1"!=b.val()&&(a.initList(),a.loadRecmdTask(),a.buyRecmdWitkey()),a.buyWitkeyTop(),a.bindDocEvents(),a.listRightFix(),a.switchChannelOne(),a.changeSuccessTaskLink()}),ZDK.taskList=a}(),$(document).ready(function(){window.zbjlog=window.zbjlog||{},window.zbjlog.initT6Log=function(){function isTest(){return-1!=location.href.indexOf("t6.zbj.com")}function isStage(){return-1!=location.href.indexOf("zhubajie.la")}function getLid(target){var logdata=$(target).parents("[data-logdata]").attr("data-logdata");try{logdata=eval("("+logdata+")")}catch(loge){logdata=null}var pageid=whichPage();return 1==pageid?"tasklist":2==pageid?logdata&&"task"==logdata.type?"tasklist":"userlist":3==pageid?"tasksearch":4==pageid?"usersearch":5==pageid?"servicelist":6==pageid?"servicesearch":""}function getClientType(){return"mainsite"}function getTagid(){return""}function getLogParams(){var a=ZDK.cookie.getCookie;return{vid:$("input[name=ab_sid]").val()||"",uid:a("userid")||"",cid:a("_uq"),sid:a("uniqid"),tt:getClientType(),tagId:getTagid(),catagoryId:$("input[name=catagory_id]").val()||"",version:"t6"}}function sendLog(a){var b=(new Date).getTime(),c=[LOG_URL+"?t="+b];a=a||{};for(var d in a)c.push(d+"="+a[d]);var e=getLogParams();for(var d in e)c.push(d+"="+e[d]);reqLog(c.join("&"))}function reqLog(a){var b="zbjlog_"+(new Date).getTime(),c=window[b]=new Image;c.onload=c.onerror=function(){window[b]=null},c.src=a,c=null}function pageNeedLog(){return whichPage()>0}function whichPage(){var a=/http:\/\/task.[^/]+(\/?|(\/?p\d+\.html)?$|\/t-)/,b=/http:\/\/www.[^/]+\/c-[^.]*(\/t\w*\.html)?$/,c=/http:\/\/home.[^/]+(\/?$|(\/?p\d*\.html)?$|\/p-)/,d=/http:\/\/www.[^/]+\/c-.*\/p\w*\.html$/,e=/http:\/\/search.[^/]+\/t\//,f=/http:\/\/search.[^/]+\/p\//,g=/http:\/\/home.[^/]+((\/s.html)|\/s-)/,h=/http:\/\/search.[^/]+\/s\//,i=location.href;return i.match(a)||i.match(b)?1:i.match(c)||i.match(d)?2:i.match(e)?3:i.match(f)?4:i.match(g)||-1!=i.indexOf("/s.html")?5:i.match(h)?6:0}function initPageLog(){pageNeedLog()&&($("body").delegate("[data-zbjlog]","click",itemsClicked),$("body").delegate("[webim]","click",webimBtnClicked),$("body").delegate(".witkeyhome-contactbox-qq a","click",qqBtnClicked))}function getItemIndex(target){var logdata=$(target).parents("[data-logdata]").attr("data-logdata"),itemIndex="";try{logdata=eval("("+logdata+")"),itemIndex=logdata.index||""}catch(loge){}return itemIndex}function getQuery(){return encodeURIComponent(jQuery.query.get("kw"))}function getItemId(target){var logdata=$(target).parents("[data-logdata]").attr("data-logdata"),itemIndex="";try{logdata=eval("("+logdata+")"),itemIndex=logdata.id||""}catch(loge){}return itemIndex}function getIstop(a){var b=($(a.parentNode).html(),$(a).parents("[data-logdata]").find(".list-icon-top"));return b.length>0?1:0}function addAbsid(a){return}function getCertification(a){var b=$(a),c="1"==b.data("isvip");return b.is(".im-cert-1")?"task_1":b.is(".im-cert-2")||b.is(".im-cert-3")?c?"task_2":"task_3":b.is(".im-cert-4")?"task_4":b.is(".im-cert-5")||b.is(".im-cert-6")?c?"task_5":"task_6":b.is(".service-pic-list [webim],.witkey-list [webim]")?"":b.is(".wk-r [webim]")?"home_1":b.is(".witkeyhome-contactbox-body [webim]")?"home_2":b.is(".im-hire")?"hire":""}function itemsClicked(){var a=this;sendLog({lid:getLid(a),li:getItemIndex(a),q:getQuery(),id:getItemId(a),isTop:getIstop(a),obj:getObj(a)})}function qqBtnClicked(){var a={obj:"contact",sendid:GetCookie("userid")||"",recvid:$("[data-userid]").data("userid"),request:encodeURIComponent(location.href),Certification:"home_3"};sendLog(a)}function webimBtnClicked(e){var target=this,btn=$(target);if(!btn.is(".btn-no-limits, .wbim-btn-no-login")){var options={};try{options=eval("("+$(target).attr("webim")+")")}catch(e){}var cert=getCertification(target),p={obj:"contact",sendid:GetCookie("userid")||"",recvid:options.uid,request:encodeURIComponent(location.href),Certification:cert,lid:getLid(target),li:getItemIndex(target),q:getQuery(),id:getItemId(target),isTop:getIstop(target)};cert||delete p.Certification,sendLog(p)}}function getObj(target){var loginfo=$(target).attr("data-zbjlog");if(!loginfo)return"";try{var logobj=eval("("+loginfo+")");return logobj.obj||""}catch(loge){return""}return""}var LOG_URL=isTest()||isStage()?"http://113.31.20.44:8787":"http://click.log.zhubajie.com:8787";return initPageLog}()}()),zbjlog.initT6Log(),function(){function a(a,b){var c=a.find("dd"),d=a.find(".toggle-btn");arguments.length<2&&(b="none"==c.css("display")?!1:!0),b?c.slideUp(function(){d.html("+")}):c.slideDown(function(){d.html("—")})}function b(b){a(b,!1)}var c=$(".search-category-wrap").delegate(".toggle-btn","click",function(b){b.preventDefault(),a($(this).closest("dl"))}).find(".selected");if(c.length){b(c.closest("dl"));var d=$(".j_search_category");if(c.attr("href"))d.html('<span class="ui-breadcrumb-divider">&gt;</span><a href="'+c.attr("href")+'">'+c.html()+"</a> ");else{var e=c.find("a"),f=c.closest("dl").find("dt span a");d.html('<span class="ui-breadcrumb-divider">&gt;</span><a href="'+f.attr("href")+'">'+f.html()+'</a> <span class="ui-breadcrumb-divider">&gt;</span><a href="'+e.attr("href")+'">'+e.text().replace(/\(\d+\)\s*$/,"")+"</a> ")}}}(),function(a){a.easytabs=function(b,c){var d,e,f,g,h,i,j=this,k=a(b),l={animate:!0,panelActiveClass:"active",tabActiveClass:"active",defaultTab:"li:first-child",animationSpeed:"normal",tabs:"> ul > li",updateHash:!0,cycle:!1,collapsible:!1,collapsedClass:"collapsed",collapsedByDefault:!0,uiTabs:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",transitionInEasing:"swing",transitionOutEasing:"swing",transitionCollapse:"slideUp",transitionUncollapse:"slideDown",transitionCollapseEasing:"swing",transitionUncollapseEasing:"swing",containerClass:"",tabsClass:"",tabClass:"",panelClass:"",cache:!0,event:"click",panelContext:k},m={fast:200,normal:400,slow:600};j.init=function(){j.settings=i=a.extend({},l,c),i.bind_str=i.event+".easytabs",i.uiTabs&&(i.tabActiveClass="ui-tabs-selected",i.containerClass="ui-tabs ui-widget ui-widget-content ui-corner-all",i.tabsClass="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all",i.tabClass="ui-state-default ui-corner-top",i.panelClass="ui-tabs-panel ui-widget-content ui-corner-bottom"),i.collapsible&&void 0!==c.defaultTab&&void 0===c.collpasedByDefault&&(i.collapsedByDefault=!1),"string"==typeof i.animationSpeed&&(i.animationSpeed=m[i.animationSpeed]),a("a.anchor").remove().prependTo("body"),k.data("easytabs",{}),j.setTransitions(),j.getTabs(),o(),p(),r(),v(),w(),k.attr("data-easytabs",!0)},j.setTransitions=function(){f=i.animate?{show:i.transitionIn,hide:i.transitionOut,speed:i.animationSpeed,collapse:i.transitionCollapse,uncollapse:i.transitionUncollapse,halfSpeed:i.animationSpeed/2}:{show:"show",hide:"hide",speed:0,collapse:"hide",uncollapse:"show",halfSpeed:0}},j.getTabs=function(){var b;j.tabs=k.find(i.tabs),j.panels=a(),j.tabs.each(function(){var c=a(this),d=c.children("a"),e=c.children("a").data("target");c.data("easytabs",{}),void 0!==e&&null!==e?c.data("easytabs").ajax=d.attr("href"):e=d.attr("href"),e=e.match(/#([^\?]+)/)[1],b=i.panelContext.find("#"+e),b.length?(b.data("easytabs",{position:b.css("position"),visibility:b.css("visibility")}),b.not(i.panelActiveClass).hide(),j.panels=j.panels.add(b),c.data("easytabs").panel=b):(j.tabs=j.tabs.not(c),"console"in window&&console.warn("Warning: tab without matching panel for selector '#"+e+"' removed from set"))})},j.selectTab=function(a,b){var c=window.location,d=(c.hash.match(/^[^\?]*/)[0],a.parent().data("easytabs").panel),e=a.parent().data("easytabs").ajax;i.collapsible&&!h&&(a.hasClass(i.tabActiveClass)||a.hasClass(i.collapsedClass))?j.toggleTabCollapse(a,d,e,b):a.hasClass(i.tabActiveClass)&&d.hasClass(i.panelActiveClass)?i.cache||s(a,d,e,b):s(a,d,e,b)},j.toggleTabCollapse=function(a,b,c,d){j.panels.stop(!0,!0),n(k,"easytabs:before",[a,b,i])&&(j.tabs.filter("."+i.tabActiveClass).removeClass(i.tabActiveClass).children().removeClass(i.tabActiveClass),a.hasClass(i.collapsedClass)?(!c||i.cache&&a.parent().data("easytabs").cached||(k.trigger("easytabs:ajax:beforeSend",[a,b]),b.load(c,function(c,d,e){a.parent().data("easytabs").cached=!0,k.trigger("easytabs:ajax:complete",[a,b,c,d,e])})),a.parent().removeClass(i.collapsedClass).addClass(i.tabActiveClass).children().removeClass(i.collapsedClass).addClass(i.tabActiveClass),b.addClass(i.panelActiveClass)[f.uncollapse](f.speed,i.transitionUncollapseEasing,function(){k.trigger("easytabs:midTransition",[a,b,i]),"function"==typeof d&&d()})):(a.addClass(i.collapsedClass).parent().addClass(i.collapsedClass),b.removeClass(i.panelActiveClass)[f.collapse](f.speed,i.transitionCollapseEasing,function(){k.trigger("easytabs:midTransition",[a,b,i]),"function"==typeof d&&d()})))},j.matchTab=function(a){return j.tabs.find("[href='"+a+"'],[data-target='"+a+"']").first()},j.matchInPanel=function(a){return a&&j.validId(a)?j.panels.filter(":has("+a+")").first():[]},j.validId=function(a){return a.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/)},j.selectTabFromHashChange=function(){var a,b=window.location.hash.match(/^[^\?]*/)[0],c=j.matchTab(b);i.updateHash&&(c.length?(h=!0,j.selectTab(c)):(a=j.matchInPanel(b),a.length?(b="#"+a.attr("id"),c=j.matchTab(b),h=!0,j.selectTab(c)):d.hasClass(i.tabActiveClass)||i.cycle||(""===b||j.matchTab(g).length||k.closest(b).length)&&(h=!0,j.selectTab(e))))},j.cycleTabs=function(b){i.cycle&&(b%=j.tabs.length,$tab=a(j.tabs[b]).children("a").first(),h=!0,j.selectTab($tab,function(){setTimeout(function(){j.cycleTabs(b+1)},i.cycle)}))},j.publicMethods={select:function(b){var c;0===(c=j.tabs.filter(b)).length?0===(c=j.tabs.find("a[href='"+b+"']")).length&&0===(c=j.tabs.find("a"+b)).length&&0===(c=j.tabs.find("[data-target='"+b+"']")).length&&0===(c=j.tabs.find("a[href$='"+b+"']")).length&&a.error("Tab '"+b+"' does not exist in tab set"):c=c.children("a").first(),j.selectTab(c)}};var n=function(b,c,d){var e=a.Event(c);return b.trigger(e,d),e.result!==!1},o=function(){k.addClass(i.containerClass),j.tabs.parent().addClass(i.tabsClass),j.tabs.addClass(i.tabClass),j.panels.addClass(i.panelClass)},p=function(){var b,c=window.location.hash.match(/^[^\?]*/)[0],f=j.matchTab(c).parent();1===f.length?(d=f,i.cycle=!1):(b=j.matchInPanel(c),b.length?(c="#"+b.attr("id"),d=j.matchTab(c).parent()):(d=j.tabs.parent().find(i.defaultTab),0===d.length&&a.error("The specified default tab ('"+i.defaultTab+"') could not be found in the tab set ('"+i.tabs+"') out of "+j.tabs.length+" tabs."))),e=d.children("a").first(),q(f)},q=function(b){var c,f;i.collapsible&&0===b.length&&i.collapsedByDefault?d.addClass(i.collapsedClass).children().addClass(i.collapsedClass):(c=a(d.data("easytabs").panel),f=d.data("easytabs").ajax,!f||i.cache&&d.data("easytabs").cached||(k.trigger("easytabs:ajax:beforeSend",[e,c]),c.load(f,function(a,b,f){d.data("easytabs").cached=!0,k.trigger("easytabs:ajax:complete",[e,c,a,b,f])})),d.data("easytabs").panel.show().addClass(i.panelActiveClass),d.addClass(i.tabActiveClass).children().addClass(i.tabActiveClass)),k.trigger("easytabs:initialised",[e,c])},r=function(){j.tabs.children("a").bind(i.bind_str,function(b){i.cycle=!1,h=!1,j.selectTab(a(this)),b.preventDefault?b.preventDefault():b.returnValue=!1})},s=function(a,b,c,d){if(j.panels.stop(!0,!0),n(k,"easytabs:before",[a,b,i])){var e,l,m,o,p=j.panels.filter(":visible"),q=b.parent(),r=window.location.hash.match(/^[^\?]*/)[0];i.animate&&(e=t(b),l=p.length?u(p):0,m=e-l),g=r,o=function(){k.trigger("easytabs:midTransition",[a,b,i]),i.animate&&"fadeIn"==i.transitionIn&&0>m&&q.animate({height:q.height()+m},f.halfSpeed).css({"min-height":""}),i.updateHash&&!h?window.location.hash="#"+b.attr("id"):h=!1,b[f.show](f.speed,i.transitionInEasing,function(){q.css({height:"","min-height":""}),k.trigger("easytabs:after",[a,b,i]),"function"==typeof d&&d()})},!c||i.cache&&a.parent().data("easytabs").cached||(k.trigger("easytabs:ajax:beforeSend",[a,b]),b.load(c,function(c,d,e){a.parent().data("easytabs").cached=!0,k.trigger("easytabs:ajax:complete",[a,b,c,d,e])})),i.animate&&"fadeOut"==i.transitionOut&&(m>0?q.animate({height:q.height()+m},f.halfSpeed):q.css({"min-height":q.height()})),j.tabs.filter("."+i.tabActiveClass).removeClass(i.tabActiveClass).children().removeClass(i.tabActiveClass),j.tabs.filter("."+i.collapsedClass).removeClass(i.collapsedClass).children().removeClass(i.collapsedClass),a.parent().addClass(i.tabActiveClass).children().addClass(i.tabActiveClass),j.panels.filter("."+i.panelActiveClass).removeClass(i.panelActiveClass),b.addClass(i.panelActiveClass),p.length?p[f.hide](f.speed,i.transitionOutEasing,o):b[f.uncollapse](f.speed,i.transitionUncollapseEasing,o)}},t=function(b){if(b.data("easytabs")&&b.data("easytabs").lastHeight)return b.data("easytabs").lastHeight;var c,d,e=b.css("display");try{c=a("<div></div>",{position:"absolute",visibility:"hidden",overflow:"hidden"})}catch(f){c=a("<div></div>",{visibility:"hidden",overflow:"hidden"})}return d=b.wrap(c).css({position:"relative",visibility:"hidden",display:"block"}).outerHeight(),b.unwrap(),b.css({position:b.data("easytabs").position,visibility:b.data("easytabs").visibility,display:e}),b.data("easytabs").lastHeight=d,d},u=function(a){var b=a.outerHeight();return a.data("easytabs")?a.data("easytabs").lastHeight=b:a.data("easytabs",{lastHeight:b}),b},v=function(){"function"==typeof a(window).hashchange?a(window).hashchange(function(){j.selectTabFromHashChange()}):a.address&&"function"==typeof a.address.change&&a.address.change(function(){j.selectTabFromHashChange()})},w=function(){var a;i.cycle&&(a=j.tabs.index(d),setTimeout(function(){j.cycleTabs(a+1)},i.cycle))};j.init()},a.fn.easytabs=function(b){var c=arguments;return this.each(function(){var d=a(this),e=d.data("easytabs");return void 0===e&&(e=new a.easytabs(this,b),d.data("easytabs",e)),e.publicMethods[b]?e.publicMethods[b](Array.prototype.slice.call(c,1)):void 0})}}(jQuery),$("#tab-container").easytabs({animate:!1,updateHash:!1,defaultTab:$(".task-area-select").attr("data-area-cid")?"li:nth-child(2)":"li:nth-child(1)"}),function(a){function b(b){if(a("#j-witkey-area-select").size())return d=a("#j-witkey-area-select").attr("data-url").replace("#ID#",b),void(document.location.href=d);b="a"+b;var c=/(a\d+)(?=\w*\.html)/,d=location.href;location.href=d.match(c)?location.href.replace("/xuqiu/","/").replace(c,b).replace("/.html","/"):b?d.match(/((\w+)\.html)/)?location.href.replace("/xuqiu/","/").replace(/((\w+)\.html)/,"$2"+b+".html"):-1!=d.indexOf("?")?location.href.replace("/xuqiu/","/").replace(/\/([$|?])/,"/"+b+".html$1"):-1!=d.indexOf("#")?location.href.replace("/xuqiu/","/").replace(/\/([#])/,"/"+b+".html$1"):location.href.replace("/xuqiu/","/").replace(/\/$/,"/"+b+".html"):location.href}a.fn.areaSelect=function(c){config={},a.extend(config,c),ZDK.template.LEFT_DELIMITER="<#",ZDK.template.RIGHT_DELIMITER="#>";var d=a(this).attr("data-area-pid"),e=a(this).attr("data-area-cid");d||e||(a(this).setProvinceTitle(),a(this).setCityTitle(),a(this).find(".provincelist li a[data-id=]").addClass("selected"));var f=ZDK.template("area-items"),g=a(this).attr("data-area-loaded");g||a(this).loadArea(null,function(b){a(this).find(".citylist").html(f(b)),d&&a(this).find(".citylist li a[data-id="+e+"]").addClass("selected"),a(this).setCityTitle(a(this).find(".citylist li a.selected").html()),a(this).attr("data-area-loaded","1")}),a(this).setProvinceTitle(a(this).find(".provincelist li a.selected").html());var h,i=a(this);a(this).delegate(".provincelist li a","click",function(){var c="6560,6561,7275,7276,6566";if(a(this).hasClass("selected"))return void a("#tab-container").easytabs("select","#tabs1-city");var d=a(this).attr("data-id");if(d){if(c.indexOf(d)>-1)return b(d),!1;i.find(".provincelist li a.selected").removeClass("selected"),a(this).addClass("selected"),i.setProvinceTitle(a(i).find(".provincelist li a.selected").html()),i.setCityTitle(),i.find(".citylist").html("&nbsp;"),h=setTimeout(function(){i.find(".citylist").html("正在加载..."),a("#tab-container").easytabs("select","#tabs1-city")},500),i.loadArea(d,function(b){h&&(clearTimeout(h),a("#tab-container").easytabs("select","#tabs1-city")),a(this).find(".citylist").html(f(b)),e&&a(this).find(".citylist li a[data-id="+e+"]").addClass("selected"),a(this).setCityTitle(a(this).find(".citylist li a.selected").html()),a(this).attr("data-area-loaded","1"),i.attr("data-area-pid",d)})}else b("")}),a(this).delegate(".citylist li a","click",function(){var c=a(this).attr("data-id");b(c?c:i.attr("data-area-pid"))})},a.fn.setProvinceTitle=function(b){"全部"==b&&(b="请选择"),a(this).find(".tab-header-province").html(b||"请选择")},a.fn.setCityTitle=function(b){"全部"==b&&(b="请选择"),a(this).find(".tab-header-city").html(b||"请选择")},a.fn.loadArea=function(b,c){var d=a(this);b=b||d.attr("data-area-pid"),c=c||function(){},a.ajax({url:"http://u."+PPInfo.baseURI+"/ajax/getregion?parent_id="+b,type:"get",dataType:"jsonp",jsonp:"jsoncallback",success:function(a){c.call(d,{cities:a})},failure:function(){ZDK.Tips("加载失败，请重试！","2000","warning")}})}}(jQuery),$(".task-area-select").areaSelect(),function(){function a(){$("#j-trademark-pro-view-num").size()&&$("#j-trademark-pro-view-num").click()}$("#list-join-friendship").click(function(a){a.preventDefault();var b=$(this);ZDK.module.window({title:"友情合作申请",content:"<p><strong>链接文字：</strong>"+(b.attr("data-linkname")||$("ul.list-catalog-category li.selected").text()||$("div.list-catalog-hd h3").text()||"猪八戒网")+"<p><p><strong>链接地址：</strong>http://"+location.host+location.pathname.replace(/[^\/]+\.html/,"")+"</p><p>请先在贵站按照以上方式做好链接，然后将贵站的站点名和站点地址发邮箱至yangnanqiang@zhubajie.com<br />QQ：821745332<p><strong>申请要求：</strong></p><ol><li>未被百度、google等搜索引擎封杀的网站</li><li>pr>=3，且内容健康，流量相近及以上网站</ol>",width:500,mask:!0,cache:!1,zIndex:9e3,close:!1,hasIframe:!0,cancel:null})}),$(".ui-dropdown").ie6hover(),$(".list-category-nav .ui-dropdown .ui-dropdown-menu").each(function(){var a=$(this);a.prev(".ui-dropdown-hd").width()>a.width()&&a.width(a.prev(".ui-dropdown-hd").width()+5),a.children("li").length||a.closest(".ui-dropdown").addClass("ui-dropdown-nochild")}),$("#j-footer-searchwrap li").click(function(){var a,b="http://search."+PPInfo.baseURI,c=$(this),d=c.data("type");"witkey"==d?a=0:"task"==d?a=1:"service"==d&&(a=2),$("#j-footer-searchlabel").text(c.find("a").text()),c.hide().siblings().show(),c.parent().hide(),$("#j-footer-kw").focus();var e=$("#j-footer-searchform")[0];0==a?e.action=b+"/p/":1==a?e.action=b+"/t/":2==a&&(e.action=b+"/s/")}),$("#j-footer-searchwrap").hover(function(){$(this).find(".ui-dropdown-menu").show()},function(){$(this).find(".ui-dropdown-menu").hide()}),a()}();