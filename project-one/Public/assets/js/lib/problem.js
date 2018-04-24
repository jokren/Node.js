var express = require("express");
var app = express();
var querystring = require("querystring");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var router = express.Router();

//创建连接对象
var conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "1000phone"  //
})
//执行连接
conn.connect();



router.use(bodyParser.urlencoded({
	extended: false
}))
router.use(bodyParser.json())


router.post("/", (req, res) => {
	res.append("Access-Control-Allow-Origin", "*");
	var id=req.body.card / 121212
	conn.query(`SELECT * FROM technology where t_card=${id}`, (err, results, fields) => {
		res.send(results);
	})
})


//插入
router.post("/set", (req, res) => {
	res.append("Access-Control-Allow-Origin", "*");
		conn.query("INSERT INTO technology set ?", {
			
			t_content:req.body.content,    //t_content:query.content   t_content：数据库里对应的名字（不能随便取）    content：与第一步的名臣相对应
			t_time: req.body.time,
			t_name:req.body.name,
			t_card:req.body.card

		}, (err, results, fields) => {
			console.log(results)
			res.json({
				status: 1,
				msg: "成功添加"
			});
		})
//	})
})


//  最后要导出
module.exports = router;
