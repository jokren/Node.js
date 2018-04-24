//主页  我的资料
var express = require('express');
var http = require("http")
var url = require("url")
var createConnection = require('./sql.js');
var mysql = require("mysql")
var querystring = require("querystring")
var bodyParser = require('body-parser');
var multer = require('multer');
var router = express.Router();


var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : '1000phone'
});

connection.connect();


//查
router.post('/index', function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");
    connection.query('select * from `personaldata` ', function(error, results, fields){
        //console.log(results);
        var str=JSON.stringify(results)
        response.end(str)
    })

})






module.exports = router;