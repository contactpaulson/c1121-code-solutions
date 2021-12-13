/* exported isVowel */
// -first need to establish what a "vowel" is
// -check if the letter is a vowel
// -if it is a vowel, say that it is true
// -if it is not a vowel, say that it is false

function isVowel(char) {
  if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
    return true;
  }
  return false;
}
