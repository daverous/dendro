var fs = require("fs");
var lineReader = require('line-reader');
//var lazy = require('lazy');

var endDelim = -9999;




 module.exports.locationReader = function(file, cb) {
	 
	//  sitelocations['ABE'] = [lat,long]
	 var siteLocations = []
	lineReader.eachLine(file, function(line, last) {
		var split = line.split(",");
		siteLocations[split[0]] = [split[1],split[2]];
	
	if (last) {
				if(siteLocations != null)
					cb(siteLocations);
	}	
	}); 
 };


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
						var site = id.split(/\d+/)[0].replace(',', '');
						var toRet = 
						{
							id : id,
							site: site,
							lat : 0,
							long : 0,
							start : curTreeStart,
							cors : {},
							data : treeData	
						};
						// TODO export this to class.
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




