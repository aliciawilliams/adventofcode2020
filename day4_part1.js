function day4_part1() {
  var content = DocumentApp.openByUrl('URL_HERE').getBody().getText();
  var addComma = content.split("\n\n");
  var array = []
  addComma.forEach(function(passport) {
          var obj = {}
          var cleanPassport = passport.replace(/\n|\r/g, " ");
          var keyVal = cleanPassport.split(" ");
          keyVal.forEach(function(pair) {
            var splitPair = pair.split(":");
            obj[splitPair[0]]=splitPair[1];
          });
          array.push(obj);
        });
  var counter = 0
  for (var i = 0; i < array.length; i++) {
    if ('byr' in array[i] && 'iyr' in array[i] && 'eyr' in array[i] && 'hgt' in array[i] && 'hcl' in array[i] && 'ecl' in array[i] && 'pid' in array[i]){
      counter++;
    }
  } 
Logger.log("Counter: "+counter)
}
