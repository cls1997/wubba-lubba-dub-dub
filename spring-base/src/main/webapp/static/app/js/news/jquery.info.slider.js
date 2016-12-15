(function($){
	$.fn.infoSlider = function(options){
		var settings = {
			sliderbox : $(".slider-img"),
			triggerLeft : $(".left-arrow"),
			triggerRight : $(".right-arrow"),
			speed : 800,	
			autoPlay : true,
			siblingsSlider : $(".slider-desc")//,
			//author : $(".slider-author")
		}
		var opts = $.extend(settings,options,{});
		return this.each(function(){
			var self = $(this),
				triggerLeft = opts.triggerLeft,
				triggerRight = opts.triggerRight,
				sliderbox = opts.sliderbox,
				siblingsSlider = opts.siblingsSlider,
				trigger = $(".slider-trigger,.slider-arrow"),
				imgItem = $(".slider-img-item"),
				width = imgItem.eq(0).width(),
				descItem = $(".slider-desc-item"),
				sibwidth = descItem.eq(0).width(),
				//author = opts.author,
				timer;
			self.hover(function(){trigger.show();},function(){trigger.hide();});
			sliderbox.css("left", "-" + width + "px").find("li:last").prependTo(sliderbox);
			siblingsSlider.css("left", "-" + sibwidth + "px").find("li:last").prependTo(siblingsSlider);
			//author.html("供图会员：" + imgItem.eq(1).find("a").attr("author"));
			triggerLeft.click(function(){
				sliderbox.stop(false,true).animate({
					"left": "+=" + width
				},opts.speed,function(){
					$(".slider-img-item:last").prependTo(sliderbox);
					sliderbox.css("left","-" + width +"px");
					//author.html("供图会员：" + $(".slider-img-item").eq(1).find("a").attr("author"));
				});
				siblingsSlider.stop(false,true).animate({
					"left": "+=" + sibwidth
				},opts.speed,function(){
					$(".slider-desc-item:last").prependTo(siblingsSlider);
					siblingsSlider.css("left","-" + sibwidth +"px");
				});
			});
			triggerRight.click(function(){
				sliderbox.stop(false,true).animate({
					"left": "-=" + width
				},opts.speed,function(){
					$(".slider-img-item:first").appendTo(sliderbox);
					sliderbox.css("left","-" + width +"px");
					//author.html("供图会员：" + $(".slider-img-item").eq(1).find("a").attr("author"));
				});	
				siblingsSlider.stop(false,true).animate({
					"left": "-=" + sibwidth
				},opts.speed,function(){
					$(".slider-desc-item:first").appendTo(siblingsSlider);
					siblingsSlider.css("left","-" + sibwidth +"px");
				});
			});
			if(opts.autoPlay){
				timer = setInterval(function(){triggerRight.click();},5000);
				$(".slider-desc-box,.slider-box").hover(function(){clearInterval(timer);},function(){timer = setInterval(function(){triggerRight.click();},5000);});
			}
		});
	}
})(jQuery)