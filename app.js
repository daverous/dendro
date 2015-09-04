/*Define dependencies.*/

var express=require("express");
var path = require('path');
var favicon = require('serve-favicon');
var multer  = require('multer');
var unz = require('./JS/unzip');
var app=express();
var done=false;

// https://github.com/blueimp/jQuery-File-Upload/blob/master/basic-plus.html
app.set('views', path.join(__dirname, '/views'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/public',  express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));


app.set('view engine', 'jade');
/*Configure the multer.*/

var upload = multer({ dest: './uploads/'});

/*Handling routes.*/

app.get('/',function(req,res){
      res.render("index");
});

app.get('/test', function(req,res) {
  res.render("test");
});
app.post('/Calculate', upload.single('testsite'), function (req, res, next) {
    var testSite = req.files[0];
  upload.single('network'), function (req, res, next) {
    unz.unzipper(req.files[1], function() {
      var network = "uploads/network";
      
    });
  res.write('done');
  // req.body will contain the text fields, if there were any 
}});


/*Run the server.*/
app.listen(3000,function(){
    console.log("Working on port 3000");
});