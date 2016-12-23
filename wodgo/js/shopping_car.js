/**
 * Created by code1 on 2016/12/13.
 */
$(document).ready(function() {
    buyPro();
    upCount();
    delClick();
});
function buyPro(){
  $(".newbtn").click(function(){
      $("#shop_con").hide();
      $("#shop_third").hide();
      $(".shopping").show();
  })
}
function upCount(){
    var count = $(".amount-num input").val();
       $(".leftbtn").click(function(){
           if(count ==1){
               count=1;
           }else{
               count--;
           }
           $(".amount-num input").attr("value",count);
       });
       $(".rightbtn").click(function(){
           count++;
           $(".amount-num input").attr("value",count);
       });

}
function delClick(){
    $(".img1").click(function(){
        $(".checkbtn").slideDown();
    });
    $(".checkbtn").click(function(){
        $(".shopping_second").hide();
    });
    $(".img1").blur(function(){
        $(".checkbtn").slideUp();
    })
}
