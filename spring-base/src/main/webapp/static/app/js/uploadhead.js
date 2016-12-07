
    //文件浏览框事件触发
    $("#file_data").change(function(){ 
        $('#tips').hide(); //隐藏提示层
        $('#loading_gif').show(); //显示菊花
        $('#file_data_btn').hide(); //隐藏上传按钮
        // $('#upload_form').submit(); //测试用，须注释152-166行
        $('#upload_form').ajaxSubmit({ //不要提交按钮，由事件触发
            dataType:'json',
            //上传成功，服务器返回图片路径等信息 
            success: function(json) {   
                $('#loading_gif').hide();
                if(json.status==1){
                    preview(json);
                }else if(json.status==0){
                    $('#loading_gif').hide();
                    $('#file_data_btn').show();
                    $('#tips').addClass("error").html(json.info+json.data).show();
                    $('#upload_form').resetForm();
                }
            }
        });
        return false; //阻止页面刷新
    });

    $("#save_btn_wrap .btn_w").click(function(){
        cancelPreview();
    });

    $("#save_form").ajaxForm({ //提交按钮按下才触发
        dataType:'json',
        success: function(json) {   
            if(json.status==1){
                cancelPreview();
                $('#tips').addClass("correct").html(json.info+'正在刷新...').show();
                setTimeout(function(){
                    location.reload();
                },1000);
            }else if(json.status==0){
                $('#tips').addClass("error").html(json.info).show();
            }
        }
    });
    //预览图片，用户未保存
    function preview(json){
        minWidth = minHeight = 150; //定义头像的最小宽高，全局变量
        $('#save_btn_wrap').show();  //显示保存按钮
        $('#org_pic').html('<img src="'+json.data.src+'?'+new Date().getTime()+'" />'); //插入原图，已经裁剪成最大400*400，这里图片不能用强制缩放，否则出错！若要缩放，需要加imgAreaSelect控件的真实宽度和高度那个属性
        $('input[name=picname]').val(json.data.picname);
        $('#org_pic img').css({'display':'block','min-width':minWidth+'px','min-height':minHeight+'px'}); //防止用户上传的图片尺寸太小而不出现imgAreaSelect的框
        $('#preview_pic').attr('src',json.data.src);
        //预览小图区域的宽高
        var w = $(".head-preview").width();
        var h = $(".head-preview").height();
        imgrs = $('#org_pic img').imgAreaSelect({ //定义区域选择控件
            x1: 0, 
            y1: 0,
            x2: minWidth, 
            y2: minHeight, 
            handles: true,
            onInit:function(img,selection){
                previewSmall(img,selection,w,h,json.data.width,json.data.height);
            },
            onSelectChange:function(img,selection){
                previewSmall(img,selection,w,h,json.data.width,json.data.height);//json.data.width为php处理后的图片实际的尺寸
            },
            onSelectEnd:onSelectEndCallback,
            aspectRatio: '1:1',
            instance: true,
            parent:$('#org_pic')
        });
    }

    //右边的小图预览
    function previewSmall(img,selection,visWidth,visHeight,relWidth,relHeight){
        onSelectEndCallback(img,selection);//默认就要将数值记录起来，防止用户不选择区域直接提交
        var scaleX = visWidth / (selection.width || 1); 
        var scaleY = visHeight / (selection.height || 1); 
        $('#preview_pic').css({ 
            width: Math.round(scaleX * relWidth) + 'px',  
            height: Math.round(scaleY * relHeight) + 'px', 
            marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px', 
            marginTop: '-' + Math.round(scaleY * selection.y1) + 'px' 
        }); 
    }
    //选择结束的回调函数
    function onSelectEndCallback(img,selection){
        $('input[name=x1]').val(selection.x1);
        $('input[name=y1]').val(selection.y1);
        $('input[name=w]').val(selection.width); 
        $('input[name=h]').val(selection.height);
        $('input[name=minw]').val(minWidth);
        $('input[name=minh]').val(minHeight);
    }
    //取消预览，不保存
    function cancelPreview(){
        $('#tips').show(); //显示提示层
        $('#file_data_btn').show(); //显示上传按钮
        $('#save_btn_wrap').hide(); //隐藏保存按钮
        $('#org_pic').attr('src',$('#org_pic').attr('data-default'));
        $('#preview_pic').attr('src',$('#preview_pic').attr('data-default'));
        $('#org_pic').html(''); //删除原图区域内容(包含选择控件)
        $('#preview_pic').removeAttr('style');
        if(typeof(imgrs)!=='undefined'){ //重置区域选择控件
            imgrs.setOptions({ remove:true });
            imgrs.update();
        }
        $('#upload_form').get(0).reset(); //重置表单
    }