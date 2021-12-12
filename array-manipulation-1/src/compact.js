/* exported compact */
// -need storage for the items that pass the test
// -go through each item in the list
// -check if each item is a similar type of item compared to the rest of the items in the list
// put all the items that are similar into storage

function compact(array) {
  var compactedArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactedArr.push(array[i]);
    }
  }
  return compactedArr;
}
