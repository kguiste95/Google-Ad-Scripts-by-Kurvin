function validateAndGetSpreadsheet(spreadsheeturl) {
  if (spreadsheeturl == 'YOUR_SPREADSHEET_URL') {
    throw new Error('Please specify a valid Spreadsheet URL. You can find');
  }
  return SpreadsheetApp.openByUrl(spreadsheeturl);
}

validateAndGetSpreadsheet();