var reader = require('./readFile.js');

var cor = require('./correlation.js');


reader.reader('FESH', function(trees) {
 	
//	console.log("tree1", trees[0]);
//	console.log("tree2", trees[1]);
	var v1 = cor.firstDifference(trees[0].data);
	var v2 = cor.firstDifference(trees[1].data);
	console.log(v1);
	console.log(cor.cor(v2,v1));
});