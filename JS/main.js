var reader = require('./readFile');

var cor = require('./correlation');

reader.reader('./FILES/FESH', function (trees) {
	// console.log(trees);
	//	console.log("tree1", trees[0]);
	//	console.log("tree2", trees[0].data);
	// console.log(trees[0]);
	// console.log(cor.fd(trees[0].data));
	
	reader.reader('./FILES/BAM', function(trees2) {
	// console.log(compareTwoTrees(trees[0], trees2[0]));
	// console.log(trees2);
	compareTwoSites(trees,trees2, function(test) {
		 console.log(test[0].id)
		console.log(test[0].cors)
	});
		// var v1 = cor.fd(trees[0].data);
		// var v2 = cor.fd(trees[1].data);
		// console.log(v1);
		// console.log(trees[1].id);	
		// console.log(cor.cor(v2,v1));
		// calculateCoVarianceForAllOfTrees('FESH', ['GLG'], function(trees) {
		// 	console.log(trees);
		// });
	});
});


// Site one is assumed the test site, to be bound
var compareTwoSites = function (siteTwo, siteOne, cb) {
	// console.log(siteOne); 
	for (var i = 0; i < siteOne.length; i++) {
		for (var j = 0; j < siteTwo.length; j++) {
			compareTwoTrees(siteOne[i], siteTwo[j]);
			//TODO right now, cor is only stored in test site trees if 
		}
	}
	// If Cb is specified, continue on from there 
	if (cb)
		cb(siteOne);
};

var compareTwoTrees = function (treeOne, treeTwo) {
	//Create new arrays
	var treeOneTemp = [];
	var treeTwoTemp = [];
	if (treeOne.id == treeTwo.id) {
		console.log('Trees with same ID compared');
		// err(1); //Error code 1 is if two trees with same ID are compared. 
	}
	
	if (treeOne.start > treeTwo.start) {
		var treeTwoOffset = treeOne.start - treeTwo.start;
		
	
		var othercounter = 0; 
		for (var i=treeTwoOffset; i<treeTwo.data.length; i++ ) {
			
			if (othercounter >= treeOne.data.length) break;
			
			treeOneTemp.push(treeOne.data[othercounter]);
			treeTwoTemp.push(treeOne.data[i]);
			othercounter++;
		}
		
	
	
	}
	
	else {
		var treeOneOffset = treeTwo.start - treeOne.start;
		
	
	othercounter = 0; 
	for (var i=treeOneOffset; i<treeOne.data.length; i++ ) {
			console.log(treeTwo.data.length)
		if (othercounter >= treeTwo.data.length) break;
		
		treeOneTemp.push(treeOne.data[i]);
		treeTwoTemp.push(treeTwo.data[othercounter]);
		othercounter++;
	}
	}
	console.log(treeOneTemp.length);
	var tempCor = cor.fdcor(treeOneTemp, treeTwoTemp);

	var TreeCor = {
		id: treeTwo.id,
		cor: tempCor
				};

				if (treeOne.cors[treeTwo.site] == undefined) {
					treeOne.cors[treeTwo.site] = [];
				}

				treeOne.cors[treeTwo.site].push(TreeCor);
				
				//TODO temporary just to get correlation value
				return tempCor;

};


var errFunc = function(error) {
	console.error("An error has occured:  " + error);
}

var median = function (site) {
	var siteCors = {};
	for (var t in site.trees) { 
		var siteCors = {};
		for (var key in t.cors) {
			if (! (key in siteCors)) {
				siteCors[key] = [];
			}
						
			siteCors[key].push(t.cors[key]);
		}
	}
}



var prov = function (testSite, network, cb) {
	// Testsite is a file path to be used as a testSite
	// Network is an array of file paths to be cor'd with testsite
	reader.reader(testSite, function (testSiteTrees) {

		for (var i = 0; i < network.length; i++) {
			reader.reader(network[i], compareTwoSites, null);

		}
		// Keep nodejs happy by doing it async 
		if (i == network.length) {
			console.log('bms');
			cb(testSiteTrees);
		}
	});

};