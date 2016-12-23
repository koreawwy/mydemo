<?php
require("config.php");
//连接MYSQL，并选择数据库
$link=@mysql_connect(HOST,USERNAME,PASSWORD) or die("数据库连接失败！");
mysql_select_db(DBNAME,$link);
//设置数据的字符集utf-8
mysql_query("set names 'utf8' ");

//根据需要action值，来判断所属操作，执行对应的代码
switch($_GET["action"])
{
    case "addnews": //执行添加操作
        //1.获取要添加的信息，并补充其他信息
        $title = $_POST['newstitle'];
        $img = $_POST['newsimg'];
        $content = $_POST['newscontent'];
        $addtime = time();
        //添加操作
        $sql = "insert into news values(null,'{$title}','{$img}','{$content}','{$addtime}')";
        mysql_query($sql,$link);
        //判断是否成功
        $newsid=mysql_insert_id($link);//获取刚刚添加信息的自增id号值
        if($newsid>0)
        {
            echo "<h3>新闻信息添加成功！</h3>";
        }else
        {
            echo "<h3>新闻信息添加失败！</h3>";
        }
        echo "<a href='javascript:window.history.back();'>返回</a>&nbsp;&nbsp;";
        echo "<a href='index.php'>浏览新闻</a>";
        break;
    case "del": //执行删除操作
        $newsid=$_GET['id'];
        //删除操作
        $sql = "delete from news where newsid={$newsid}";
        mysql_query($sql,$link);

        //自动跳转到浏览新闻页面
        header("Location:index.php");
        break;
    case "update": //执行添加操作
        //获取要修改的信息
        $title = $_POST['newstitle'];
        $img = $_POST['newsimg'];
        $content = $_POST['newscontent'];
        $newsid = $_POST['newsid'];

        //修改操作
        $sql = "update news set newstitle='{$title}',newsimg='{$img}',newscontent='{$content}' where newsid = {$newsid} ";

        mysql_query($sql,$link);
        //跳转回浏览界面
        header("Location:index.php");
        break;
}
//关闭数据库连接
mysql_close($link);
?>


