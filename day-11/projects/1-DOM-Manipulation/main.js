// Change the background color of box1 to 'orange'

let box1 = document.getElementById('box1');
box1.style.background = "orange";


// set the font size in box1s to 44px

let box1s = document.getElementById('box1s');
box1s.style.fontSize = "44px";

// shrink box2 by half

let box2 = document.getElementById('box2');
box2.style.height = "100px";
box2.style.width = "125px";

// double the size of box2s

let box2s = document.getElementById('box2s');
box2s.style.width = "500px";
box2s.style.height = "400px";


// put a circle in the middle of box3 use the class named 'circle' you need to add <div class="circle"></div> in the innerHTML of the box
// **using .innerHTML**

let box3 = document.getElementById('box3');
box3.innerHTML = '<div class="circle"></div>';


// **using .appendChild()**

let circleBox3 = document.createElement('div');
circleBox3.className = "circle";
box3.appendChild(circleBox3);


//remove the circle from box3s
// **using .innerHTML**

let box3s = document.getElementById('box3s');
box3s.innerHTML = '<div class="circle"></div>';
box3s.innerHTML = '';


// **using .removeChild()**
// let circleBox3s = document.createElement('div');
// circleBox3s.className = "circle";
// box3s.appendChild(circleBox3s);
// box3s.parentNode.removeChild(circleBox3s);



// write a function for #box5 called clearFinished that will remove all the chores in the list that have the class "done".

// function clearFinished() {
//     let done = box5.querySelectorAll('#box5 ul li');
//     done.forEach(element => {
//         if (element.classList.contains("done")) {
//             element.style.display = "none";
//         }
//     });
//     console.log(done);
// }
// clearFinished();


//write a function for #box5 that takes all the completed chores and moves them to #box5s

// let box5s = document.getElementById('box5s');
// function completedChores() {
//     let done = box5.querySelectorAll('#box5 ul li');
//     done.forEach(element => {
//         if (element.classList.contains("done")) {
//             box5s.appendChild(element);
//         }
//     });
//     console.log(done);
// }

// write a function called addChore that adds a new item to the list of chores, giving it the class "undone."

//do this task using the .appendChild() or innerHTML

function addChore() {
    let done = box5.querySelector('#box5 ul');
    let unDone = document.createElement('li');
    unDone.innerText = "Remove child (undone)"
    unDone.className = "undone"
    done.appendChild(unDone);
    console.log(done);
}

//reverse the text in #box6

let box6Text = document.querySelector('#box6 p').textContent;
var str = box6Text.split(' ').reverse().join(' ');
box6Text.innerText = str;

// put <em></em> tags around the word "keep" in #box6s

let box6sText = document.querySelector('#box6s p').textContent;
var arr = box6sText.split(' ');
var addEm = arr.map(element => {
    if (element == "keep") {
        return `<em>${element}</em>`;
    }
    return element;
});
// box6sText.innerText = addEm
console.log(addEm.join(' '));

