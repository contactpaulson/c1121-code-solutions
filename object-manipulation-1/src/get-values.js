/* exported getValues */
// -storage needed for the value of a descriptive category in a list
// -need to go through the list
// -get all the values of those categories
// -put all the values into another list

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
