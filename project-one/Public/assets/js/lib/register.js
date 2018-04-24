//注册
var express = require('express');
var http=require("http")
var url=require("url")
var createConnection = require('./sql.js');
var mysql=require("mysql")
var querystring=require("querystring")
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


router.post('/',function(request,response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");
    var data = ""
    var params;
    request.on("data", function(chunk) {
        data += chunk;
    })
    request.on("end", function() {
        params = querystring.parse(data);
        console.log(params)
        var date=new Date()
        var year=date.getFullYear()
        var month=date.getMonth()+1
        var day=date.getDate()
		console.log(year, month, day);
		connection.query(`SELECT * FROM register where id_number = ${params.id_number}` , function(error, results, fields){
			console.log(results);
			if(results.length==0){
				connection.query('INSERT INTO `register` SET ?', {
					id_number : params.id_number,
					tel : params.tel,
					pwd : params.pwd,
					name:params.u_name,
					qq:params.u_qq,
					stu_time:String(year)+month+day
				}, function(error, results, fields){
					// if(error) throw error;
					response.end("创建成功")
					console.log("创建成功");
				})
            }else {
				response.end("账号已存在")
				console.log("账号已存在");
            }
		})
	
    })


})





module.exports = router;