var jStat = require('jStat').jStat;


module.exports = {
	
	
firstDifference : function(array) {
	var n = [];
	var c = 0;
	for (var i =1; i< array.length; i++) {
		n[c] = array[i] - array[i-1];
		c++;
	}
	return n;
		
},
 cor : function (one, two) {
//	var oneVec = jStat.seq(one);
	console.log(one);
//	var twoVec = jStat.seq(two);
	return jStat.corrcoeff(one, two);
}



};