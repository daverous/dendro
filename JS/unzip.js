var fs = require('fs');
var unzip = require('unzip');
var settings = require('./settings')


var deleteFolderRecursive = function(path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

module.exports = {
	
unzipper : function(zipPath, callback) {
	deleteFolderRecursive(settings.networkUploadDirectory);
fs.createReadStream(zipPath).pipe(unzip.Extract({ path: settings.networkUploadDirectory }));
callback;
}
}

