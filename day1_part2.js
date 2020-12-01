function day1_part2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = sheet.getDataRange();
  var values = range.getValues();
  for (var i = 0; i < values.length; i++) {
    for (var j = i+1; j < values.length; j++) {
      for (var k = j+1; k < values.length; k++) {
        if (values[i][0]+values[j][0]+values[k][0] == 2020) {
          var answer = values[i][0] * values[j][0] * values[k][0];
          Logger.log("Val1:"+values[i][0]+"Val2:"+values[j][0]+"Val3:"+values[k][0]+"Answer:"+answer); 
        }
      }
    }
  }
}
