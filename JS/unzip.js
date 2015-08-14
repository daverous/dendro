var fs = require('fs');
var unzip = require('unzip');

module.exports = {
	
unzip : function(zipPath) {
fs.createReadStream(zipPath).pipe(unzip.Extract({ path: 'upload/network' }));
}
}