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
		h += '<div class="item '+n+'" style="position: relative;top: -650px; width:300px; height:280px"><div class="imgCon"><div class="optCon"></div><a href=""><img src="'
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