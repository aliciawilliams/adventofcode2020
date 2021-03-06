function day5part1() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = sheet.getDataRange();
  var values = range.getValues();
  var seatIdArray = []
  for (var i = 0; i < values.length; i++) {
    var pass = values[i][0];
    var upperRow = 127;
    var lowerRow = 0;
    var upperSeat = 7;
    var lowerSeat = 0;
    for (var j = 0; j<pass.length-3; j++) {
      if(pass[j] == "F"){
        upperRow = upperRow - Math.ceil((upperRow-lowerRow)/2);
      } else {
        lowerRow = lowerRow + Math.ceil((upperRow-lowerRow)/2);
      }
    }
    for (var k = 7; k<pass.length; k++) {
      if(pass[k] == "L"){
        upperSeat = upperSeat - Math.ceil((upperSeat-lowerSeat)/2);
      } else {
        lowerSeat = lowerSeat + Math.ceil((upperSeat-lowerSeat)/2);
      }
    }
    var seatId = upperRow * 8 + upperSeat;
    seatIdArray.push(seatId);
 }
 Logger.log("Highest Seat Id: "+Math.max(...seatIdArray));
};
