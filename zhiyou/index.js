var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var fs = require('fs');//文件管理系统
var multer = require('multer');
var form = multer();
//app.use(bodyparser.text());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

app.post('/zc',function(req,res){

var pwd = req.body.pwd;
var name = req.body.username;
res.send('登录成功')
})









app.listen(3000,function(){
console.log('服务器启动成功！')	
	
	
	
})
