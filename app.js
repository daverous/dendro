/*Define dependencies.*/

var express=require("express");
var path = require('path');
var multer  = require('multer')
var favicon = require('serve-favicon');
var fs = require('fs');
var unz = require('./JS/unzip');
var provF = require('./JS/provFuncs')
var app=express();

var done=false;

var upload = multer({ dest:  path.join(__dirname,'/uploads')})
// https://github.com/blueimp/jQuery-File-Upload/blob/master/basic-plus.html
app.set('views', path.join(__dirname, '/Views'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/public',  express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));


app.set('view engine', 'jade');


/*Handling routes.*/

app.get('/',function(req,res){
      res.render("index");
});

app.get('/test', function(req,res) {
  res.render("test");
});


// TODO reimplement file uploads here
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {files} two files should be uploaded.
 * @apiParam 
 * @apiSuccess {} Mean of calculation of both sites.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

var cpUpload = upload.fields([{ name: 'testSite', maxCount: 1 }, { name: 'network', maxCount: 1 }
, {name: 'position', maxCount: 1} , {name: 'calc', maxCount :1},  {name: 'calculate', maxCount :1}]);

app.post('/api/calculate', cpUpload, function (req, res, next) {
    console.log('In calculate');

    
    console.log();
        var result = 0;
        provF.compareFilesAsSitesAndGetResNetwork(req.files['testSite'][0].path, req.files['network'][0].path, req.files['position'][0].path, req.body.calc, function(result) {
       console.log("result here:" + result);
        res.status(200);
        res.render('output', {
            message: result
    }); 
    });
    // unz.unzipper(req.files[1], function() {
    //   var network = "uploads/network";
      
    // });
    // TODO check if mean or median was sent.
    // TODO right now network is just one file
    
});


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
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

});