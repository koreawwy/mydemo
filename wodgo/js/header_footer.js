/**
 * Created by code1 on 2016/12/13.
 */
function loadHeader(){
    singleHover(".myservice",".myservice_arr");
    singleHover(".more",".more_arr");
    slideMenu(".myself", ".myself_box");
    slideMenu(".myservice", ".myservice_box");
    slideMenu(".more",".more-box");
    loadlog_reg();
}

function slideMenu(hover,show){
    $(hover).stop().mouseenter(function(){
        $(show).slideDown();
    });
    $(show).stop().mouseenter(function(){
        $(show).show();
    });
    $(hover).stop().mouseleave(function () {
        $(show).hide();
    });
    $(show).stop().mouseleave(function () {
        $(show).slideUp();
    });
}
function singleHover(hover,show){
    $(hover).hover(function(){
        $(show).addClass("arr_trans");
    });
    $(hover).mouseleave(function(){
        $(show).removeClass("arr_trans");
    })
}
function loadFooter(){
    iconShow(".tell1",".tell_hide1");
    iconShow(".tell2",".tell_hide2");
    iconShow(".tell3",".tell_hide3");
}

function iconShow(hover,show){
    $(hover).hover(function(){
        $(show).show();
    },function(){
        $(show).hide();
    })
}
function loadlog_reg(){
    $(".login_h").load("../html/login.html");
    $(".register_h").load("../html/register.html");
}
function loadPage(){
    $("body").prepend("<div class='header'></div>");
    $("body").append("<div class='footer'></div>");
    $(".header").load("header_footer.html .header",function(){loadHeader()});
    $(".footer").load("header_footer.html .footer",function(){loadFooter()});
}
loadPage();