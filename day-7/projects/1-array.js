// Arrays to work on
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];


// Use the above two arrays and practice array methods


// Find largest number in numbers

var largest = 0;
for (let i = 0; i <= largest; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest);

// Find longest string in strings

var strings = ['this','is','a','collection','of','words'];

var longest = strings.sort(function (a, b) {
    return b.length > a.length; 
})[0];
console.log(longest);

// Find all the even numbers

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var even = numbers.filter(element => ((element) % 2 == 0));
console.log(even);


// Find all the odd numbers

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var odd = numbers.filter(element => (element % 2 != 0));
console.log(odd);

// Find all the words that contain 'is' use string method 'contains'

var strings = ['this','is','a','collection','of','words'];
var containIs = strings.filter(element => (element.includes('is')));
console.log(containIs);

// Find all the words that contain 'is' use string method 'indexOf'

var strings = ['this','is','a','collection','of','words'];
var containIs = strings.forEach(element => {
    if (element.indexOf('is')) {
        console.log(element);
    }
});
console.log(containIs);


// Check if all the numbers in numbers array are divisible by three use array method (every)

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var number1 = numbers.every(v => v % 3 == 0);
console.log(number1);

//  Sort Array from smallest to largest

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var sorted = numbers.sort(function (a, b) {
    return a - b;
});
console.log(sorted);

// Remove the last word in strings

var strings = ['this','is','a','collection','of','words'];
strings.pop();
console.log(strings);

// Add a new word in the array

var strings = ['this','is','a','collection','of','words'];
strings.push("best");
console.log(strings);

// Remove the first word in the array

var strings = ['this','is','a','collection','of','words'];
strings.shift('this');
console.log(strings);

// Place a new word at the start of the array use (upshift)

var strings = ['this','is','a','collection','of','words'];
strings.unshift('the');
console.log(strings);

// Make a subset of numbers array [18,9,7,11]

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
let subset = numbers.slice(3, 7);
console.log(subset);

// Make a subset of strings array ['a','collection']

var strings = ['this','is','a','collection','of','words'];
let subsetStr = strings.slice(2, 4);
console.log(subsetStr);

// Replace 12 & 18 with 1221 and 1881

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 12) {
        numbers[i] = 1221;
    } else if (numbers[i] == 18) {
        numbers[i] = 1881;
    }
}
console.log(numbers);

// Replace words with string in strings array

var strings = ['this','is','a','collection','of','words'];
for (let i = 0; i < strings.length; i++) {
    if (strings[i] == 'words') {
        strings[i] = 'string'
    }
}
console.log(strings);

// Customers Array
var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];
// Find all customers whose firstname starts with 'J'

// var custom =  customers.filter(v => v.firstname[0] == "J")
// console.log(custom);

// Create new array with firstname and lastname

let newArr = customers.map(v => `${v.firstname} ${v.lastname}`);
// console.log(newArr);

// Sort the array created above alphabetically

let sortArr = newArr.sort();
console.log(sortArr);