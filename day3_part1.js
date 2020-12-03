function day3_part1() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = sheet.getDataRange();
  var values = range.getValues();
  var dataLen = values[0][0].length;
  var dataRow = range.getNumRows();
  var treeCounter = 0
  for (var i = 1; i < values.length; i++) {
    var string = values[i][0];
    if (((i * 3 + 1) % dataLen) === 0) {
      var charNum = dataLen;
    } else{
      var charNum = (i * 3 + 1) % dataLen;
    }
    var testChar = string.slice(charNum-1, charNum);
    if (testChar === "#") {
      treeCounter++
    }
  }
 Logger.log("Tree Counter: "+treeCounter);   
}
