//学员请假
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

//增
router.post('/leave', function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");
    var data = ""
    var params;
    request.on("data", function(chunk){
        data += chunk;
    })
    request.on("end", function(){
        params = querystring.parse(data);
        console.log(params);
        connection.query('INSERT INTO `leave` SET ?', {
            name : params.name,
            excuse : params.excuse,
            examine : "通过",
            approve : "通过",
            leavetime : params.leavetime,
            createtime : params.createtime,
            id_number:params.id_number
        }, function(error, results, fields){

        })
    })
})

//查
router.post('/leave1', function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");

        connection.query('select * from `leave` ', function(error, results, fields){
           // console.log(results);
var str=JSON.stringify(results)
           response.end(str)
        })

})


//查2
router.post('/leave2', function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");

    connection.query('select * from `register` ', function(error, results, fields){
       // console.log(results);
        var str=JSON.stringify(results)
        response.end(str)
    })

})


module.exports = router;