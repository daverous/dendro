var jStat = require('jStat').jStat;
var math = require('mathjs');


	
	
var firstDifference = function(array) {
	var n = [];
	var c = 0;
	for (var i =1; i< array.length; i++) {
		n[c] = array[i] - array[i-1];
		c++;
	}
	return n;
		
};

var correlation = function (one, two) {
	return jStat.corrcoeff(one, two);
};

var firstDifferenceAndCor = function(one, two) {
	one = firstDifference(one);
	two = firstDifference(two);
	return correlation(one,two);
};

var median = function (site, cb) {
	var siteCors = {};
	for (var t in site.trees) { 
		for (var key in t.cors) {
			if (! (key in siteCors)) {
				siteCors[key] = [];
			}			
			siteCors[key].push(t.cors[key]);
		}
	}
	var toRet = {};
	for (key in siteCors) {
		toRet[key] = math.median(siteCors[key]);	
	}
	
	if (cb) {
		cb(toRet);
	}
	else
		return toRet;
};


module.exports = {
	fd : firstDifference,
	cor : correlation,
	fdcor : firstDifferenceAndCor,
	med : median
};