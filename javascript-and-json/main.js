var bookArray = [
  {
    title: 'Green Book',
    isbn: '1234-5678-91011',
    author: 'Peter Smith'
  },
  {
    title: 'Blue Book',
    isbn: '1213-1415-16171',
    author: 'Joe Harris'
  },
  {
    title: 'Orange Book',
    isbn: '8192-0212-22324',
    author: 'Paul Milsap'
  }
];

console.log('bookArray type:', typeof bookArray);

console.log('type of JSON stringify for bookArray:', typeof JSON.stringify(bookArray));

var studentInfo = '{ "id": 1234, "name": "Paul" }';
console.log('type of JSON stringify for studentInfo:', typeof studentInfo);

var objectFromParse = JSON.parse(studentInfo);
console.log('type of object parsed:', typeof objectFromParse);
