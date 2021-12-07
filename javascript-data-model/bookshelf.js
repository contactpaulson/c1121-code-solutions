var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('This is the author of the book with the ISBN: 978-1484218624:', bookshelf[1].author);
console.log("The ISBN number of the book with the title: 'Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them':", bookshelf[0].isbn);
console.log('The title of the book authored by Phil Sturgeon & Laura Bohill:', bookshelf[2].title);
