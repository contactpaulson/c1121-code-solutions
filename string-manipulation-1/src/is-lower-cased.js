/* exported isLowerCased */
// -check if all the letters in the string are lowercased
// -if all the letters are lowercased in the string say it is true
// -if one of the letters are capitalized then say it is false

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
