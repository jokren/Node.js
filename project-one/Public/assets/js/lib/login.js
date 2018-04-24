//登录
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
        connection.query('SELECT * FROM register ', function(error, results, fields){
            var tf=false
            for(var i=0; i<results.length; i++){
                if(results[i].id_number==params.id_number && results[i].pwd==params.pwd){
                    tf=true
                    console.log("登录成功");
					connection.query(`UPDATE register SET STATUS=1 WHERE id_number=${params.id_number}`,function(error, results, fields){
						// if(error) throw error;
						console.log("登录状态");
					})
                }
            }
            if(tf){
				response.end("登录成功")
            }else {
				response.end("登录失败")
            }
        })

    })

})
module.exports = router;