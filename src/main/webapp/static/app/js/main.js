var app = function() {
	// 窗口信息提示
    var dialogTime;
    var openW = function(options,callback) {
        var _deafult = {
            fixed: true,
            title: "提示信息",
            okValue: '确定',
            cancelValue: '取消',
            duration: 0
        };
        var opts = $.extend({},_deafult,options);
        var modal = opts.modal;
        var duration = opts.duration;
        // 如果窗口存在新移除之前的
        if (dialog.getCurrent()) {
            dialog.getCurrent().close().remove();
        }
        dialog(opts).show();
        // 窗口持续时间
        if (duration) {
            clearTimeout(dialogTime);
            dialogTime = setTimeout(function() {
                // 关闭提示窗口
                if (dialog.getCurrent()) {
                    dialog.getCurrent().close().remove();
                }
            },duration);
        }
        if (callback) {
            callback(dialog);
        };   
    };
    var previewImg = function() {
        $("input[type='file'].abs-out").each(function() {
            var type = $(this).attr("data-type");
            var width = $(this).attr("data-width") || 30;
            var value = $(this).data('value');
            if (type == "img") {
                // for IE9+
                $(this).attr("accept","image/*");
            }
            if (value && value.length > 1) {
                $(this).parent().after("<em class='muted J_file'></em>");
                if (type == "img") {
                    $(this).parent().siblings(".J_file").html("&nbsp;<a href="+value+" target='_blank'><img style='width:"+width+"px' src="+value+"></a>");
                } else {
                    $(this).parent().siblings(".J_file").html("&nbsp;"+value+"&nbsp;");
                }
            }
            $(this).change(function() {
                var file = $(this).val();
                if (file == "") {
                    return false;
                }
                $(this).parent().parent().find(".J_file").remove();
                $(this).parent().after("<em class='muted J_file'></em>");
                // html5图片预览
                if (typeof Worker !== "undefined" && type == "img" && file != "") {
                    var objUrl = getObjectURL(this.files[0]) ;
                    $(this).parent().siblings(".J_file").html("&nbsp;<a href="+objUrl+" target='_blank'><img style='width:"+width+"px' src="+objUrl+"></a>");
                    return false;
                }
                $(this).parent().siblings(".J_file").html("&nbsp;"+file+"&nbsp;");
            });
        });

        /**
         * 建立一個可存取到該file的url
         * PS: 瀏覽器必須支援HTML5 File API
         */
        function getObjectURL(file) {
            var url = null ; 
            if (window.createObjectURL!=undefined) { // basic
                url = window.createObjectURL(file) ;
            } else if (window.URL!=undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file) ;
            } else if (window.webkitURL!=undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file) ;
            }
            return url ;
        }
    };
    // 表单验证
    var validatebox = function(options) {
        var _deafult = {
            validTip: '正在保存...',
            validSuccess: function(ele,msg) {
                $(ele).parents(".input-box").removeClass("error").find(".tip").text("");
            },
            validError: function(ele,msg) {
                $(ele).parents(".input-box").addClass("error").find(".tip").text(msg);
            },
            ajaxSuccess: function(data) {
                if (data.status == 1) {
                    openW({
                        content: data.info,
                        duration: 2000,
                        onclose: function() {
                            if (reload) {
                                location.reload();
                            }
                        }
                    });
                } else {
                    openW({
                        content: data.info,
                        duration: 2000
                    });
                }
            }
        };
        var opts = $.extend({},_deafult,options);
        var rules = opts.rules || 0;
        var $formId = $(opts.formId);
        var validSuccess = opts.validSuccess;
        var validError = opts.validError;
        var validTip = opts.validTip;
        var ajaxSuccess = opts.ajaxSuccess;
        var beforeSubmit = opts.beforeSubmit;
        var reload = opts.reload || 0;
        if ($formId.find(".tip").length < 1) {
            $formId.find(".input-box").append("<span class='tip'></span>");
        }
        $.validate = {
            validator: function(type, value) {
                var rules = {
                    noEmpty: {
                        isValid: function(value) {
                            return value == ""? false : true;
                        },
                        message: "不能为空"
                    },
                    email: {
                        isValid: function(value) {
                            return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
                        },
                        message: "请输入有效的邮箱地址"
                    },
                    number:  {
                       isValid: function(value) {
                            return /^\d+$/.test(value);
                        },
                        message: '请输入数字'
                    },
                    account: {
                        isValid: function(value) {
                            return /^[a-zA-Z][a-zA-Z0-9_]{4,18}$/.test(value);
                        },
                        message: "请输入5-18位字符，账号需以已招字母开头"
                    },
                    same: {
                        isValid: function(value) {
                            var valOld = $(".J_old").val();
                            return  value == valOld? true :false;
                        },
                        message: "两次密码不一致"
                    },
                    mobile: {
                        isValid: function(value) {
                            return /^\d{11}$/.test(value);
                        },
                        message: "请输入有效的手机号码"
                    },
                    idCard: {
                        isValid: function(value) {
                            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
                        },
                        message: "请输入有效的身份证号码"
                    }
                };
                return {
                    isValid: rules[type].isValid(value),
                    message: rules[type].message
                }
            },
            handle: function(type,element,msg) {
                var validator = this.validator;
                $input = $formId.find(element);
                $input.on("blur focus", function(e) {
                    var value = $(this).val();
                    var msgResult = msg || validator(type, value).message;
                    if (!validator(type, value).isValid) {
                        validError($(this), msgResult);
                    } else {
                        validSuccess($(this));
                    }
                });
            },
            onSubmit: function() {
                $formId.ajaxForm({
                    beforeSubmit: function() {
                        var isRight = true;
                        $formId.find(".ipt").each(function() {
                            if ($(this).val().length == 0 || $(this).parents(".input-box").hasClass("error")) {
                                $(this).focus();
                                isRight = false;
                                return false;
                            }
                        });
                        if (!isRight) {
                            return false;
                        }
                        if (beforeSubmit) {
                           if (beforeSubmit() == false) {
                                return false;
                            }
                        }
                        openW({
                            title: validTip
                        });
                    },
                    success: function(data) {
                        ajaxSuccess(data);
                    },
                    dataType: 'json'
                });
            }
        };
        for (var k in rules) {
            if (typeof rules[k] === "object") {
                $.validate.handle(""+k+"", rules[k].element, rules[k].message);
            } else {
                $.validate.handle(""+k+"",rules[k]);
            }
        }
        $.validate.onSubmit();
    };
    var getDate = function() {
        var currentDate = new Date(),
            year = currentDate.getFullYear(),
            month = currentDate.getMonth() + 1,
            day = currentDate.getDay(),
            date = currentDate.getDate();
        var currentDay = "日一二三四五六".charAt(day);
        var date = document.getElementById("topDate");
        if (date) {
            date.innerHTML = year + '年' + month + '月' + date + '日' + '&nbsp;&nbsp;星期' + currentDay;
        }
    };
