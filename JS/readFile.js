var fs = require("fs");
var lineReader = require('line-reader');
//var lazy = require('lazy');

var endDelim = -9999;

// First site param is optional
module.exports.reader = function (file, cb, firstSite) {
	var curTreeId = null; // Current ID of tree that is being looked at
	var treeData = [];
	var trees = [];
	var curTreeCounter = 0; 
	var curTreeStart = 0;
lineReader.eachLine(file, function(line, last) {
			var id = "";		
		  	for (var i = 0;  i < 8; i++) {
			  id +=line[i];
			  
			}
			id = id.trim();		
			var rest = line.split(" ");
			var actual = [];
			for (var i = 1; i < rest.length; i++) {
				if (rest[i].trim() != '') {
					actual.push(rest[i].trim());
				}
			}				
			if (curTreeId != id) {
			curTreeId = id;
			curTreeStart = actual[0];
			curTreeCounter = curTreeStart;
			}
			
			// ACTUAL is now each thing of line apart from tag
			for (var i = 1; i < actual.length; i++) {

				if (actual[i] == endDelim) {

						var toRet = 
						{
							id : id,
							site: file.split('.')[0],
							start : curTreeStart,
							cors : {},
							data : treeData	
						};
						//Reset params 
						treeData = [];
						curTreeId == null;
						curTreeStart = 0;
						trees.push(toRet);
						continue;			
					}
					if (actual[i] != '') {
						treeData.push(Number(actual[i]));	
						curTreeCounter++;
					}
			}
			if (last) {
				if(firstSite != null)
					cb(firstSite,trees);
				else
					cb(trees);
			}	
		});	
		
 
};




