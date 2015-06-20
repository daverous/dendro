var fs = require("fs");
var lineReader = require('line-reader');

var endDelim = -9999;
var site = {
	id : "",
	years : [0,1],
	vals : [0]
};




var read = function (file) {
	var newTree = true; // flag if it is a new tree
	var curTreeId = null; // Current ID of tree that is being looked at
	var treeData = [];
	var curTreeStart = 0; 
	var c = lineReader.eachLine(file, function(line, last) 
		{
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
					console.log('here');	
						var toRet = 
						{
							id : id,
							start : curTreeStart,
							data : treeData	
						};
						//Reset params 
						treeData = [];
						curTreeId == null;
						curTreeStart = 0;
						console.log(toRet);
						return toRet;			
					}
					treeData.push(actual[i]);	
			}	
			
		
			
			
		  if (!line) {
		    return false; // stop reading
		  }
});
return c;
};
read('FESH')
// console.log(read('FESH'));
