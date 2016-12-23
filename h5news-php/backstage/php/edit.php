<html>
<head>
    <meta charset="UTF-8">
    <title>新闻管理系统</title>
</head>
<body>
<center>
    <?php
    include("menu.php");
    require("config.php");

    $link = @mysql_connect(HOST,USERNAME,PASSWORD) or die("数据库连接失败！");
    mysql_select_db(DBNAME,$link);

    $sql = "select *from news where newsid={$_GET['id']}";
    $result = mysql_query($sql,$link);
    mysql_query("set names 'utf8' ");
    //判断是否获取到了要修改的信息
    if($result &&mysql_num_rows($result)>0)
    {
        $news = mysql_fetch_assoc($result);
    }else
    {
        die("没有找到要修改的信息！");
    }

    ?>

    <h3>编辑新闻</h3>
    <form action = "action.php?action=update" method="post">
        <input type="hidden" name="newsid" value="<?php echo $news['newsid']; ?>" />
        <table width="320" border="1">
            <tr>
                <td align="right">标题:</td>
                <td><input type="text" name="newstitle" value="<?php echo $news['newstitle']; ?>" /></td>
            </tr>
            <tr>
                <td align="right">图片:</td>
                <td><input type="text" name="newsimg" value="<?php echo $news['newsimg']; ?>" /></td>
            </tr>
            <tr>
                <td align="right" valign="top">内容:</td>
                <td><textarea cols="25" rows="5" name="newscontent"><?php echo $news['newscontent']; ?></textarea></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" value="编辑"/>&nbsp;&nbsp;
                    <input type="reset" value="重置"/>

                </td>
            </tr>
        </table>
    </form>
</center>
</body>
</html>