/**
 * Created by Administrator on 2016/7/4.
 */

var storage=window.localStorage;
function save(){
    if (storage.theme == "1") {
        change(1);
    } else if (storage.theme == "2") {
        change(2);
    } else if (storage.theme == "3") {
        change(3);
    } else {
        change(4);
    }
}
save();
function  change(n){
    var link=document.createElement("link");
    if (n==1){
     link.rel="stylesheet";
     link.type="text/css";
     link.href="../css/red.css";
        storage.theme="1";
    }else if (n==2){
        link.rel="stylesheet";
        link.type="text/css";
        link.href="../css/green.css";
        storage.theme="2";
    }else if(n==3){
        link.rel="stylesheet";
        link.type="text/css";
        link.href="../css/blue.css";
        storage.theme="3";
    }else {
        link.rel="stylesheet";
        link.type="text/css";
        link.href="../css/yellow.css";
        storage.theme="4";
    }
    document.getElementsByTagName("head")[0].appendChild(link);
}


