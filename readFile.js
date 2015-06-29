var fs = require("fs");
var lineReader = require('line-reader');
//var lazy = require('lazy');

var endDelim = -9999;

exports.reader = function (file, cb) {
	var curTreeId = null; // Current ID of tree that is being looked at
	var treeData = [];
	var trees = [];
	var curTreeStart = 0; 
lineReader.eachLine(file, function(line, last) {
			var id = "";		
		  	for (var i = 0;  i < 8; i++) {
			  id +=line[i];
			}		
			var rest = line.split(" ");
			var actual = [];
			for (var i = 1; i < rest.length; i++) {
				if (rest[i] != '') {
					actual.push(rest[i].trim());
				}
			}				
			if (curTreeId != id) {
			curTreeId = id;
			curTreeStart = actual[0];	
			}
			
			// ACTUAL is now each thing of line apart from tag
			for (var i = 1; i < actual.length; i++) {

				if (actual[i] == endDelim) {
//					console.log('here!');	
						var toRet = 
						{
							id : id,
							start : curTreeStart,
							cors : [],
							data : treeData	
						};
						//Reset params 
						treeData = [];
						curTreeId == null;
						curTreeStart = 0;
//						console.log(toRet);
						trees.push(toRet);
						continue;			
					}
					treeData.push(Number(actual[i]));	
			}
			if (last) {
				cb(trees);
			}	
		});	
		
 
};



// console.log(read('FESH'));
