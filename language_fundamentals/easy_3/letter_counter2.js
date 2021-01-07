// Letter Counter Part 2
// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.
// 
// Examples:
// 
 console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
 console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
 console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
// wordSizes('');                                            // {}
//
// input: string
// output: object
//
// rules: 
//  - only count letters
//    - [A-Za-z]
//
// algorithm:
//  - reasssign words to only letter version

function wordSizes(words) {
  //var words = words.match(/[A-Za-z\s]/g).join(''); 
  var words = words.replace(/[^A-Za-z\s]/g, '')
  console.log(words);
  var wordsArray = words.split(' ');
  var count = {};
  var wordSize;
  var i;

  for (i = 0; i < wordsArray.length; i += 1) {
    wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}



