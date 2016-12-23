/**
 * Created by Administrator on 2016/7/16.
 */

$(function($){
    //广告牌的轮播
   var length,currentIndex= 0,
    interval,hasStarted=false, //是否开始轮播
    t=2000; //轮播时间
    length=$(".slide-img").length;
    //将除了第一张图片隐藏
    $(".slide-img:not(:first)").hide();
    //隐藏向前、向后按钮
    $(".slider-page").hide();
    //鼠标悬停时显示向前、向后按钮，停止滑动；鼠标离开时按钮消失，开始滑动
    $(".slide-img,.pre,.next").hover(function(){
        stop();
        $(".slider-page").show();},function(){
        $(".slider-page").hide();
        start();
    });
    $(".switch").hover(function(e){
       stop();
        var preIndex=$(".switch").filter(".switch-selected").index();
        currentIndex=$(this).index();
        play(preIndex,currentIndex);},function(){
        start();
    });
    $(".pre").unbind("click");
    $(".pre").bind("click", function () {
        pre();
    });
    $(".next").unbind("click");
    $(".next").bind("click", function () {
        next();
    });
    //向前翻页
    function  pre(){
        var preIndex=currentIndex;
        currentIndex=(--currentIndex+length)%length;
        play(preIndex,currentIndex);
    }
    //向后翻页
    function  next(){
        var preIndex=currentIndex;
        currentIndex=++currentIndex%length;
        play(preIndex,currentIndex);
    }
    //preIndex为起始页，currentIndex为翻到的页面
    function play(preIndex,currentIndex){
        $(".slide-img").eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(800);
        $(".switch").removeClass(".switch-selected");
        $(".switch").eq(currentIndex).addClass(".switch-selected");
    }
    //开始轮播
    function  start(){
        if (!hasStarted){
            hasStarted=(true);
            interval=setInterval(next,t);
        }
    }
    //停止轮播
    function stop(){
        clearInterval(interval);
        hasStarted=false;
    }
    //开始轮播
    start();

    //战略合作伙伴的轮播
    //向右滚动
    $(".arrow-right:first").click(function(){
        rightMove();
    });
    //向左滚动
    $(".arrow-left:first").click(function(){
        leftMove();
    });
    //向右移动函数
    function  rightMove(){
        $(".content-s:first").css(
            "left","-164px"
        ).animate({
            "left":-990+"px"
        },2000).show();
    }
    //向左移动函数
    function  leftMove(){
        $(".content-s:first").css(
            "left","0px"
        ).animate({
            "left":0+"px"
        },2000);
    }

    //媒体报道的轮播
    //向右滚动
    $(".arrow-right:last").click(function(){
        rightMovement();
    });
    //向左滚动
    $(".arrow-left:last").click(function(){
        leftMovement();
    });
    //向右移动函数
    function  rightMovement(){
        $(".content-s:last").css(
            "left","-164px"
        ).animate({
            "left":-990+"px"
        },2000).show();
    }
    //向左移动函数
    function  leftMovement(){
        $(".content-s:last").css(
            "left","0px"
        ).animate({
            "left":0+"px"
        },2000);
    }
    //wiki的hover
    $(".start-list").mouseenter(function(){
        $(".start-list").hide();
    });
    $(".start-list").mouseenter(function(){
        $(".move-list").show();
    });
    $(".move-list").mouseleave(function(){
        $(".move-list").hide();
    });
    $(".move-list").mouseleave(function(){
        $(".start-list").show();
    });
    //tab切换
    var tab_ctrl=$(".nav2-ul li");
    var tab_cont=$(".lesson-ul");
    tab_ctrl.each(function(index){
        $(this).hover(function(){
            $(this).addClass("default").siblings().removeClass("default");
            switchTab(index);
        })
    });
    function switchTab(index){
        tab_cont
            .eq(index).addClass("active").siblings().removeClass("active");
    }
    //lesson描述的的下拉
    var lessonHover=$(".lesson-infor");
    var pSlide=$(".slide-p");
    lessonHover.each(function(index){
        $(this).hover(function(){
           pSlideDown(index);
        })
    });
    function pSlideDown(index){
        pSlide.eq(index).slideToggle();
    }
});

