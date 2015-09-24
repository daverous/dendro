var reader = require('./readFile');

var math = require("mathjs");
var filesystem = require("fs");
var cor = require('./correlation');

// reader.reader('./FILES/FESH', function (trees) {
// 	// console.log(trees);
// 	//	console.log("tree1", trees[0]);
// 	//	console.log("tree2", trees[0].data);
// 	// console.log(trees[0]);
// 	// console.log(cor.fd(trees[0].data));
	
// 	reader.reader('./FILES/BAM', function(trees2) {
// 	// console.log(compareTwoTrees(trees[0], trees2[0]));
// 	// console.log(trees2);
// 	compareTwoSites(trees2,trees, testMean);
// 	});
// });



var compareFilesAsSitesAndGetRes = function(f1,f2, op, cb) {
	// console.log(f2)
	// trees is object for site1 (testsite), tree2 is object for site2
	 reader.reader(f1, function (trees) {
	reader.reader(f2, function(trees2) {
	var tree = compareTwoSites(trees2,trees);
	if (op == 'mean') {
		console.log('calculating mean')
		cb(meanForTwoSites(tree, trees2[0].site)); 
	}
	else {
		console.log('calculating median')
		cb(medianForTwoSites(tree, trees2[0].site));
	}
	});
});
}


// param test is test site object
// param siteName is string of 
var meanForTwoSites = function(test, siteName) {
		// console.log(test);
		var mean = 0;
		var count = 0;
		
		for (var i =0; i<test.length; i++) {
			for (var h =0; h<test[i].cors[siteName].length; h++) {
				mean += test[i].cors[siteName][h].cor;
				count++;
		}
		}
		// console.log(mean/count);
		return mean/count;
	};

var medianForTwoSites = function(test, siteName) {
		// console.log(test);
		var median = 0;
		var temp = [];
		
		for (var i =0; i<test.length; i++) {
			for (var h =0; h<test[i].cors[siteName].length; h++) {
				temp.push(test[i].cors[siteName][h].cor);		
		}
		}
		// console.log(mean/count);
		return math.median(temp);
	};
// Site one is assumed the test site, to be bound
var compareTwoSites = function (siteTwo, siteOne, cb) {
	for (var i = 0; i < siteOne.length; i++) {
		for (var j = 0; j < siteTwo.length; j++) {
			compareTwoTrees(siteOne[i], siteTwo[j]);
			//TODO right now, cor is only stored in test site trees if 
		}
	}
	// If Cb is specified, continue on from there 
	if (cb)
		cb(siteOne);
	else 
		return siteOne;
};

var compareTwoTrees = function (treeOne, treeTwo) {
	//Create new arrays
	var treeOneTemp = [];
	var treeTwoTemp = [];
	if (treeOne.id == treeTwo.id) {
		console.log('Trees with same ID compared');
		errFunc(1); //Error code 1 is if two trees with same ID are compared. 
	}
	
	if (treeOne.start > treeTwo.start) {
		var treeTwoOffset = treeOne.start - treeTwo.start;	
	
		var othercounter = 0; 
		for (var i=treeTwoOffset; i<treeTwo.data.length; i++ ) {
			
			if (othercounter >= treeOne.data.length) break;		
			treeOneTemp.push(treeOne.data[othercounter]);
			treeTwoTemp.push(treeTwo.data[i]);
			othercounter++;
		}
	}
	else {
		var treeOneOffset = treeTwo.start - treeOne.start;
		othercounter = 0; 
		for (var i=treeOneOffset; i<treeOne.data.length; i++ ) {
			if (othercounter >= treeTwo.data.length) break;
			treeOneTemp.push(treeOne.data[i]);
			treeTwoTemp.push(treeTwo.data[othercounter]);
			othercounter++;
		}
	}
	
	var tempCor = cor.fdcor(treeOneTemp, treeTwoTemp);
	var TreeCor = {
		id: treeTwo.id,
		cor: tempCor
				};

				if (treeOne.cors[treeTwo.site] == undefined) {
					treeOne.cors[treeTwo.site] = [];
				}
				//  Cors object looks like [siteName, {tree : cor, tree :cor ..}]
				treeOne.cors[treeTwo.site].push(TreeCor);
				
				//TODO temporary just to get correlation value
				return tempCor;

};


var errFunc = function(error) {
	console.error("An error has occured:  " + error);
}

// var median = function (site) {
// 	var siteCors = {};
// 	for (var t in site.trees) { 
// 		var siteCors = {};
// 		for (var key in t.cors) {
// 			if (! (key in siteCors)) {
// 				siteCors[key] = [];
// 			}
						
// 			siteCors[key].push(t.cors[key]);
// 		}
// 	}
// }



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

var getAllnetworks = function(networkDir) {
	// TODO for each file in network, compare and store output.

    filesystem.readdirSync(networkDir).forEach(function(file) {
		
	});



};

module.exports = {
	compareFilesAsSitesAndGetRes : compareFilesAsSitesAndGetRes
};