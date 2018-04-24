//获取用户名
var express = require('express');
var mysql=require("mysql")
var bodyParser = require('body-parser');
var router = express.Router();
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : '1000phone'
});

connection.connect();
router.use(bodyParser.urlencoded({
	extended: false
}))
router.use(bodyParser.json())
router.post('/',function(request,response) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "text/plain;charset=UTF-8");
	var id=request.body.id / 121212
	connection.query(`SELECT * FROM register where id_number=${id} and status=1`, function(error, results, fields){
		if(results.length==0){
			response.end("错误")
		}else {
			console.log(results[0].name);
			response.end(results[0].name)
		}
	})
})
router.post('/outlogin',function(request,response) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "text/plain;charset=UTF-8");
	var id=request.body.id / 121212
	connection.query(`UPDATE register SET STATUS=0 WHERE id_number=${id} and status=1`, function(error, results, fields){
		response.end("退出登录")
		console.log("退出登录");
	})
})
module.exports = router;