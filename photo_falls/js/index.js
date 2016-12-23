/**
 * Created by Administrator on 2016/7/9.
 */
//加载文档
$(document).ready(function(){
    //window加载事件
   $(window).on("load",function(){
       imgLocation();
       //网络获取图片
       var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]}; //JSON字符串
       //监听鼠标滚动事件
       window.onscroll = function(){
          //判断加载
           if(scrollSide()){
               $.each(dataImg.data,function(index,value){
                  //创建div
                   var box=$("<div>").addClass("box").appendTo($("#con"));
                   var boxhold=$("<div>").addClass("box-hold").appendTo(box);
                   //添加图片
                  var $img =$('<img>');
                   $img.attr("src","../images/"+$(value).attr("src")).appendTo(boxhold);
               });
               //调用函数
               imgLocation();
           }
       };
       //窗口监测
       window.onresize=function(){
           imgLocation();
       }
   });
});

//判断滚动
function  scrollSide(){
    var box=$(".box");
    //获得滚动到需要加载时的高度
    var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    //获取当前容器的高度
    var documentHeight=$(document).height();
    //鼠标滚动的高度
    var scrollHeight=$(window).scrollTop();
    //判断是否滚动
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;

}
//图片加载位置
function  imgLocation(){
    //盒子对象
    var box =$(".box");
    //获取盒子宽度
    var boxWidth=box.eq(0).width();
    //一排摆放盒子的个数
    var n =Math.floor($(window).width()/boxWidth);
    //定义数组用来承载每个盒子的高度
    var boxArr=[];
    //循环判断
    box.each(function(index,value){
        //获取每个盒子高度
       var boxHeight=box.eq(index).height();
        if(index<n){
            //把盒子高度承载在数组里面
            boxArr[index]=boxHeight;
            $(value).css({
                "position":"absolute",
                "top":"0px",
                "left":boxWidth*index
            })
        }else {
            //获取最小盒子的高度
            var minboxHeight=Math.min.apply(null,boxArr);
            //获取最小盒子的位置
            var minboxIndex= $.inArray(minboxHeight,boxArr);
            //修改其排放的位置
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            //重新计算最小盒子的高度
            boxArr[minboxIndex]+=box.eq(index).height();
        }
    });
}
