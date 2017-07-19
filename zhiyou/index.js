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
var email=req.body.email
var users = [];
fs.exists('inf',function(exist){
	var name = req.body.username;
	var pwd = req.body.pwd;
	var email = req.body.email;
	if(email.length<=0){
		res.send('邮箱不能为空');
	}
	pwd = pwd.trim();
	
	if(name.length<=0){
		res.send('账户名不能为空');
	}
	
	if(pwd.length<=0){
		res.send('密码不能为空');//一旦发送数据给前端,程序到此为止,不再往下执行
	}
	
	var isuser = false;
	//判断该注册用户是否已存在
	for(var i = 0 ;i<users.length;i++){
		if(users[i].name == name){
			
			isuser = true;
			
			break;
			
		}
		
	}
//	如果该用户已存在
	if(isuser == true){
		res.send('该用户已存在');
	}
	else
	{
		//该用户目前还不存在
			var user = {
				name:name,
				pwd:pwd
			}
			users.push(user);
			res.send('注册成功');
	}
})
//登录的接口
app.post('/dengl',function(req,res){
	
	var name = req.body.username;
	var pwd = req.body.pwd;
	//判断用户是否存在,并保存该用户在数组中的索引值
	var hasuser = null;
	for(var i = 0;i<users.length;i++){
		if(users[i].name == name ){
			hasuser = i;
			break;
		}
	}
	//通过索引值获取该用户的密码,判断密码是否正确
	if(hasuser != null){
		
		if(users[hasuser].pwd == pwd){
			
			res.send('登录成功');
			
//			res.send('登录成功');
		}
		else{
			res.send('你输入的密码有误');
		}
		
	}
	else
	{
		res.send('该用户不存在');
	}

})

        
    });

   



app.listen(3000,function(){
console.log('服务器启动成功！')	
	
	
	
})
