-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-08-02 17:13:46
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
  `id` int(11) NOT NULL COMMENT '自动增长',
  `title` varchar(100) NOT NULL,
  `img` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `time` date NOT NULL,
  `classfy` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `img`, `content`, `time`, `classfy`) VALUES
(91, '生鲜电商们集体变故了，但未来也不是无路可走 ', 'http://t11.baidu.com/it/u=http://7xil86.com2.z0.glb.qiniucdn.com/uploads/images/2016/08/52072870709024705.jpg&fm=36', '配送和品控一直是生鲜电商最头疼问题，为了突出配送时效性，有声音认为通过线下门店的建设，将门店视为城市与原产地之间的中转仓，可尽可能提高配送效率，并降低运输造成的商品损毁。', '2016-08-03', 'tuijian'),
(96, '投中统计：7月份中企IPO显著回升 H股市场表现活跃', 'http://t11.baidu.com/it/u=http://c.hiphotos.baidu.com/news/crop%3D0%2C65%2C610%2C366%3Bw%3D638/sign=b91ad1070b4f78f09444c0b344012663/9e3df8dcd100baa18fe608e84f10b912c9fc2e9e.jpg&fm=36', '根据投中信息旗下金融数据产品CVSource统计显示，2016年7月，共计13家中企成功于A股市场完成IPO，与上两月持平;募资规模55.64亿元，环比下降13.84%。较上两月而言，本月IPO数量持平，募资规模有所回落。', '2016-08-15', 'baijia'),
(97, '餐厅闲时如何利用？把营业时间和用户贴标签试试看！', 'http://t11.baidu.com/it/u=http://g.hiphotos.baidu.com/news/crop%3D0%2C0%2C1280%2C768%3Bw%3D638/sign=0d1ef1143112b31bd3239769bb281a4a/b7fd5266d0160924d58bcf48dc0735fae6cd3432.jpg&fm=36', '可如今，不光这三座“大山”身价倍增，其随着时代应运而生的各项传播费用也逐渐演变成了第四座大山。餐饮行业这门过去人人眼中的“暴利行业”，正朝着“薄利行业”在演变。', '0000-00-00', 'baijia'),
(98, '２０１６全国青少年户外体育活动营地夏令营北京站开营 ', 'http://t10.baidu.com/it/u=http://news.xinhuanet.com/sports/2016-08/02/129199508_14701343889241n.jpg&fm=36', '登山协会和北京市体育局共同承办的“２０１６全国青少年户外体育活动营地夏令营（北京站）”在北京怀柔国家登山训练基地开营，４７５名８－１２岁的青少年将参加本次夏令营活动。', '0000-00-00', 'bendi'),
(99, '北京微妙变动非京籍入学政策，哪个证件最容易忽略', 'http://t10.baidu.com/it/u=http://img.mp.itc.cn/upload/20160802/1f24212c49a94cc0919defffc820a56b_th.png&fm=36', ' 所以2017幼升小家长要充分做好升学“营养”准备，为了更好的帮助2017年幼升小家长提早做好准备，北京幼升小网带您一起来了解一下各区幼升小政策要求。', '2016-08-01', 'bendi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `newstitle` (`title`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=102;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
