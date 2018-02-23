String.prototype.padCenter = function(num,val){
	if(!num|| !val){
		return this
	}
	var len = strWidth(this)
	var valLen = val.length
	var left,right;
	num -= len
	if(num%2 != 0){
		left = parseInt(num/2)
		right = parseInt(num/2)+1
	var start = val.repeat(left)
	var end = val.repeat(right)
	return start+this+end
	}else{
		left = parseInt(num/2)
		var start = val.repeat(left)
		var end = val.repeat(left)
		return start+this+end
	}
}

function strWidth(str) {
	var w = str.length, l = w;
	for (var i = 0; i < l; i++)
	if (str.charCodeAt(i) > 128)
	w++;
	return w;
	}


module.exports = String

