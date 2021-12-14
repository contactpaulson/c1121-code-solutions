/* exported getKeys */
// -storage for the list of categories describing an object
// -go through the list and just pick out the categories
// -put each into storage

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
