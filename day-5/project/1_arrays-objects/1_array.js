//1. Create an array named colors that contains five different names of colors as strings.

var colors = ["Red", "Yellow", "Cyan", "Blue", "White"];

//2. Access the first color in the array and print it to the console using console.log()

console.log(colors[0]);

//3.Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)

console.log(colors[2]);

//4.Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).

colors[4] = "ultraviolet";
console.log(colors);

//5. Create a new variable called fourthColor and set it equal to the fourth color in the list.

var fourthColor = colors[3];
console.log(fourthColor);

//6.Add another color to the end of the list.

colors.push("OrangeRed");
console.log(colors)

//7.Add another color to the beginning of the list.

colors.unshift("Orange");
console.log(colors)

//8. Print the length of the array to the console with console.log()

console.log(colors.length);

//9.Remove the last color from the end of list, and then print the length of the array to the console one more time.

colors.pop();
console.log(colors.length);

//10.Write a for loop to iterate through every color in the array and print each color's value to the console.

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//11.Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.

for(var i = 0; i < colors.length; i++) {
    console.log(`${i}, ${colors[i]}`);
}

//12.Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)

var lastColor = colors[colors.length - 1];
console.log(lastColor);