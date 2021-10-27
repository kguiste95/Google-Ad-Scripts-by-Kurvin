/*******************************************
|Code by:
|Marketing Watch House - https://www.youtube.com/watch?v=tb-DAXbBIvw&list=PLGXZC1nQpK7dvkAdl9PR04UobAGFa_j8e&index=8
 _____________________________________________

|Agenda:
|- Add Google Ads data into a HTML formatted table within an email
********************************************/
/**/

var email = "ENTER_TARGET_EMAIL_HERE"

var columns = ["", "", "",]
var array = [] /* write script that populates this array 
with sub-arrays that have a length equal to that of the columns array*/

function alert(){
	var date = new Date().toLocaleDateString();
	var account = AdsApp.currentAccount().getName();

	MailApp.sendEmail({
					to: email,
                   	subject: "", 
                   	htmlBody: htmlBody(array)
                   });
}

function htmlBody(array){
	html_table_header = '<table border="0" cell spacing="0" style="border-color: #C0C0C0; border-collapse: separate;'+
	' border-spacing: 10px 0px; padding: 5px; width: 65%">';
	html_table_columns = '<tr><th align="left">'+columns.join ('</th><th align="left">') +  '</th></tr>';
	// (OPTIONAL) html_first_row = '<b> Text' + variable with value +  '</b></br>' + 'text' + variable with value + '<br />'
	html_table_rows = ''
	for(i=0; i<array.length; i++){
		html_table_rows += '<tr style="border-bottom:1px"><td>' + array[i].join('</td><td>')+ '</td><tr>';
	}
	
	//(OPTIONAL) html_final_row = '</table><br><h3> ANYTHING</h3>'
	final_html =  /*(OPTIONAL) html_first_row + */ html_table_header + html_table_columns + html_table_rows /*+ (OPTIONAL) html_final_row*/
	return final_html;
}

