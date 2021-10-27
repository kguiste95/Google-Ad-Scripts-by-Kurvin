function nestedArrToArr(nestedArr){
	var arr = [];
	for (var i = 0; i<nestedArr.length; i++){
		for (var j = 0; j<nestedArr[i].length ; j++){
			if (typeof nestedArr[i] == "object"){
				arr.push(nestedArr[i][j]);
			} else {
				arr.push(nestedArr[i]);
				break;
			}
		}	
	}
	return arr;
}
