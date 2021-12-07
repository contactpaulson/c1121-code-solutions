var student = {
  firstName: 'Paul',
  lastName: 'Son',
  age: 37
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);

student.previousOccupation = 'teacher';
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 1992
};

vehicle['color'] = 'green';

vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Barky',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
