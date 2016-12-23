/**
 * Created by Administrator on 2016/8/2.
 */
$(function() {

    // 绑定导航条的点击事件
    $(".nav-btn").bind('click', function() {
        $(this).css('border-bottom','1px solid #fff');
        navClick($(this).attr('value'));
    });
    navClick("tuijian");
});

// 点击对应条目时加载数据
function navClick(tableName) {
    $("#content").empty();
    $.ajax({
        url: '/select',
        type: 'post',
        dataType: "json",
        data: {
            "classfy": tableName
        },
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                var conDiv = $("<div class='index-list'></div>")
                var h5 = $("<h5></h5>");
                h5.text(data[i]['title']);
                conDiv.append(h5);

                var fitDiv = $("<div class='fit'></div>");
                var img =  $("<img>");
                img.attr('src',data[i]['img']);
                var span = $("<span></span>");
                span.text(data[i]['time'].substring(0, 10));
                fitDiv.append(img);
                fitDiv.append(span);
                conDiv.append(fitDiv);

                var contentDiv = $("<div class='list-con'></div>");
                var pCon = $("<p></p>");
                pCon.text(data[i]['content']);
                contentDiv .append(pCon);
                conDiv.append(contentDiv);
                $("#content").append(conDiv);
            }
        }
    });
}
