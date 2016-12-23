var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var orm = require('orm');
var dbs = require('../dbs/dbs')(router);

router.post('/select', dbs.selectData, function(req, res) {
  res.send(res.locals.news);

});

/* 显示手机页面的主页 */
router.get('/news', function(req, res, next) {
  res.render('news');
});

/* 后台页面的主页 */
router.get('/admin', function(req, res, next) {
  res.render('index');
});

// 通过post查询并返回数据
router.post('/update', dbs.updateData, function(req, res) {
  res.send(res.locals.news);
});

// 查询功能的实现
router.post('/insert', dbs.insertData, function(req, res) {
  res.send(res.locals.news);
});

// 通过post查询并返回数据
router.post('/delete', dbs.deleteData, function(req, res) {
  res.send(res.locals.news);
});

module.exports = router;
