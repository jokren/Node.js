//编写个人资料

var express = require('express');
var http = require("http")
var url = require("url")
var createConnection = require('./sql.js');
var mysql = require("mysql")
var querystring = require("querystring")
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

//增
router.post('/newindex', function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");
    var data = ""
    var params;
    request.on("data", function(chunk){
        data += chunk;
    })
    request.on("end", function(){
        params = querystring.parse(data);
       // console.log(params);
        connection.query('select * from `personaldata` ', function(error, results, fields){
          for(var i=0; i<results.length; i++){
              if(results[i].IDcard==params.IDcard){
                  connection.query('INSERT INTO `personaldata` SET ?', {
                      StuName:params.StuName,
                      Sex:params.Sex,
                      Tel:params.Tel,
                      QQ:params.QQ,
                      IDcard:params.IDcard,
                      ProvinceId:params.ProvinceId,
                      School:params.School,
                      ProName:params.ProName,
                      IsStudent:params.IsStudent,
                      Education:params.Education,
                      ProName2:params.ProName2,
                      is_computer:params.is_computer,
                      is_develop:params.is_develop,
                      pc:params.pc,
                      CityId:params.CityId,
                      StucityId:params.StucityId,
                      AreaId:params.AreaId,
                      contact_person:params.contact_person,
                      contact_rel:params.contact_rel,
                      contact_tel:params.contact_tel,
                      srcimg1:params.srcimg1,
                      srcimg2:params.srcimg2,
                      srcimg3:params.srcimg3,
                      srcimg4:params.srcimg4,
                      srcimg5:params.srcimg5
                  }, function(error, results, fields){

                  })

                  return
              }
          }
        })

        connection.query('INSERT INTO `personaldata` SET ?', {
            StuName:params.StuName,
            Sex:params.Sex,
            Tel:params.Tel,
            QQ:params.QQ,
            IDcard:params.IDcard,
            ProvinceId:params.ProvinceId,
            School:params.School,
            ProName:params.ProName,
            IsStudent:params.IsStudent,
            Education:params.Education,
            ProName2:params.ProName2,
            is_computer:params.is_computer,
            is_develop:params.is_develop,
            pc:params.pc,
            CityId:params.CityId,
            StucityId:params.StucityId,
            AreaId:params.AreaId,
            contact_person:params.contact_person,
            contact_rel:params.contact_rel,
            contact_tel:params.contact_tel,
            srcimg1:params.srcimg1,
            srcimg2:params.srcimg2,
            srcimg3:params.srcimg3,
            srcimg4:params.srcimg4,
            srcimg5:params.srcimg5
        }, function(error, results, fields){

        })
    })
})

//查
router.post('/newindex1', function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");

    connection.query('select * from `personaldata` ', function(error, results, fields){
        //console.log(results);
        var str=JSON.stringify(results)
        response.end(str)
    })

})




//查
router.post('/newindex2', function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");

    connection.query('select * from `register` ', function(error, results, fields){
        //console.log(results);
        var str=JSON.stringify(results)
        response.end(str)
    })

})


module.exports = router;