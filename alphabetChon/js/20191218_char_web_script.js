$(function(){
	$(".category").hover(function(){
		$(".submenu li").stop().slideDown();
	},function(){
		$(".submenu li").stop().slideUp();
	});
});

$(function(){
	var w=1920;
	var current=0;
	var moving=false;
	var total=$(".slide").length;
	var distance=new Array(0, -1920, -3840);
	var id=setInterval(rightMoving, 4000);

	$(".circle div").eq(current).addClass("active");

	$(".button a, .circle a").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(rightMoving, 4000);
		}
	);

	$(".circle a").click(function(){
		if(!moving){
			moving=true;
			var n=$(this).parent().index();
			var x=distance[n];
			current=n;
			$(".slide_li").stop().animate({left:x+"px"}, 400, function(){
				moving=false;
			});
			$(".circle div").removeClass("active");
			$(".circle div").eq(current).addClass("active");
		}
	});

	$(".btn_left a").click(function(){
		leftMoving();
	});
	$(".btn_right a").click(function(){
		rightMoving();
	});

	function leftMoving(){
		if(!moving){
			moving=true;
			$(".slide_li div:last").clone().prependTo(".slide_li");
            $(".slide_li").stop().animate({left:"-="+w+"px"}, 0);
			
			$(".slide_li").stop().animate({left:"+="+w+"px"}, 400, function(){
				moving=false;
				$(".slide_li div:last").remove();
				
				if(current > 0){
					current--;
				} else{
					current=total-1;
				}
				
				$(".circle div").removeClass("active");
				$(".circle div").eq(current).addClass("active");

				var arrayData=distance.shift();
				distance.push(arrayData);
				
			});
		}
	}
	function rightMoving(){
		if(!moving){
			moving=true;
			$(".slide_li div:first").clone().appendTo(".slide_li");
			
			$(".slide_li").stop().animate({left:"-="+w+"px"}, 600, function(){
				moving=false;
				$(".slide_li").css({left:"+="+w+"px"});
				$(".slide_li div:first").remove();
				
				if(current < total-1){
					current++;
				} else{
					current=0;
				}
				
				$(".circle div").removeClass("active");
				$(".circle div").eq(current).addClass("active");

				var arrayData=distance.pop();
				distance.unshift(arrayData);
				
			});
		}
	}
})

$(function(){
	
	$(".slide2_img1").show();
	$(".slide2_img2, .slide2_img3").hide();
	
	$(".ban2_box1").click(function(){
		$(".slide2_img1").fadeIn();
		$(".slide2_img2, .slide2_img3").fadeOut();
	})
	$(".ban2_box2").click(function(){
		$(".slide2_img2").fadeIn();
		$(".slide2_img1, .slide2_img3").fadeOut();
	})
	$(".ban2_box3").click(function(){
		$(".slide2_img3").fadeIn();
		$(".slide2_img1, .slide2_img2").fadeOut();
	})
});