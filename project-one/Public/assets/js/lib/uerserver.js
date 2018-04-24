// 公用服务器  端口
var express = require('express');
var multer = require('multer');
var mysql = require("mysql")
var bodyParser = require('body-parser');
var router = express.Router();



var app = express();

app.use(express.static(__dirname + '/files'));
app.use(express.static('uploads'));

//注册
app.use('/register',require('./register.js'))
//登录
app.use('/login',require('./login.js'))
// sessions
//app.use('/list',require('./sessions.js'))
//用户名
app.use('/pwd',require('./pwd.js'))
//学员请假
app.use('/',require('./leave.js'))
//编辑个人资料
app.use('/',require('./newindex.js'))
//首页  我的资料
app.use('/',require('./index.js'))

//投诉
app.use('/addInfos', require('./complaint.js'));
//技术
app.use('/jishu', require('./problem.js'));
app.use('/createTab', require('./problem.js'));
//vip
app.use('/vip', require('./vip.js'));
//富文本 座位表
app.use('/savehtml', require('./fuwenben.js'));
app.use('/showhtml', require('./fuwenben.js'));

//周报
app.use('/', require('./weekly.js'));
app.use('/', require('./weekly.js'));
//项目上传
app.use('/', require('./uploads.js'));

app.listen(8888);
console.log("开启服务器");