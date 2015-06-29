var reader = require('./readFile.js');

var cor = require('./correlation.js');

reader.reader('FESH', function(trees) {

//	console.log("tree1", trees[0]);
//	console.log("tree2", trees[1]);
	var v1 = cor.fd(trees[0].data);
	var v2 = cor.fd(trees[1].data);
	console.log(v1);
	console.log(cor.cor(v2,v1));
	calculateCoVarianceForAllOfTrees('FESH', ['GLG'], function(trees) {
		console.log(trees);
	});
});


// Site one is assumed the test site, to be bound
 var compareTwoSites = function(siteTwo,siteOne, cb) {
	 
				for (var i = 0; i< siteOne.trees.length; i++) {
					
					for (var j=0; j<siteTwo.trees.length; j++) {
						if (siteOne.trees[i].id == siteTwo.trees[j].id) { 
							console.log('Trees with same ID compared');
							continue;
						}
						var tempCor = cor.fdcor(siteOne.trees[i].data, siteTwo.trees[j].data);
						var TreeCor  = {
							id : siteTwo.trees[j].id,
							cor : tempCor
						};
						siteOne.trees[i].cors.push(TreeCor);
						//TODO right now, cor is only stored in test site trees if 
					}
				}
				// If Cb is specified, continue on from there 
				if (cb)
				cb(siteOne);
			};


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