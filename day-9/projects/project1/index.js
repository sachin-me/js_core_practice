//Select the section with an id of container without using querySelector.

let id = document.getElementById('container');
console.log(id);

//Select the section with an id of container using querySelector.

let containerId = document.querySelector('#container');
console.log(containerId);

//Select all of the list items with a class of "second".

let classItem = document.getElementsByClassName('second');
console.log(classItem);

//Select a list item with a class of third, but only the list item inside of the ol tag.

let thirdListItem = document.querySelector('ol');
thirdListItem.getElementsByClassName('third');
console.log(thirdListItem);

//Give the section with an id of container the text "Hello!".

var giveText = document.getElementById('container');
giveText.innerHTML += "Hello!";
console.log(giveText);

//Add the class main to the div with a class of footer.

var main = document.querySelector('.footer');
main.className += " main";
console.log(main);

//Remove the class main on the div with a class of footer.

let removeClass = document.querySelector('.footer');
removeClass.classList.remove("main");
console.log(removeClass);

//Create a new li element.

var createLi = document.createElement('li');

//Give the li the text "four".

createLi.innerText = "four";

//Append the li to the ul element.

var ulElem = document.querySelector('ul');
ulElem.appendChild(createLi);
console.log(ulElem);

//Loop over all of the list inside the ol tag and give them a background color of "green".

let color1 = document.querySelectorAll('ol');
var green = color1.forEach(elem => {
    elem.style.background = "green";
});
// console.log(green);

//Remove the div with a class of footer.

var del = document.querySelector('.footer');
del.remove();
console.log(del);