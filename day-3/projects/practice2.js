/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
*/

function convertString(n) {
    return n.toString();
}
convertString(10);


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
*/

function addOne(n) {
    return n += 1;
}
addOne(10);

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
*/

function subtractOne(n) {
    return n -= 1;
}
subtractOne(11);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
*/

var addTwoNumbers = (x, y) => x + y;
addTwoNumbers(2, 3);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
*/

var subtractTwoNumbers = (x, y) => x - y;
subtractTwoNumbers(3, 2);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
*/

let multiplyTwoNumbers = (x ,y) => x * y;
multiplyTwoNumbers(5, 2);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
*/

let divideTwoNumbers = (x, y) => x / y;
divideTwoNumbers(10, 2);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
*/

let multipliesNum = (x) => x = x ** 2;
multipliesNum(2);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
*/

function operation(inputOperator, x, y) {
    var result;
    if (inputOperator == "add") {
       let add = x + y;
       result = `${x} + ${y} = ${add}`;
       console.log(result);
    } else if (inputOperator == "substract") {
       let subtract = x - y;
       result = `${x} - ${y} = ${subtract}`;
       console.log(result);
    } else if (inputOperator == "multiply") {
       let multiply = x * y;
       result = `${x} * ${y} = ${multiply}`;
       console.log(result);
    } else if (inputOperator == "divide") {
       let divide = x / y;
       result = `${x} / ${y} = ${divide}`;
       console.log(result);
    }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
*/

let isGreater = (a, b) => a > b ? console.log(`true`) : console.log(`false`);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
*/

let isSmaller = (a, b) => a < b ? console.log(`true`) : console.log(`false`);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

let isEqual = (a, b) => a == b ? console.log(`true`) : console.log(`false`);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
*/

let smallestValue = (x, y) => Math.min(x, y);
//OR
let smallestValue = (x, y) => x < y ? console.log(x) : y; 

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
*/

let largestValue = (x, y) => Math.max(x, y);

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
*/

let isEven = (n) => (n % 2 == 0) ? console.log(`true`) : console.log(`false`);

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
*/

let isOdd = (n) => (n % 2 != 0) ? console.log(`true`) : console.log(`false`);

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
*/

function grade(score, total) {
    let percentage = (score * 100) / total;
    if (percentage >= 90 && percentage <= 100) {
        console.log("A");
    } else if (percentage >= 80 && percentage <= 89) {
        console.log("B");
    } else if (percentage >= 70 && percentage <= 79) {
        console.log("C");
    } else if (percentage >= 60 && percentage <= 69) {
        console.log("D");
    } else {
        console.log("F");
    }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
*/

var restaurant = {
    reviews: 0
}
if(restaurant.reviews == true) {
    restaurant.reviews += 1;
} else {
    restaurant.reviews = 1;
}


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
*/

let spaceIntoString = (word1, word2) => word1.concat(' ', word2);


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
*/

var circle = {
    circumference: (radius) => 2 * Math.PI * radius,
    area: (radius) => Math.PI * (radius ** 2)
}
