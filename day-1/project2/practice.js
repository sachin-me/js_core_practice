//1
// Log message in console saying "I'm Learning Javascript"
console.log("I'm Learning Javascript");

//2
// var name = "Mark";  "Mark" is a string.  What is name?
var name = "Mark"   //"Mark is a string"
function name1(name) {
    return name + " is a variable";
}
console.log(name1(name));
//name is a variable

//3
// var admin;
// var name = "John";
// admin = name;
// alert(admin);

//4
// function warn() {
//     return ("Hello World!");
// }
// var warning = warn();
// alert(warning);

//5
// var name1 = prompt('Enter your name');
// function greeting(name) {
//     var text = "Welcome";
//     return text + " " + name1;
// }
// var welcomeText =  greeting(name);
// alert(welcomeText);

//6
// var name1 = prompt('Enter your name');
// function greeting(name) {
//     if(name == "Alice" || name == "Bob") {
//         var text = "Welcome";
//         return text + " " + name;
//     }else {
//         return "Go to hell!";
//     }
// }
// var welcomeText =  greeting(name1);
// alert(welcomeText);

//7
// var product cost = 3.45; 
//There should not be any whitespaces in variable name

//8
// var user1 = prompt('Enter your name')
// function friend(user) {
//     if(user == "Sam") {
//         return ("Hello " + user + ", How are you doing?");
//     }
// }
// var friends = friend(user1);
// alert(friends);

//9
//first "Hello World" and last 'Hello World' is right.

//10
// var input = prompt('Write something here');
// console.log(input.length);

//11
var age = 26;   //Age of the owner
var age1 = age/7;
console.log(age1);

//12
// Marks and max marks of the student
var studentScore = 41;
var maxScore = 100;
var percentage = (studentScore * 100) / maxScore;
console.log(percentage);

//13
var city = 'Dharamshala';
var country = 'India';
function message(a, b) {
    return (a + ", " + b);
}
var warn = message(city, country);
alert(warn);
