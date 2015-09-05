/*Define dependencies.*/

var express=require("express");
var path = require('path');
var favicon = require('serve-favicon');
var multer  = require('multer');
var unz = require('./JS/unzip');
var provF = require('./JS/provFuncs')
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


// TODO reimplement file uploads here
app.post('/Calculate', upload.single('testSite'), function (req, res, next) {
    console.log('In calculate');
    var testSite = req.files[0];
    console.log(req);
  upload.single('network'), function (req, res, next) {
      
      var mean = provF.compareFilesAsSitesAndGetMean(testSite, req.files[1]);
    // unz.unzipper(req.files[1], function() {
    //   var network = "uploads/network";
      
    // });
    // TODO right now network is just one file
    console.log(mean);
    res.status(200);
    res.send(mean);
  // req.body will contain the text fields, if there were any 
}});


/*Run the server.*/
app.listen(3000,function(){
    console.log("Working on port 3000");
    
    
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
});