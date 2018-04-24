var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var querystring=require("querystring")
var router = express.Router();
router.use(bodyParser.json())
router.use(session({secret:'www'}))
router.post('/',function (req,res,next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "text/plain;charset=UTF-8");
	var data = ""
	var params;
	req.on("data", function(chunk) {
		data += chunk;
	})
	req.on("end", function() {
		params = querystring.parse(data);
		console.log(params);
		req.session.userID=params.id_number;
	})
	res.end(req.session.userID)
})

router.get('/',function (req,res,next) {
	console.log(111);
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "text/plain;charset=UTF-8");
	
	var id=req.session.userID
	console.log(id);
	res.send(id)
})
module.exports = router;