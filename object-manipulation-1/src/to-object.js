/* exported toObject */
// -storage for a category and the value of that category from a list
// -scan the list
// -get the name of the category and the value of that category
// -put the pair into storage

function toObject(keyValuePair) {
  var keyValue = {};
  keyValue[keyValuePair[0]] = keyValuePair[1];
  return keyValue;
}
