var jStat = require('jStat').jStat;



	
	
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

module.exports = {
	fd : firstDifference,
	cor : correlation,
	fdcor : firstDifferenceAndCor
};