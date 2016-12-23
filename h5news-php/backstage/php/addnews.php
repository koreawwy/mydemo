<html>
<head>
    <meta charset="utf-8">
    <title>新闻管理系统</title>
</head>
<body>
<center>
    <?php
    include("menu.php"); ?>

    <h3>发布新闻</h3>
    <form action = "action.php?action=addnews" method="post">
        <table width="320" border="1">
            <tr>
                <td align="right">标题:</td>
                <td><input type="text" name="newstitle"/></td>
            </tr>
            <tr>
                <td align="right">图片:</td>
                <td><input type="text" name="newsimg"/></td>
            </tr>
            <tr>
                <td align="right" valign="top">内容:</td>
                <td><textarea cols="25" rows="5" name="newscontent"></textarea></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" value="添加"/>&nbsp;&nbsp;
                    <input type="reset" value="重置"/>

                </td>
            </tr>
        </table>
    </form>
</center>
</body>
</html>
