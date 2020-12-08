function day6_part2() {
  var content = DocumentApp.openByUrl('URL_HERE').getBody().getText();
  var inputArray = content.split("\n\n");
  var array = []
  inputArray.forEach(function(answer) {
    var indAnswer = answer.split(/\n/);
    array.push(indAnswer);
  });
  var everyoneArray = []
  array.forEach(function(group) {
    var numParticipants = group.length;
    if (numParticipants == 1) {
      everyoneArray.push(group[0].length);
    } else {
    var everyString = "";
    for (var i = 0; i < group[0].length; i++) {
      var checkChar = group[0].slice(i,i+1);
      var checkCounter = 0
      for (var j = 1; j < numParticipants; j++) {
        if (group[j].indexOf(checkChar) != -1) {
        checkCounter = checkCounter + 1;
        }
      }
      if(checkCounter == numParticipants - 1) {
        everyString = everyString + checkChar;
      }
    }
    everyoneArray.push(everyString.length); 
    }
  });
  var sum = everyoneArray.reduce(function(a, b){
      return a + b;
  }, 0);
  Logger.log("Sum of everyone answers: "+sum);
}
