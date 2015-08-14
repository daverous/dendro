/*Define dependencies.*/

var express=require("express");
var path = require('path');
var multer  = require('multer');
var app=express();
var done=false;


app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');
/*Configure the multer.*/

var upload = multer({ dest: './uploads/'});

/*Handling routes.*/

app.get('/',function(req,res){
      res.render("index");
});

app.post('/api/photo', upload.single('photo'), function (req, res, next) {
  // req.files is array of `photos` files 
  console.log('here');
  res.send('done');
  // req.body will contain the text fields, if there were any 
})


/*Run the server.*/
app.listen(3000,function(){
    console.log("Working on port 3000");
});