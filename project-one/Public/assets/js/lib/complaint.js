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

conn.connect();

router.post("/", (req, res) => {
	res.append("Access-Control-Allow-Origin", "*");
	var data = '';
	req.on("data", (chunk) => {
		data += chunk;
	});
	req.on("end", () => {
		var query = querystring.parse(data);
		conn.query("INSERT INTO complain set ?", {
			
			c_complain:query.c_complain,
			timer: query.timer

		}, (err, results, fields) => {
			res.json({
				status: 1,
				msg: "成功添加"
			});
		})
	})
})

module.exports = router;
