/* exported capitalize */
// -storage for the word now capitalized
// -find the first letter in the word
// -capitalize the first letter
// -with the rest of the letter lowercase them
// -put the two strings together
// -place the word with the first letter capitalized in storage

function capitalize(word) {
  var wordCap = '';
  wordCap = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return wordCap;
}
