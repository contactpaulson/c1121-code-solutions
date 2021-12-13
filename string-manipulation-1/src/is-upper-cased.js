/* exported isUpperCased */
// -check if a letter is capitalized or not in the string
// -if one letter is capitalized in the string say it is true
// -if none of the letters are capitalized then say it is false

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
