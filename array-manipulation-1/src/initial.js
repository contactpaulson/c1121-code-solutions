/* exported initial */
// -storage for the items in the list excluding the last one
// -need to go through the list and record each item not including the last one
// -put all the items in storage

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
