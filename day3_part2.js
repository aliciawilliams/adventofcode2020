function day3_part2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = sheet.getDataRange();
  var values = range.getValues();
  var dataLen = values[0][0].length;
  var dataRow = range.getNumRows();
  //Right 1, down 1.
  var treeCounter1 = 0
  for (var i = 1; i < values.length; i++) {
    var string = values[i][0];
    if (((i * 1 + 1) % dataLen) === 0) {
      var charNum = dataLen;
    } else{
      var charNum = (i * 1 + 1) % dataLen;
    }
    var testChar = string.slice(charNum-1, charNum);
    if (testChar === "#") {
      treeCounter1++
    }
  }
  //Right 3, down 1.
  var treeCounter2 = 0
  for (var i = 1; i < values.length; i++) {
    var string = values[i][0];
    if (((i * 3 + 1) % dataLen) === 0) {
      var charNum = dataLen;
    } else{
      var charNum = (i * 3 + 1) % dataLen;
    }
    var testChar = string.slice(charNum-1, charNum);
    if (testChar === "#") {
      treeCounter2++
    }
  }
    //Right 5, down 1.
  var treeCounter3 = 0
  for (var i = 1; i < values.length; i++) {
    var string = values[i][0];
    if (((i * 5 + 1) % dataLen) === 0) {
      var charNum = dataLen;
    } else{
      var charNum = (i * 5 + 1) % dataLen;
    }
    var testChar = string.slice(charNum-1, charNum);
    if (testChar === "#") {
      treeCounter3++
    }
  }
    //Right 7, down 1.
  var treeCounter4 = 0
  for (var i = 1; i < values.length; i++) {
    var string = values[i][0];
    if (((i * 7 + 1) % dataLen) === 0) {
      var charNum = dataLen;
    } else{
      var charNum = (i * 7 + 1) % dataLen;
    }
    var testChar = string.slice(charNum-1, charNum);
    if (testChar === "#") {
      treeCounter4++
    }
  }
    //Right 1, down 2.
  var treeCounter5 = 0
  var maxIterations = Math.ceil(values.length/2);
  for (var i = 1; i < maxIterations; i++) {
    var string = values[i*2][0];
    if (((i * 1 + 1) % dataLen) === 0) {
      var charNum = dataLen;
    } else{
      var charNum = (i * 1 + 1) % dataLen;
    }
    var testChar = string.slice(charNum-1, charNum);
    if (testChar === "#") {
      treeCounter5++
    }
  }
 Logger.log("Tree Counter1: "+treeCounter1);
 Logger.log("Tree Counter2: "+treeCounter2);
 Logger.log("Tree Counter3: "+treeCounter3);
 Logger.log("Tree Counter4: "+treeCounter4);
 Logger.log("Tree Counter5: "+treeCounter5); 
 Logger.log("Answer: "+treeCounter1*treeCounter2*treeCounter3*treeCounter4*treeCounter5)
}
