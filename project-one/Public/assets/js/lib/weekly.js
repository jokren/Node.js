var express=require("express");
var querystring=require("querystring");
var mysql=require("mysql");
var router= express.Router();
var app = express();
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"1000phone"
});
connection.connect();
router.post("/soso",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Content-Type","text/plain;charset=UTF-8");
    var data='';
    var params;
    req.on("data",(chunk)=>{
        data+=chunk;
    })
    req.on("end",()=>{
        params = querystring.parse(data);
                connection.query("INSERT INTO weekly(`w_title`,`w_content`,`w_name`,`w_time`) VALUES('"+params.w_title+"','"+params.w_content+"','"+params.w_name+"','"+params.w_time+"')",function(error,results,fields){
                    res.send("添加成功");
                })
    })

});
router.get("/createTab1", (req, res) => {
    res.append("Access-Control-Allow-Origin", "*");
    connection.query("SELECT * FROM weekly", (err, results, fields) => {
         console.log(results);
        res.json(results);
    })
})

module.exports = router;
