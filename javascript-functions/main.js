function convertMinutesToSeconds(minutes) {
  var countSeconds = minutes * 60;
  return countSeconds;
}
var minuteToSecondResult = convertMinutesToSeconds(5);
console.log('Number of seconds:', minuteToSecondResult);

function greet(name) {
  var greetByName = 'Hey, ' + name;
  return greetByName;
}
var greetByNameResult = greet('Beavis');
console.log('Greeting:', greetByNameResult);

function getArea(width, height) {
  var totalArea = width * height;
  return totalArea;
}
var totalAreaResult = getArea(17, 42);
console.log('The total area is:', totalAreaResult);

function getFirstName(person) {
  var fullName = person.firstName;
  return fullName;
}

var fullNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log("The person's first name is:", fullNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('The last element in the array is:', lastElementResult);
