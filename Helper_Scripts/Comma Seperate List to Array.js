function commaSepListToArray(str){
	str = str.replace(/^,/,'').replace(/ +/g,'').replace(/,+/g,',').replace(/,$/,'');
	console.log(str);
	var arr = [];
	while (str && str.indexOf(",")!=-1){
		var i = str.indexOf(",");
		console.log(i)
		arr.push(str.slice(0,(i)));
		str = str.substr(i).replace(/^,/,'');
		console.log(str);
		if (str.indexOf(",") ==-1){
			arr.push(str);
		}
	}
	return arr;
}