// The Cat

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Write methods that increase and decrease those properties.
// Write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Make the functions take arguments that increase or decrease arbitrary amounts

function CreateCat(name, tiredness, hunger, lonliness, happiness) {
  let cat = Object.create(catStatus);
  cat.name = name;
  cat.tired = tiredness;
  cat.hunger = hunger;
  cat.alone = lonliness;
  cat.happy = happiness;
  return cat;
}

let catStatus = {
  increaseProp: function(state, number) {
   switch(state) {
    case 'tired': this.tired += number;
    break;
    case 'hunger': this.hunger += number;
    break;
    case 'alone': this.alone += number;
    break;
    case 'happy': this.happy += number;
   }
   for(const key in this) {
    if (this[key] > 10) this[key] = 10;
   }
  },
  decreaseProp: function(state, number) {
    switch(state) {
      case 'tired': this.tired -= number;
      break;
      case 'hunger': this.hunger -= number;
      break;
      case 'alone': this.alone -= number;
      break;
      case 'happy': this.happy -= number;
    }
    for(const key in this) {
      if (this[key] < 0) this[key] = 0;
    }
  },
  checkStatus: function(number) {
    if (number == 0) {
      return `not`;
    } else if (number > 0 && number <= 3) {
      return `less`;
    } else if (number > 3 && number <= 6) {
      return `moderator`;
    } else if (number > 6 && number <= 9) {
      return `VERY`;
    } else if (number == 10) {
      return `extremely`;
    }
  },
  printStatus: function() {
    console.log(`${this.name} is ${this.checkStatus(this.tired)} tired`);
    console.log(`${this.name} is ${this.checkStatus(this.hunger)} hungry`);
    console.log(`${this.name} is ${this.checkStatus(this.alone)} alone`);
    console.log(`${this.name} is ${this.checkStatus(this.happy)} happy`);
  }
}

// 2nd
// An object-oriented book-list!

// Create a class BookList
// Create another class called Book

// BookLists should have the following properties:
  // 1. Number of books marked as read
  // 2. Number of books marked not read yet
  // 3. A reference to the next book to read (book object)
  // 4. A reference to the current book being read (book object)
  // 5. A reference to the last book read (book object)
  // 6. An array of all the Books

// Each Book should have several properties:
  // Title
  // Genre
  // Author
  // Read (true or false)
  // Read date, can be blank, otherwise needs to be a JS Date() object


// Every Booklist should have a few methods:
// .add(book)
  // should add a book to the books list.

// .finishCurrentBook()
  // should mark the book that is currently being read as "read"
  // Give it a read date of new Date(Date.now())
  // Change the last book read to be the book that just got finished
  // Change the current book to be the next book to be read
  // Change the next book to be read property to be the first unread book you find in the list of books