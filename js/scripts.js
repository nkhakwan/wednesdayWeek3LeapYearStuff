var mainFunction = function(someArray){
  var simpleArray = someArray.split(",");
  var secondArray = [];
  simpleArray.forEach(function(eachWord){
    if (eachWord.charAt(0)=== "a" || eachWord.charAt(0)=== "e" || eachWord.charAt(0)=== "o" || eachWord.charAt(0)=== "u" || eachWord.charAt(0)=== "i"){
      secondArray.push(eachWord + "way");
    }else {
      secondArray.push(eachWord);
    }
    return secondArray;
  });
  var final = mainFunction("ework work our ear user ink nancy");

  