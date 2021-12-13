/* exported getWords */
// -see if string has words inside
// -if not just say that it there are no words
// -need storage for the separated strings
// -find where the spaces in the string are
// -separate the individual words in the string
// -put those words into storage

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    var wordArr = [];
    wordArr = string.split(' ');
    return wordArr;
  }
}
