// Write a JavaScript program to calculate the factorial of a number. Go to the editor

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

var gcd = (a, b) => {
    if (a == b) {
        return `gcd is ${a}`;
    }
    if (a > b) {
        return gcd(a - b, b);
    } else if (a < b) {
        return gcd(b - a, a);
    }
}

//write a recursion program to print from 1 to 10.

function recursion(n, initValue) {
    if (!initValue) {
        initValue = 1;
    }
    if (initValue <= n) {
        console.log(initValue);
        recursion(n, ++initValue);
    } else {
        return 0;
    }
}

//Write a JavaScript program to get the integers in range (x, y)

var range = (x, y) => x < y ? [x].concat(range(x + 1, y)) : [];
console.log(range(10, 1));