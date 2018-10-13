// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”

var password = prompt('Enter your password');
var confirmPassword = prompt('confirm password');
if (password == confirmPassword) {
    alert("Password Validated");
} else {
    alert("Password don't match");
}

// Find the output of the following
// Logical AND operation
// true  && true;
true
// true  && false;
false
// false && true;
false
// false && false;
false

// Logical OR operation
// true  || true;
true;
// true  || false;
true;
// false || true;
true;
// false || false;
false;

// "foo" && "bar";
'bar'
// "bar" && "foo";
'foo'
// "foo" && "";
''
// ""    && "foo";
''

// "foo" || "bar";
'foo'
// "bar" || "foo";
'bar'
// "foo" || "";
'foo'
// ""    || "foo";
'foo'

// Output of this alert( alert(1) || 2 || alert(3) );
//1 and 2

// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.

function operation(a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}
operation(1, 2);

// Function to display a number if user enters negative number
function displayNum(num) {
    if (num < 0) {
        console.log(num);
    } else {
        console.log('Please enter negative number');
    }
}
displayNum(-1);

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;
for (var i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
}
console.log(sum);

// If user enters positive number, that number won't be displayed

var displayNumber = prompt('Enter any number');
function displayNum(num) {
    if (num < 0) {
        return num;
    } else {
        return "None";
    }
}
var alertNum = displayNum(displayNumber);
alert(alertNum);

// Function to check whether an integer entered by the user is odd or even

var inputNum = prompt('Enter any number');
function displayNum(num) {
    if (num % 2 == 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
}
var alertNum = displayNum(inputNum);
alert(alertNum);


// Function to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12

function compare(a, b) {
    if (a < b) {
        return `${a} < ${b}`;
    } else if (a == b) {
        return `${a} = ${b}`;
    } else if (a > b) {
        return `${a} > ${b}`;
    } else {
        return `Enter only number`;
    }
}
compare(2, 3);

//Function to Check Whether a Character is Vowel or Consonant

var inputChar = prompt("Enter Character");
function checkChar(char) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        return `${char} is vowel`;
    } else {
        return `${char} is consonant`;
    }
}
var printChar = checkChar(inputChar);
alert(printChar);

// Function to Find the Largest Number Among Three Numbers

function largestNumber(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
largestNumber(1, 2, 3);

//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to .
// - TWO, if num is equal to .
// - THREE, if num is equal to .
// - FOUR, if num is equal to .
// - FIVE, if num is equal to .
// - SIX, if num is equal to .
// - SEVEN, if num is equal to .
// - EIGHT, if num is equal to .
// - NINE, if num is equal to .
// - PLEASE TRY AGAIN, if  is none of the above.

function counter(count) {
    switch(count) {
        case 1:
            console.log("ONE");
            break;
        case 2:
            console.log("TWO");
            break;
        case 3: 
            console.log("THREE");
            break;
        case 4:
            console.log("FOUR");
            break;
        case 5:
            console.log("FIVE");
            break;
        case 6:
            console.log("SIX");
            break;
        case 7:
            console.log("SEVEN");
            break;
        case 8:
            console.log("EIGHT");
            break;
        case 9:
            console.log("NINE");
        default:
            console.log("PLEASE TRY AGAIN");
    }
}
counter(10);    //PLEASE TRY AGAIN


// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30

var marks = 90;

if (marks > 90) {
    console.log(`AA`);
} else if (marks > 80 && marks <= 90) {
    console.log(`AB`);
} else if (marks > 70 && marks <= 80) {
    console.log(`BB`);
} else if (marks > 60 && marks <= 70) {
    console.log(`BC`);
} else if (marks > 50 && marks <= 60) {
    console.log(`CC`);
} else if (marks > 40 && marks <= 50) {
    console.log(`CD`);
} else if (marks > 30 && marks <= 40) {
    console.log(`DD`);
} else {
    console.log(`FF`);
}

// Function to generate Multiplication Table of a given number (use alert for number input)

var inputNum = prompt('Enter any number');

for (var i = 1; i <= 10; i++) {
    console.log(inputNum * i);
}

// Function to calculate the Factorial of a Number

var num = prompt('Enter any number');
function factorial(number) {
    var total = 1;
    for (var i = 1; i <= number; i++) {
        total = total * i;
    }
	console.log(total);
}
factorial(num);

// Output: var x = 10 + "1"; console.log(x); typeof x;

var x = 10 + "1";
console.log(x);
typeof x;   // string

//  Solve: 225 % 6 = ?

var a = 225;
var b = 6;
var c = 225 % 6;
console.log(c);     //3

// Take two numbers and what to do with that number from user.
// Define an object with these function (add, sub, multiply, divide). Perform the operation

var operation = {
    add: function(a, b) {
        return a + b;
    },
    substract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var a = 0;
var b = 1;
var c;
var sum = 0;

while (b < 4000000) {
    c = a + b;
    a = b;
    b = c;
    if (b % 2 == 0) {
        sum += b;
    }
}
console.log(sum);




