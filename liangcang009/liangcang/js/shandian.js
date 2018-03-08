$(function(){
	$('.osm-bar li').hover(function(){
		$('span',this).stop().css('height','2px');
		$('span',this).animate({
			left:'0',
			width:'60px',
			right:'0'
		},500);
	},function(){
		$('span',this).stop().animate({
			left:'50%',
			width:'0'
		  },200);
	  });
  });
  var w = $("#actionContainer ul li").innerWidth();
var a = 0;
var timer = setInterval(move,2000);
$(".bigarea,.lbbtn").hover(function(){
	$(".lbbtn").css({backgroundColor:"rgba(0,0,0,0.5)"});
},function(){
	$(".lbbtn").css({backgroundColor:"rgba(0,0,0,0)"});
})
function move1(){
	if(a<=0){
			a = 5;
			$("#actionContainer ul").css({"left":-5*w});
	}
	if($("#actionContainer ul").is(":animated")){
		return;
	}
	a--;
	$("#actionContainer ul").animate({"left":-a*w},1000,function(){

		$("#actionOpt a").eq(a).addClass("current").siblings().removeClass();
	});
}
function move(){
	if($("#actionContainer ul").is(":animated")){
		return;
	}
	a++;
	$("#actionContainer ul").animate({"left":-a*w},1000,function(){
		if(a>=5){
			a = 0;
			$("#actionContainer ul").css({"left":0});
		}

		$("#actionOpt a").eq(a).addClass("current").siblings().removeClass();
	});
}
$(".next-btn").click(move);
$(".pre-btn").click(move1);
$("#actionContainer").mouseover(function(){
	
	
	clearInterval(timer);
});
	
$("#actionContainer").mouseout(function(){
	timer = setInterval(move,2000);
})
$("#actionOpt a").hover(function(){clearInterval(timer);},function(){timer = setInterval(move,2000);})
$("#actionOpt a").click(function(){
	var a1 = $(this).index();
	$(this).addClass("current").siblings().removeClass();
	$("#actionContainer ul").css({"left":-a1*w})
})



//主页头部回到顶部跟吸顶效果
$(".backToTopV2").click(function() {
	$("body,html").animate({scrollTop: 0});
});
$(document).scroll(function() {
	var top = $(document).scrollTop();
	if (top > 56) {
		$(".backToTopV2").fadeIn();
		$(".header-top").slideUp();
	} 
	else {
		$(".backToTopV2").fadeOut();
		$(".header-top").slideDown();	
	}
})
  //请求json数据拼接字符串，并在URL传参数id跳转
var url = "http://h6.duchengjiu.top/shop/api_goods.php?cat_id=45&page=1&pagesize=36";
$.get(url, {"page":1},function(obj) {
	var arr = obj.data;
	var h = "";
	var n = "li_1";

	$(".shopListCon").html(h);
	for (var i = 0; i < arr.length; i++)
	{
		if(i%3==0){
			n = "li_1";
		}
		else{
			n="";
		}
		var item = arr[i]
		h += '<div class="item '+n+'" style="position: relative;top: -650px; width:300px; height:350px"><div class="imgCon"><div class="optCon"></div><a href=""><img src="'
		h += item.goods_thumb;
		h += '"  alt="" style="width:100%;height:115%" / ></a><a href="" class="goodsInfo" style="width: 94%; height: 111%;" target="_blank" ><p class="recInfo"><img src="img/931_1504683785.jpg" alt=""/> ZUS</p><p class="money">¥';
		h += item.price;
		h += '</p><p class="tle">';
		h += item.goods_name;
		h += '</p><p class="desc">';
		h += item.goods_desc;
		h += '</p></a></div></div>';
	}

	$(".shopListCon").html(h);
})