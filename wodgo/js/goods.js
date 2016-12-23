$(document).ready(function(){
	hoverImgBox(".imgBox",".readImg");
	readImg(".imgBox",".readImg");
});
/*商品放大镜内移动*/
function readImg(obj,div){
	$(obj).mousemove(function(e){
		var left = $(obj).offset().left;
		var top = $(obj).offset().top;
		$(div).scrollLeft(e.pageX-left).scrollTop(e.pageY-top);
	});
}
/*商品放大镜出现与隐藏*/
function hoverImgBox(obj,div){
	$(obj).hover(function(){
		$(div).css({"display":"block"});
	},function(){
		$(div).css({"display":"none"});
	});
}
