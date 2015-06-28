var reader = require('./readFile.js');

var cor = require('./correlation.js');


var read = reader.reader('FESH');


var fd = cor.firstDifference(read);

console.log(fd);