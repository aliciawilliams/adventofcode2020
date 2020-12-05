function day4_part2() {
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
      var hclTestRegex = /^#[a-fA-F0-9]{6}$/;
      var hgtTestRegex = /\d+(cm|in)$/;
      var pidTestRegex = /^[0-9]{9}$/;
      var eclTestRegex = /^(amb|blu|brn|gry|grn|hzl|oth)$/;
      if (array[i].byr >= 1920 && array[i].byr <= 2002) {
        if (array[i].iyr >= 2010 && array[i].iyr <= 2020) {
          if (array[i].eyr >= 2020 && array[i].eyr <= 2030) {
            if (hclTestRegex.test(array[i].hcl)) {
              if (eclTestRegex.test(array[i].ecl)) {
                if (pidTestRegex.test(array[i].pid)) {
                  if (hgtTestRegex.test(array[i].hgt)) {
                    var hgtArray = array[i].hgt.split(/([0-9]+)/);
                    var hgtNum = hgtArray[1];
                    var hgtMeasure = hgtArray[2];
                    if (hgtMeasure == 'cm') {
                      if (hgtNum >= 150 && hgtNum <= 193) {
                        counter++;
                      }
                    } else {
                      if (hgtNum >= 59 && hgtNum <= 76) {
                        counter++;
                      }
                    }
                  }
                }
              }
            } 
          }
        }
      }
    }
  }
  Logger.log("Counter: "+counter)
}
