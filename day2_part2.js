function day2_part2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = sheet.getDataRange();
  var values = range.getValues();
  var counter = 0;
  for (var i = 0; i < values.length; i++) {
    var testValue = values[i][0];
    var numChar1 = parseInt(testValue.slice(0,testValue.indexOf("-"))).toFixed();
    var numChar2 = parseInt(testValue.slice(testValue.indexOf("-")+1,testValue.indexOf(" "))).toFixed();
    var targetChar = testValue.slice(testValue.indexOf(":")-1,testValue.indexOf(":"));
    var password = testValue.slice(testValue.indexOf(":")+2,testValue.length);
    var passChar1 = password.slice(numChar1-1,numChar1);
    var passChar2 = password.slice(numChar2-1,numChar2);
    if((passChar1===targetChar && passChar2!=targetChar)||(passChar2===targetChar && passChar1!=targetChar)) {
      counter++
    } 
  }
 Logger.log("Counter: "+counter);
}
