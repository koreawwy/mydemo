/**
 * Created by Administrator on 2016/8/2.
 */
var express = require('express');
var orm = require('orm');


var dbusername = 'root';
var dbpassword = '';
var dbname = 'phplesson';

// 导入到路由
module.exports = function(router) {

    // 数据库设置
    router.use(orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
        define: function(db, models, next) {

            models.news = db.define("news", {
                id: Number,
                title: String,
                img: String,
                content: String,
                time: Date,
                classfy: ["tuijian", "baijia", "bendi"
                ]
            });
            next();
        }
    }));

    // 数据库操作
    var dbs = {

        // 插入数据
        insertData: function(req, res, next) {
            req.models.news.create({
                title: req.body.title,
                img: req.body.img,
                content: req.body.content,
                time: req.body.time,
                classfy: req.body.classfy
            }, function(err, news) {
                if (err)
                    return console.error('Connection error: ' + err);
                res.locals.news = {
                    'result': "成功插入数据"
                };
                next();
            });
        },

        // 删除数据
        deleteData: function(req, res, next) {
            req.models.news.find({
                id: req.body.id
            }, function(err, news) {
                if (err)
                    return console.error('Connection error: ' + err);

                news[0].remove(function(err) {
                    if (err)
                        return console.error('Connection error: ' + err);
                    res.locals.news = {
                        'result': "数据删除成功"
                    };
                    next();
                });
            });
        },

        // 修改数据
        updateData: function(req, res, next) {
            console.log(req.body);
            req.models.news.find({
                id: req.body.id
            }, function(err, news) {
                if (err)
                    return console.error('Connection error: ' + err);

                news[0].title = req.body.title;
                news[0].img = req.body.img;
                news[0].content = req.body.content;
                news[0].time = req.body.time;

                news[0].save(function(err) {
                    if (err)
                        return console.error('Connection error: ' + err);
                    res.locals.news = {
                        'result': "数据修改成功"
                    };
                    next();
                });
            });
        },
     //查询数据
        selectData: function(req, res, next) {
            var seletejson;

            if (req.body.id == undefined) {
                seletejson = {
                    classfy: req.body.classfy
                };
            } else {
                seletejson = {
                    id: req.body.id
                };
            }

            req.models.news.find(seletejson, function(err, news) {
                if (err)
                    return console.error('Connection error: ' + err);
                console.log(news);
                res.locals.news = news;
                next();
            });
        }
    };

    return dbs;
};
