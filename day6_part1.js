function day6_part1() {
  var content = DocumentApp.openByUrl('URL_HERE').getBody().getText();
  var inputArray = content.split("\n\n");
  var array = []
  inputArray.forEach(function(answer) {
        var cleanAnswer = answer.replace(/(\r\n|\n|\r)/gm,"");
        var uniqueAnswer = ""
        for (var i = 0; i < cleanAnswer.length; i++) {
          if(uniqueAnswer.indexOf(cleanAnswer[i])==-1){
            uniqueAnswer = uniqueAnswer+cleanAnswer[i];
          }
        }
        array.push(uniqueAnswer);
      });
  var answerCounter = 0
  for (var i = 0; i < array.length; i++) {
      var numAnswers = array[i].length;
      answerCounter = answerCounter + numAnswers;
 } 
Logger.log("Total count of answers: "+answerCounter)
}
