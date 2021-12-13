/* exported reverseWord */
// -need a place to store the string that is going to be reversed
// -start from the last letter in the string
// -add each letter to the current string starting from the back to front
// -put the new string into the Storage

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
