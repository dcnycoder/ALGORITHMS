function howManyWordsInString (string, word) {
  let max = 0;
  function makeWordLetters(word) {
    console.log("word: ", word);
    wordLetters = {};
    //for (letter in word) {
    let letter;
    for (let i=0; i<word.length; i++) {
      letter = word[i];
      if (!wordLetters[letter]) {
        //console.log(letter);
        wordLetters[letter] = {quantity: 1, counter: 0};
        //wordLetters[letter]['quantity'] = 0;

      }
      else wordLetters[letter]['quantity'] += 1;
      //wordLetters.quantity['counter'] = 0;
    }
    //console.log('wordLetters: ', wordLetters.l.counter);
    return wordLetters;
  } // end of makeWordLetters
  console.log(makeWordLetters(word));


  for (index in string) {
    //console.log('letter: ', string[index]);
    if (string[index] in wordLetters) {
      //console.log(`${string[index]} : true`);
      console.log("wordLetters[string[index]]['quantity']: ", wordLetters[string[index]]['quantity'])
      wordLetters[string[index]].counter += 1/(wordLetters[string[index]].quantity);
    }
  }
  console.log(wordLetters);

}


const string = 'balloonbaloonballoonbaloon'
const word = 'balloon';
console.log(word);
howManyWordsInString(string, word);

