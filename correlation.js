var jStat = require('jStat').jStat;


module.exports = {
 cor : function (one, two) {
	var oneVec = jStat.seq(one);
	var twoVec = jStat.seq(two);
	return jStat.corrcoeff(oneVec, twoVec);
}



};