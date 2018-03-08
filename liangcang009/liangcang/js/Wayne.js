//轮播图
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



//回到顶部
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


//Ajax获取热门商品数据
var url = "http://h6.duchengjiu.top/shop/api_goods.php";
$.get(url, {"page":5,"pagesize":18},function(obj) {
	console.log(obj);
	var arr = obj.data;
	var h = "";
	var n = "first";
	$(".shopListCon").html(h);
	for (var i = 0; i < arr.length; i++)
	{
		if(i%3==0){
			n = "first";
		}
		else{
			n="";
		}
		var item = arr[i]
		h += '<div class="item '+n+'"><div class="imgCon"><div class="optCon"></div><a href="javascript:" target="_blank"><img src="'
		h += item.goods_thumb;
		h += '"/></a><a href="javascript:" class="goodsInfo" target="_blank"><p class="money">¥';
		h += item.price;
		h += '</p><p class="tle">';
		h += item.goods_name;
		h += '</p><p class="desc">';
		h += item.goods_desc;
		h += '</p></a></div><div class="bar"><a class="who" href="javascript:" target="_blank"><img src="img/928.jpg" />Grown Alchemist</a><a class="goodsFavCount" href="javascript:" target="_blank">706</a></div></div>'
	}

	$(".shopListCon").html(h);
})