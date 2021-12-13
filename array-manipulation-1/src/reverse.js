/* exported reverse */
// -storage for new order of items from the list
// -start from the last item in the list
// -record each item from the list going backwards
// -put all the items in that order into storage

function reverse(array) {
  var reversedArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}
