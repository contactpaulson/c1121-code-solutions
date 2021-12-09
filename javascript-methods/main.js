var num1 = 12;
var num2 = 13;
var num3 = 14;

var maximumValue = Math.max(num1, num2, num3);
console.log('value of the maximum value:', maximumValue);

var heroes = ['Batman', 'Superman', 'Spiderman', 'Hulk'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('value of random index:', randomIndex);

var randomHeroes = heroes[randomIndex];
console.log('value of random heroes:', randomHeroes);

var library = [
  {
    title: 'Coding Book',
    author: 'Bob Smith'
  },
  {
    title: 'Golfing Book',
    author: 'Jason Kim'
  },
  {
    title: 'Driving Book',
    author: 'Peter James'
  }
];

var lastBook = library.pop();
console.log('value of the last book:', lastBook);

var firstBook = library.shift();
console.log('value of the first book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Paul Son';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
