<html>
<head>
    <meta charset="UTF-8">
    <title>新闻管理系统</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <link href="./css/bootstrap-responsive.min.css" rel="stylesheet">
    <script type="text/javascript">
        function dodel(newsid)
        {
            if(confirm("确定要删除吗"))
            {
                window.location="action.php?action=del&id="+newsid;
            }
        }
    </script>
</head>
<body>
<div class="container">
    <!--导航栏-->
    <div class="navbar">
        <div class="navbar-inner">
            <div class="container">
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </a> <a class="brand" href="#">新闻后台管理系统</a>
                <div class="nav-collapse">
                    <ul class="nav">
                        <li class="active">
                            <a href="">Dashboard</a>
                        </li>
                        <li>
                            <a href="">Account Settings</a>
                        </li>
                        <li>
                            <a href="">Help</a>
                        </li>
                    </ul>
                    <form class="navbar-search pull-left" action="">
                        <input type="text" class="search-query span2" placeholder="Search" />
                    </form>
                    <ul class="nav pull-right">
                        <li>
                            <a href="">用户名</a>
                        </li>
                        <li>
                            <a href="">登出</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--内容区域-->
    <div class="row">
        <div class="span3">
            <div class="well" style="padding: 8px 0;">
                <ul class="nav nav-list">
                    <li class="nav-header">
                        内容管理
                    </li>
                    <li class="active">
                        <a href="">关于我们</a>
                    </li>
                    <li>
                        <a href="">公司荣誉</a>
                    </li>
                    <li>
                        <a href="">产品展示</a>
                    </li>
                    <li>
                        <a href="">成功案例</a>
                    </li>
                    <li>
                        <a href="">招贤纳士</a>
                    </li>
                    <li>
                        <a href="">联系方式</a>
                    </li>
                    <li class="nav-header">
                        新闻咨询
                    </li>
                    <li>
                        <a href="">公司新闻</a>
                    </li>
                    <li>
                        <a href="">行业新闻</a>
                    </li>
                    <li class="divider">
                    </li>
                    <li class="nav-header">
                        帮助
                    </li>
                    <li>
                        <a href="">关于我们</a>
                    </li>
                </ul>
            </div>
        </div>
        <!--表单部分-->
        <div class="span9">
            <?php
            include("menu.php"); ?>
            <h2>
                浏览新闻
            </h2>
            <table class="table table-bordered table-striped">
                <tr>
                    <th>
                        新闻ID
                    </th>
                    <th>
                        新闻标题
                    </th>
                    <th>
                        新闻图片
                    </th>
                    <th>
                        发布时间
                    </th>
                    <th>
                        新闻内容
                    </th>
                    <th>
                        操作
                    </th>
                </tr>
                <?php
                require("config.php");
                $link = @mysql_connect(HOST,USERNAME,PASSWORD) or die("数据库连接失败!");
                mysql_select_db(DBNAME,$link);
                mysql_query("set character set 'utf8' ");//读库
                mysql_query("set names 'utf8' ");//写库
                //执行查询，并返回结果集
                $sql = "select * from news order by addtime desc";
                $result = mysql_query($sql,$link);

                //解析结果集，并遍历
                while($row = mysql_fetch_assoc($result))
                {
                    echo "<tr>";
                    echo "<td>{$row['newsid']}</td>";
                    echo "<td>{$row['newstitle']}</td>";
                    echo "<td>{$row['newsimg']}</td>";
                    echo "<td>".date($row['addtime'])."</td>";
                    echo "<td>{$row['newscontent']}</td>";
                    echo "<td>
						<a href='javascript:dodel({$row['newsid']})'>删除</a>
						<a href='edit.php?id={$row['newsid']}'>修改</a></td>";
                    echo "</tr>";
                }

                mysql_free_result($result);
                mysql_close($link);
                ?>
            </table>
        </div>
    </div>
</div>
<script src="./js/jquery.min.js"></script>
<script src="./js/bootstrap.min.js"></script>
</body>
</html>

