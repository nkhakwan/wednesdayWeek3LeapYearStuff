  /* Here is the code for the back end that when given a word, sees if it starts with a vowel, affix way to that word. If that word starts with consonants, it rips the leading consonants out and affix them to the remaining truncated word starting with a vowel and than further affix "ay" to it. Please try on the jsfiddle or in console*/
  
  
  var consonantsFunction = function(eachWord){
    //var word = "ssssomeword";
    //alert(eachWord);
    var splitWord = eachWord.split('');
    //alert(splitWord);
    var myConsonants = [];
    var myTruncated = splitWord.slice(0);
    //alert(myTruncated);
    for( var i=0; i<splitWord.length; i=i+1){
      if(splitWord[i].match(/[b-df-hj-np-tv-z]/i)){
        //alert("in the first loop")
        myConsonants.push(splitWord[i]);
        //alert(myConsonants);
        myTruncated.shift();
        //alert(myTruncated);
      } else {
        break;
         } // end of if
    } // end of for
      var myConcatenated = myTruncated.concat(myConsonants);
      //alert(myConcatenated);
      var mySecondConcatenated = myConcatenated.concat("ay");
      return myJoined = mySecondConcatenated.join('');
      //alert(mySecondConcatenated);
   }
  
  var mainFunction = function(someArray){
    var simpleArray = someArray.split(" ");
    var secondArray = [];
    simpleArray.forEach(function(eachWord){
      if (eachWord.charAt(0)=== "a" || eachWord.charAt(0)=== "e" || eachWord.charAt(0)=== "o" || eachWord.charAt(0)=== "u" || eachWord.charAt(0)=== "i"){
        secondArray.push(eachWord + "way");
      }else {
        secondArray.push(consonantsFunction(eachWord));
      } // end of if
    }) // end of forEach
    return secondArray;
  } // end of main function
  //var final = mainFunction("ear yourString");
   
  
////////////////////// Front End Code /////////////////////////////////

   $(document).ready(function() {
    $("form#inputAndOutput").submit(function(event){
       //alert("we are at the beginning of another block");
       event.preventDefault();
       var yourString = $("#yourString").val();
       //console.log(yourString);  // for debugging
       var final = mainFunction(yourString); // try this one.
       //var result = stateMent(courseType, highSchool, javaScript, engineeringDegree, interest, aptitude);
       $("#output").text(final);
       });
   });