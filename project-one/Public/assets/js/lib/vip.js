var express = require("express");
var app = express();
var querystring = require("querystring");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var router = express.Router();
var conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "1000phone"
})

router.post("/", (req, res) => {
	res.append("Access-Control-Allow-Origin", "*");
	var data = '';
	req.on("data", (chunk) => {
		data += chunk;
	});
	req.on("end", () => {
		var query = querystring.parse(data);
		conn.query("INSERT INTO vip set ?", {
			
			v_reason:query.reason,
			v_name:query.name,
			v_card:query.id/121212
			

		}, (err, results, fields) => {
			res.json({
				status: 1,
				msg: "成功添加"
			});
		})
	})
})

module.exports = router;