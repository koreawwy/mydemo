/**
 * Created by Administrator on 2016/7/12.
 */
$(document).ready(function() {
//用户的下拉
    $(".user-hover").mouseenter(function () {
        $(".nav-user").show();
    });
    $(".nav-user").mouseenter(function () {
        $(".nav-user").show();
    });
    $(".user-hover").mouseleave(function () {
        $(".nav-user").hide();
    });
    $(".nav-user").mouseleave(function () {
        $(".nav-user").hide();
    });
//设置的下拉
    $(".setting-hover").mouseenter(function () {
        $(".nav-setting").show();
    });
    $(".nav-setting").mouseenter(function () {
        $(".nav-setting").show();
    });
    $(".setting-hover").mouseleave(function () {
        $(".nav-setting").hide();
    });
    $(".nav-setting").mouseleave(function () {
        $(".nav-setting").hide();
    });

//更多产品的下拉
    $(".morepro-hover").mouseenter(function () {
        $(".more-product").show();
    });
    $(".more-product").mouseenter(function () {
        $(".more-product").show();
    });
    $(".morepro-hover").mouseleave(function () {
        $(".more-product").hide();
    });
    $(".more-product").mouseleave(function () {
        $(".more-product").hide();
    });
//换肤的下拉
    $(".changecolor-hover").click(function (e) {
        $(".changecolor").slideDown();
        e.stopPropagation();
        //阻止冒泡
    });
    //收起按钮的点击事件
    $(".hide-color").click(function () {
        $(".changecolor").slideUp();
    });
//背景的预览
    var i=1;
   $(".down-left img").hover(function(){
       i=$(this).attr("data-skin");
      $(".down-right img").attr("src",'../images/bg'+i+'.jpg');
   });
    $(".down-left img").click(function(){
        i=$(this).attr("data-skin");
        $(".skin-con img").attr("src",'../images/bgs'+i+'.jpg');
        $.cookie("mySkin",i,{
            path:"/",
            expires:7
        });//存储皮肤
    });
    var cookie_skin= $.cookie("mySkin");
    //加载上次保存的皮肤
    if(cookie_skin){
        $(".skin-con img").attr("src",'../images/bgs'+cookie_skin+'.jpg');
    }
 //tab切换
  var tab_ctrl=$(".li-click li");
    var tab_cont=$(".tabs");
    tab_ctrl.each(function(index){
        $(this).hover(function(){
            $(this).addClass("default").siblings().removeClass("default");
            switchTab(index);
        })
    });
    function switchTab(index){
        tab_cont.eq(index).addClass("active").siblings().removeClass("active");
    }
});
