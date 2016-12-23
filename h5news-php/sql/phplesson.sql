-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-07-25 10:49:53
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phplesson`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(11) NOT NULL COMMENT '自动增长',
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(90, 'baijia', 'http://t11.baidu.com/it/u=http://e.hiphotos.baidu.com/news/w%3D638/sign=3966008cef1190ef01fb91dcf61a9df7/b2de9c82d158ccbfd0d2655b11d8bc3eb1354161.jpg&fm=36', '欢瑞世纪借壳估值30亿，杨幂错失一夜暴富的时机？', '0000-00-00'),
(91, 'baijia', 'http://t11.baidu.com/it/u=http://f.hiphotos.baidu.com/news/crop%3D1%2C0%2C598%2C359%3Bw%3D638/sign=243b84655182b2b7b3d063840c9ce7df/fc1f4134970a304ea060bc9bd9c8a786c9175c14.jpg&fm=36', '美国上半年风投放缓，这对大数据行业意味着什么？', '0000-00-00'),
(92, 'bendi', 'http://t12.baidu.com/it/u=http://c.cnfolimg.com/20160725/32/1637964454371349660.jpg&fm=36', '1469427568', '0000-00-00'),
(93, 'bendi', 'http://t11.baidu.com/it/u=http://upload.art.ifeng.com/2016/0725/1469425060947.jpg&fm=36', '1469427606', '0000-00-00'),
(96, 'tuijian', 'http://t11.baidu.com/it/u=http://i0.hexunimg.cn/2016-07-25/185138172.jpg&fm=36', 'Facebook未来十年规划 扎克伯格专访透露了这7件事', '0000-00-00'),
(97, 'tuijian', 'http://t10.baidu.com/it/u=http://cms-bucket.nosdn.127.net/59595114f1b341d1b4007216b5080fb620160725154303.jpeg&fm=36', '中国和东盟国家外交部长关于全面有效落实《南海各方行为宣言》的联合声明。', '0000-00-00'),
(98, 'tuijian', 'http://t12.baidu.com/it/u=http://img.mp.itc.cn/upload/20160725/318531d637324c189670e745035c6218_th.jpg&fm=36', '重磅!中国人工智能/机器人/无人机创业公司TOP100', '0000-00-00'),
(99, 'baijia', 'http://g.hiphotos.baidu.com/news/crop%3D84%2C8%2C425%2C289/sign=bba92285992397ddc236c24464ba869b/8ad4b31c8701a18b5947092d962f07082838fe20.jpg', '国际冠军杯-曼联VS曼城比赛因天气原因取消', '0000-00-00'),
(100, 'baijia', 'http://t11.baidu.com/it/u=http://h.hiphotos.baidu.com/news/crop%3D0%2C80%2C640%2C384%3Bw%3D638/sign=057b6252998fa0ec6b883e4d1ba775d6/1f178a82b9014a9091a8e6dca1773912b31bee39.jpg&fm=36', '旅游购物创业公司的冰火两重天：盛世之下，抱团取暖', '0000-00-00'),
(101, 'bendi', 'http://t12.baidu.com/it/u=http://www.chinanews.com/2016/0725/201672514501.jpg&fm=36', '曼联VS曼城北京站比赛临时取消 称因天气问题 ', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`),
  ADD KEY `newstitle` (`newstitle`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=104;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
