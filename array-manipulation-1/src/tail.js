/* exported tail */
// -need storage for the items in the list except the first one
// -go through the list and record each item in the list skipping the first one
// -put all the items in storage except the first one

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
