var express = require('express');
var favicon = require('serve-favicon');
var path = require('path')

var app = express();
var router = express.Router();
var views = __dirname + '/views/';
  
app.use('/',router);
  
router.get('/',function(req, res){
  res.sendFile(views + 'index.html');
});
  
router.get('/product',function(req, res){
  res.sendFile(views + 'product.html');});
  
router.get('/about',function(req, res){
  res.sendFile(views + 'about.html');
});

app.use('/icons', express.static('icons'));

app.use('/img', express.static('img'));

app.use(favicon(path.join(__dirname, 'icons', 'favicon.ico')));

app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});
  
app.listen(3000,function(){
  console.log("Server running at Port 3000");
});