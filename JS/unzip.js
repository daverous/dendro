var fs = require('fs');
var unzip = require('unzip');

module.exports = {
	
unzipper : function(zipPath, callback) {
fs.createReadStream(zipPath).pipe(unzip.Extract({ path: 'upload/network' }));
callback;
}
}