var queryText = row["Query"].replace(/[^0-9a-z]/gi,' ').replace(/  +/gi,' ').replace(/ +$/gi,'');
var querySpaces = queryText.match(/ /g);