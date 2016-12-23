$(document).ready(function(){
	hoverGoods(".thumbnail");
	clickBrandShow(".brandShow",".showList");
	clickBrandShow(".countryShow",".showBox");
});
function hoverGoods(div){
	$(div).hover(function(){
		$(this).css({"border-color":"#1296db","box-shadow":"2px 2px 15px #bbb"});
	},function(){
		$(this).css({"border-color":"","box-shadow":""});
	});
}
function clickBrandShow(obj1,obj2){
	var show = true;
	$(obj1).click(function(){
		if(show){
			$(obj2).stop().slideDown();
			$(obj1).html("收起");
		}
		else{
			$(obj2).stop().slideUp();
			$(obj1).html("展开");
		}
		show = !show;
	});
}