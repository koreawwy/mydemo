/**
 * Created by code1 on 2016/12/15.
 */
$(document).ready(function() {
    $("#myorder").load("myorder.html #order",delpro);
    orderClick();
    cheapClick();
    userClick();
    useridClick();
    addClick();
    afterClick();
});
function orderClick(){
    $(".left_ul1 li:first").click(function(){
        $("#myorder").load("../html/myorder.html #order",delpro);
    })
}
function cheapClick(){
    $(".left_ul1 li:last").click(function(){
        $("#myorder").load("../html/myorder.html #cheap-item");
    })
}
function userClick(){
    $(".left_ul2 li:first").click(function(){
        $("#myorder").load("../html/myorder.html #user_security");
    })
}
function useridClick(){
    $(".left_ul2 li:last").click(function(){
        $("#myorder").load("../html/myorder.html #userid");
    })
}
function addClick(){
    $(".left_ul3 li:first").click(function(){
        $("#myorder").load("../html/myorder.html #address",delClick);
    })
}
function afterClick(){
    $(".left_ul3 li:last").click(function(){
        $("#myorder").load("../html/myorder.html #buyafter");
    })
}
function delClick(){
    $(".delbtn").click(function(){
         $(".checkbtn").slideDown();
    });
    $(".checkbtn").click(function(){
        $(".oldadd").hide();
    });
    $(".delbtn").blur(function(){
        $(".checkbtn").slideUp();
    })
}
function delpro(){
    $(".delpro").click(function(){
        $(".delpro_con").slideDown();
    });
    $(".delpro_con").click(function(){
        $(".pros").hide();
    });
    $(".delpro").blur(function(){
        $(".delpro_con").slideUp();
    })
}
function fileLoad(fileDom,imgid,btnid){
    var img = $(imgid);
    var file = fileDom.files[0];
    var imageType =/^image\//;
    if(window.FileReader){
        var reader=new FileReader;
    }else{
        alert("您的浏览器不支持图片上传功能，请更换浏览器");
    }
    if(!imageType.test(file.type)){
        alert("请选择图片！");
        return;
    }
    reader.onload=function(e){
        $(btnid).parent().show();
        img.show();
        img.attr({"src":e.target.result})
    };
    reader.readAsDataURL(file);
    delimg(btnid,imgid);
}
function delimg(btnid,imgid){
    $(btnid).click(function(){
        $(imgid).hide();
        $(btnid).parent().hide();
    })
}