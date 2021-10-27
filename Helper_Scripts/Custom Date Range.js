var lastXDays = 3

var customDateRange = customDateRange(lastXDays);

console.log(customDateRange);

function customDateRange(x){

	var today = new Date();

	var previousDate = new Date(); 
	previousDate.setDate(today.getDate()-x)

	return dateString(previousDate)+","+dateString(today)

	function dateString(date){
		var yyyy = date.getFullYear().toString();
		var mm = (date.getMonth()+1).toString();
		var dd = date.getDate().toString();
		return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]);
	}
}