var express = require('express');
var multer = require('multer');
var router= express.Router();
var mysql = require('mysql');
var querystring=require("querystring");
var app = express();
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"1000phone"
});
connection.connect();

var imgSrc;
var storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
        imgSrc = 'http://localhost:8888/'+Date.now() + "-" + file.originalname;
        cb(null, Date.now() + "-" + file.originalname)
    }
})
var upload = multer({
    storage: storage
})

router.post('/upFiles', upload.single('itemupload'), function (req, res) {
    //req.files
    res.append("Access-Control-Allow-Origin", "*");
    res.send('上传文件');

    app.use(express.static('./uploads'));
        // req.on("end",()=>{
        // params = querystring.parse(data);
        // connection.query("INSERT INTO upload(`u_file`,`u_id`) VALUES('"+imgSrc+"','"+params.uid+"')",function(error,results,fields){
        //     res.send("添加成功");
        // })
    // })
});
router.post('/upFiles_i',function (req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Content-Type","text/plain;charset=UTF-8");
    var data='';
    var params;
    req.on("data",(chunk)=>{
        data+=chunk;
    })
    req.on("end",()=>{
        params = querystring.parse(data);
        console.log(params);
        connection.query("INSERT INTO upload(`u_file`,`u_id`) VALUES('"+imgSrc+"','"+params.u_id+"')",function(error,results,fields){
            res.send("添加成功");
        })
    })
})
module.exports = router;