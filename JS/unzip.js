var fs = require('fs');
var unzip = require('unzip');
var settings = require('./settings')


var deleteFolderRecursive = function (path, cb) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdir(path, cb);
    }
};

module.exports = {

    unzipper: function (zipPath, callback) {
        deleteFolderRecursive(settings.networkUploadDirectory, new function () {
            console.log('come');
            var stream = fs.createReadStream(zipPath).pipe(unzip.Extract({ path: settings.networkUploadDirectory }));
            stream.on('finish', function () {
                callback;
            });
        });
    }
}