/*
====================================================================
                ####业务处理####
====================================================================
*/

    // 导航菜单切换状态
    var menu = function(ele, n) {
        var domain = window.location.href;
        var ele = ele || ".header .navbar";
        var n = n || 0;
        $(ele).find("li").each(function() {
            var index = $(this).index();
            var href = $(this).find("a").attr("href");
            if (index+1 != n) {
                if (domain.indexOf(href) > -1) {
                    $(this).addClass("active");
                    return false;
                }
            }
        });
    };

    // 搜索框下拉
    var searchDrop = function() {
        $(".search-type li").on("click", function() {
            var defaText = $("#J_type_label").text();
            var txt = $(this).text();
            var type = $(this).attr("data-type");
            var currType = $("#J_type_label").attr("data-type");
            $("#search_type").val(type);
            $(".search-type").hide();
            $(".search-query").focus();
            $("#J_type_label").text(txt).attr("data-type", type);
            $(this).text(defaText).attr("data-type", currType);;
        });
        $(".ui-header-search .ui-dropdown").hover(function() {
            $(this).find(".search-type").show();
        }, function() {
            $(this).find(".search-type").hide();
        });
    } 
    // 首页轮播
    var flexslider = function() {
        require.async("flexslider", function() {
            $(".flexslider").flexslider({
                animation: "fade",
                directionNav: false
            });
        });
    };

    // 图片懒加载
    var lazyload = function() {
        require.async("lazyload", function() {
            $(".lazyload").lazyload({
                threshold : 200,  
                effect : "fadeIn",
                failure_limit : 10,
                placeholder: "../../static/app/images/filter.png"
            });
        });
    }
    /**
     * 剩余时间
     * @param  {[type]} s [服务器时间]
     * @param  {[type]} e [结束时间]
     */
    var countDown = function(s, e){
        var remainTime = e - s;
        timer = setInterval(countDown,1000);
        function countDown() {
            if (remainTime > 0) {
                var _D = Math.floor(remainTime / 3600 / 24);
                var _H = Math.floor(remainTime / 3600 % 24);
                var _M = Math.floor(remainTime / 60%60);
                var _S = Math.floor(remainTime % 60); 
                $("#winning_task").text("剩余" + _D + "天" + _H + "小时" + _M + "分" + _S + "秒");
                 --remainTime; 
            }else{
                $("#winning_task").text("已结束");
                clearInterval(timer);
            }
        }
        function fix(t) {
          if (t < 10) {
            return '0'+t;
          } else {
            return t;
          }
        }   
    };
    /**
     * 采用正则表达式获取地址栏参数
     * @param  {[type]} name [参数名称]
     * @return {[type]}      [description]
     */
    var getUrlParamImpl = function(name) {
         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
         var r = window.location.search.substr(1).match(reg);
         if(r!=null)return  unescape(r[2]); return null;
    };
    var getDateTime = function(date, n) {
        var dd = new Date(date);
        var fix = function(d) {
            if (d < 10) {
                d = "0" +d;
            }
            return d;
        }
        dd.setDate(dd.getDate() + n);
        var y = dd.getFullYear();
        var m = fix(dd.getMonth() + 1);
        var d = fix(dd.getDate());
        return y + "-" + m + "-" + d;
    }
    var region = function(optios) {
        var _default = {
            selector: '.J_region'
        };
        var opts = $.extend({}, _default, optios);
        var url = opts.url;
        var selector = opts.selector;
        var regionId = opts.regionId;
        var getRegion = function(self, rid, callback) {
            var rid = rid;
            $(self).html("").append('<option value="-1">请选择</option>');
            $.get(url+rid, function(data) {
                var $optios = [];
                if (data.status == 1) {
                    var dataList = data.data;
                    $.each(dataList, function(i, item) {
                        $optios.push('<option value='+item.rid+'>'+item.name+'</option>');
                    });
                    $(self).append($optios.join(","));
                    callback && callback();
                }
            });
        };
        if (regionId) {
            var regionShenId = regionId.substr(0,2) + "0000";
            var regionShiId = regionId.substr(0,4) + "00";
            $(selector + ":eq(0)").val(regionShenId);
            getRegion(selector + ":eq(1)", regionShenId, function() {
                $(selector + ":eq(1)").val(regionShiId);
                getRegion(selector + ":eq(2)", regionShiId, function() {
                    $(selector + ":eq(2)").val(regionId);
                });
            });
        }
        $(selector + ":eq(0)").change(function() {
            getRegion(selector + ":eq(1)", this.value);
            $(selector + ":eq(2)").html("").append('<option value="-1">请选择</option>');
        });
        $(selector + ":eq(1)").change(function() {
            getRegion(selector + ":eq(2)", this.value);
        });
    };
    return {
    	init: function() {
    		previewImg();
            searchDrop();
            // 显示日期
            getDate();
    	},
    	menu: menu,
	    slide: flexslider,
	    openW: openW,
	    previewImg: previewImg,
	    validatebox: validatebox,
	    searchDrop: searchDrop,
	    lazyload: lazyload,
	    countDown: countDown,
        getUrlParam: getUrlParamImpl,
        getDateTime: getDateTime,
        region: region
    }
}();
app.init();