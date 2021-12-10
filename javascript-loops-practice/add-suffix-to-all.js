/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var modWords = [];
  for (var i = 0; i < words.length; i++) {
    modWords.push(words[i] + suffix);
  }
  return modWords;
}
