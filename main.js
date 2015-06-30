var reader = require('./readFile.js');

var cor = require('./correlation.js');

reader.reader('FESH', function(trees) {

//	console.log("tree1", trees[0]);
//	console.log("tree2", trees[0].data);
	console.log(compareTwoTrees(trees[0], trees[1]));
//	var v1 = cor.fd(trees[0].data);
//	var v2 = cor.fd(trees[1].data);
//	console.log(v1);
//	console.log(trees[1].id);	
//	console.log(cor.cor(v2,v1));
//	calculateCoVarianceForAllOfTrees('FESH', ['GLG'], function(trees) {
//		console.log(trees);
//	});
});


// Site one is assumed the test site, to be bound
 var compareTwoSites = function(siteTwo,siteOne, cb) {
 	for (var i = 0; i< siteOne.trees.length; i++) {	
		for (var j=0; j<siteTwo.trees.length; j++) {
			compareTwoTrees(siteOne.trees[i], siteTwo.trees[j]);
			//TODO right now, cor is only stored in test site trees if 
		}
	}
			// If Cb is specified, continue on from there 
			if (cb)
			cb(siteOne);
		};
		
var compareTwoTrees = function(treeOne, treeTwo, cb ,err) {
	//Create new arrays
				 var treeOneTemp = [];
				 var treeTwoTemp = [];
				 
				 if (treeOne.id == treeTwo.id) { 
				console.log('Trees with same ID compared');
				err(1); //Error code 1 is if two trees with same ID are compared. 
			}
				 for (var t in treeOne.data) {
					 if (t in treeTwo.data) {
						 treeOneTemp.push(treeOne.data[t]);
						 treeTwoTemp.push(treeTwo.data[t]);
					 }
				 }
				 
				 var tempCor = cor.fdcor(treeOneTemp, treeTwoTemp);
				 console.log(treeOneTemp);
				 var TreeCor  = {
				id : treeTwo.id,
				cor : tempCor
				};
				
				if (treeOne.cors[treeTwo.site] == undefined) {
					treeOne.cors[treeTwo.site] = [];
				}
				
				treeOne.cors[treeTwo.site].push(TreeCor);
				
				//TODO temporary just to get correlation value
				return tempCor;
				
}


var calculateCoVarianceForAllOfTrees = function (testSite, network, cb) {
	// Testsite is a file path to be used as a testSite
	// Network is an array of file paths to be cor'd with testsite
	console.log('h');
	reader.reader(testSite, function (testSiteTrees) {
		
		for (var i = 0; i<network.length; i++) {
			reader.reader(network[i], compareTwoSites, null);
			
		}
	// Keep nodejs happy by doing it async 
	if (i == network.length) {
			console.log('bms');
			cb(testSiteTrees);	
	}		
	}); 
	
};