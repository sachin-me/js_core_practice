// Define a constructor function called Persone which takes three arguments
//(name, yearOfBirth, job) Initiate the properties

function Persone(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}


// Define a function name calculateAge which returns the age of the person

Persone.prototype.calculateAge = function() {
  let date = new Date();
  let year = date.getFullYear();
  return year -= this.yearOfBirth;
}


// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')

var Abhishek = new Persone('Abhishek', 1980, 'Web Developer');

var Sid = new Persone('Sid', 1970, 'Developer');

var Ruchi = new Persone('Ruchi', 1990, 'Web Developer');

// call the calculateAge function on each object

console.log(`${Abhishek.name} is ${Abhishek.calculateAge()} years old and he is a ${Abhishek.job}`);

console.log(`${Sid.name} is ${Sid.calculateAge()} years old and he is a ${Sid.job}`);

console.log(`${Ruchi.name} is ${Ruchi.calculateAge()} years old and she is a ${Ruchi.job}`);
