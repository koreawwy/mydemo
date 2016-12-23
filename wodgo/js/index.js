$(document).ready(function(){
	topFloat("#nav");
	clickTopButton();
	hoverGoods(".thumbnail");
	hoverNav();
	hoverNewSel();
});
function topFloat(div){
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top >= 156){
			$(div).css({"position":"fixed","top":"0","z-index":"1000"});
			$("#scrollTop").css({"display":"inline-block"});
		}
		else{
			$(div).css({"position":"","top":"","z-index":""});
			$("#scrollTop").css({"display":"none"});
		}
	});
}
function clickTopButton(){
	$("#scrollTop").click(function(){
		$("html,body").animate({scrollTop:"0px"});
	});
}

function hoverGoods(div){
	$(div).hover(function(){
		$(this).css({"border-color":"#1296db","box-shadow":"3px 3px 15px #bbb"});
	},function(){
		$(this).css({"border-color":"","box-shadow":""});
	});
}

function hoverNav(){
	$("#navStyle a").hover(function(){
		$(this).css({"font-size":"22px","text-shadow":"2px 2px 3px #222"});
	},function(){
		$(this).css({"font-size":"","text-shadow":""});
	});
}
function hoverNewSel(){
	$(".newSelBox").hover(function(){
		$(this).css({"border-color":"#1296db","box-shadow":"3px 3px 15px #bbb"});
		$(this).children(".newSelTitle").css({"border-color":"#1296db"});
		$(this).children(".btn").stop().slideDown(150);
	},function(){
		$(this).css({"border-color":"","box-shadow":""});
		$(this).children(".newSelTitle").css({"border-color":""});
		$(this).children(".btn").stop().slideUp(150);
	});
}