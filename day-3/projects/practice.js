// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

function tellFortune(children, partner, location, job) {
    console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`)
}
tellFortune("developer", "Australia", "Unknown", 2);

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(age, conversion) {
    age = conversion / 7;
    console.log(`Your doggie is ${age} years old in dog years!`);
}
calculateDogAge(10, 10);


// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amount) {
    let max_age = 50;
    // max_age += amount;
    amount += 365* (max_age - age) * amount;
    console.log(`You will need ${amount} to last you until the ripe old age of ${age}`);
}
calculateSupply(10, 1000.500);


// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let celcius = 0;
let fahrenheit = 0;
function celsiusToFahrenheit(temp) {
    celcius += (fahrenheit - 32) / 1.8;
    console.log(`${celcius}°C is ${fahrenheit}°F`);
}
celsiusToFahrenheit(20);
function fahrenheitToCelsius(temp) {
    fahrenheit += (celcius * 1.8) + 32;
    console.log(`${fahrenheit}°F is ${celcius}°C`);
}
fahrenheitToCelsius(20);

//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
}
  // Will the function work differently if else is removed?
  
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?

//Both will work same in 1st one when age is less than 18 else statement will execute, 
//and in 2nd one when condition goes false then function will return some containing value.
  
  
// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Do you have your parents permission to access this page?');
    }
}
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?

var checkAge = (age) => (age > 18) ? (`true`) : confirm('Do you have your parents permission to access this page?');
checkAge(10);

// Using OR ||

function checkAge(age) {
    return age > 18 || confirm('Do you have your parents permission to access this page?');
}


// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.

var inputNum = prompt('Enter any positive integer');
var inputPower = prompt('Enter number of power');
function pow(x, n) {
    if (x < 0) {
        alert(`Please input positive number`);
    }
    return x = x**n;
}
var power = pow(inputNum, inputPower);
alert(power);

// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.

var enterString = prompt('Enter a string');
function counts(vowels) {
	let numOfVowels = 0;
    for(let i in enterString) {
        if (enterString[i] == 'a' || enterString[i] == 'e' || enterString[i] == 'i' || enterString[i] == 'o' || enterString[i] == 'u') {
            numOfVowels++;
        }
        else if (enterString[i] == 'A' || enterString[i] == 'E' || enterString[i] == 'I' || enterString[i] == 'O' || enterString[i] == 'U') {
            numOfVowels++;
        }
    }
	console.log("number of vowels : " + numOfVowels);
}
counts(enterString);

// var displayVowels = counts(enterString);
// alert(displayVowels);

// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”

var enterString = prompt('Enter any string');
function checkPalindrome(string) {
    if (string == string.split('').reverse().join('')) {
        return (string + ' is palindrome.');
    }
    else {
        return (string + ' is not palindrome.');
    }
}
var displayPalindrome = checkPalindrome(enterString);
alert(displayPalindrome);

// Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.

var enterString = prompt('enter any string');
var wordCount =  enterString.split(' ');
wordCount.length;

// Show the following output using one loop.
    // 1, 2, 3, 4, 5
    // 6, 7, 8, 9, 10

for(let i = 0; i < 1; i++) {
    var str = "";
    for(let j = 1; j <= 5; j++) {
        var str1 = "";
        for(let k = 6; k <= 10; k++) {
            str1 += k;
        }
        str +=  j;
    }
    console.log(str);
    console.log(str1);
}



// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

let inputNum = prompt('Enter any number');
function chooseNumber(num) {
    var sum = 0, product = 1;
    if (num == 1) {
        return sum += num;
    } else if(num == 2) {
        return product *= num;
    } else {
        alert(`Please choose between 1 and 2 only!`);
    }
}
var checkNum = chooseNumber(inputNum);
alert(checkNum);

// Write a function that returns the largest element in a list.

var list = [2, 4, 10, 1, 50];
function findLargest(numbers) {
    var largestNumber = 0;
    for (let i in list) {
        if (list[i] > largestNumber) {
            largestNumber = list[i];
        }
    }
    console.log(largestNumber);
}

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

var inputNum = Number(prompt('Enter any number'));
function checkNum(number) {
    return ( number * (number + 1) ) / 2;
}
checkNum(inputNum);

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

var inputNum = Number(prompt('Enter any number'));
function checkNum(number) {
    var sum = 0;
    for(let i = 0; i <= number; i++) {
        if ( (number % 5 == 0) || (number % 7 == 0) ) {
            sum += i;
        }
    }
    console.log(sum);  
}
checkNum(inputNum);

// Write a program that takes a number under (25) and prints the multiplication table for the number.

var inputNum = Number(prompt('Enter a number'));
function printTable(num) {
    if (num > 25) {
        console.log(`Please input number under 25`);
    }
    // var total = 1;
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}
printTable(inputNum);
  