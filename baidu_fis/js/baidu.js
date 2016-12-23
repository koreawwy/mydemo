/**
 * Created by Administrator on 2016/7/12.
 */

/**
 * 使用了单例模式
 * 每个类的对象只存在一个，自己保护自己，模块互相通信，提高代码可靠信。
 */
//用户的下拉菜单
var userShow={
  init:function(){
      this.render();
      this.bind();
  },
    render:function(){
        var me=this;
        me.userHov=$(".user-hover");
        me.navUser=$(".nav-user");
    },
    bind:function(){
        var me=this;
        me.userHov.mouseenter(function(){
            me.navUser.show();
        });
        me.navUser.mouseenter(function(){
            me.navUser.show();
        });
        me.userHov.mouseleave(function(){
            me.navUser.hide();
        });
        me.navUser.mouseleave(function(){
            me.navUser.hide();
        });
    }
};
userShow.init();
//设置的下拉菜单
var setShow={
    init:function(){
        this.render();
        this.bind();
    },
    render:function(){
        var me=this;
        me.setHov=$(".setting-hover");
        me.navSet=$(".nav-setting");
    },
    bind:function(){
        var me=this;
        me.setHov.mouseenter(function(){
            me.navSet.show();
        });
        me.navSet.mouseenter(function(){
            me.navSet.show();
        });
        me.setHov.mouseleave(function(){
            me.navSet.hide();
        });
        me.navSet.mouseleave(function(){
            me.navSet.hide();
        });
    }
};
setShow.init();
//更多产品的下拉
var moreShow={
    init:function(){
        this.render();
        this.bind();
    },
    render:function(){
        var me=this;
        me.moreHov=$(".morepro-hover");
        me.morePro=$(".more-product");
    },
    bind:function(){
        var me=this;
        me.moreHov.mouseenter(function(){
            me.morePro.show();
        });
        me.morePro.mouseenter(function(){
            me.morePro.show();
        });
        me.moreHov.mouseleave(function(){
            me.morePro.hide();
        });
        me.morePro.mouseleave(function(){
            me.morePro.hide();
        });
    }
};
moreShow.init();

//换肤的下拉
var changeShow={
  init:function(){
      this.render();
      this.bind();
  },
    render:function(){
        var me=this;
        me.changeHov=$(".changecolor-hover");
        me.hideCol=$(".hide-color");
        me.changeCol= $(".changecolor");
    },
    bind:function(){
        var me=this;
        me.changeHov.click(function(e){
           me.changeCol.slideDown();
            e.stopPropagation();
        });
        //收起按钮的点击事件
        me.hideCol.click(function(){
            me.changeCol.slideUp();
        });
    }
};
changeShow.init();
//背景的预览
var bgShow={
  init:function(){
      this.render();
      this.bind();
  },
    render:function(){
        var me=this;
        me.btnimgl=$(".down-left img");
        me.btnimgr=$(".down-right img");
        me.btnSkin=$(".skin-con img");
        me.cookieSkin= $.cookie("mySkin");
    },
    bind:function(){
        var me=this;
        var i=1;
        me.btnimgl.hover(function(){
            i=$(this).attr("data-skin");
            me.btnimgr.attr("src",'./images/bg'+i+'.jpg');
        });
        me.btnimgl.click(function(){
            i=$(this).attr("data-skin");
            me.btnSkin.attr("src",'./images/bgs'+i+'.jpg');
            $.cookie("mySkin",i,{
                path:"/",
                expires:7
            });//存储皮肤
        });
        if(me.cookieSkin){
           me.btnSkin.attr("src",'./images/bgs'+me.cookieSkin+'.jpg');
        }
    }
};
 bgShow.init();

//tab切换
var tab={
    init:function(){
        this.render();
        this.bind();
    },
    render:function(){
        var me=this;
        me.tabCtrl=$(".li-click li");
        me.tabCont=$(".tabs");
    },
    bind:function(){
        var me=this;
        me.tabCtrl.each(function(index){
            $(this).hover(function(){
                $(this).addClass("default").siblings().removeClass("default");
                switchTab(index);
            })
        });
        function switchTab(index){
            me.tabCont.eq(index).addClass("active").siblings().removeClass("active");
        }
    }
};
tab.init();


