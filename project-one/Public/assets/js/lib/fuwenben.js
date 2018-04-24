var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var querystring = require("querystring");
var router = express.Router();
//实例化第一个express的应用
//var app = express();
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({
	extended: false
}))

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: '1000phone'
});
connection.connect();

// parse application/json
router.use(bodyParser.json())
router.post('/', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	console.log(req.body.html)
	connection.query('INSERT INTO `savegtml` SET ?', {
		s_content: req.body.html
	}, function(error, results, fields) {

		res.send("插入html成功")
	});

})

router.get('/', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	connection.query('SELECT *FROM `savegtml`', {
		s_content: req.body.html
	}, function(error, results, fields) {
			res.json({
				results
			})
//		res.send("插入html成功")
	});

})

module.exports = router;