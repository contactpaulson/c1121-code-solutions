function convertMinutesToSeconds(minutes) {
  var countSeconds = minutes * 60;
  console.log('Number of seconds:', countSeconds);
}
convertMinutesToSeconds(5);

function greet(name) {
  var greetByName = 'Hey, ' + name;
  console.log('Greeting:', greetByName);
}
greet('Beavis');

function getArea(width, height) {
  var totalArea = width * height;
  console.log('The total area is:', totalArea);
}
getArea(17, 42);

function getFirstName(person) {
  var fullName = person.firstName;
  console.log("The person's first name is:", fullName);
}

getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  console.log('The last element in the array is:', lastElement);
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
