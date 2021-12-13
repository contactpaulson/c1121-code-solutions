/* exported getLastChar */
// -need storage for the last (letter) in String
// -find out how long the word is
// -locate the last letter in the String
// -put the letter into storage

function getLastChar(string) {
  var lastChar = '';
  lastChar = string[string.length - 1];
  return lastChar;
}
