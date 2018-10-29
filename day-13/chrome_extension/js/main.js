let clock = document.querySelector('.clock');
let promptInput = document.querySelector('.prompt-input');
let mainPrompt = document.querySelector('.prompt-name');
let greetText = document.querySelector('.user-greet');

//======================
// Clock
//======================

function setDate() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (seconds < 10) {
        seconds =`0${seconds}`;
    } 
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    if (hours < 12) {
        greetText.innerText =  `Good Morning`
    } else if (hours >= 12 && hours <= 16) {
        greetText.innerText = `Good Afternoon`
    } else if (hours > 16 && hours <=20 ) {
        greetText.innerText = `Good Evening`
    } else if (hours <= 24) {
        greetText.innerText = `Good Night`
    }
    // greet(hours);
}

setInterval(setDate, 1000);
setDate();

//======================
// Greeting
//======================

let userName = (localStorage.getItem('user')) || "";
function greetingText(e) {
    if (!userName) {
        let promptText = (document.querySelector('.prompt-input')).value;
        userName = promptText;
    }
    mainPrompt.innerHTML = `<h1>Welcome ${userName}</h1>`;
    localStorage.setItem('user', (userName));
}
if (userName) {
    greetingText();
}

promptInput.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        greetingText();
    }
})

//======================
// To Do List
//======================

let form = document.querySelector('.form-element')
let itemList = document.querySelector('ul');


let arrList = JSON.parse(localStorage.getItem('list')) || [];
console.log(arrList)
// Add List

function addList(e) {
    e.preventDefault();
    const name = (document.querySelector('.form-input')).value;
    let listContainer = {
        name,
        done: false 
    }
    if(!name) return;
    arrList.push(listContainer);
    displayList(arrList, itemList);
    localStorage.setItem('list', JSON.stringify(arrList));
    this.reset();
}

// Display List

function displayList(items = [], itemsList) {
    itemsList.innerHTML = items.map((element, i) => {
        return `
            <li class="todoList">
                <input class="check" type = "checkbox" data-index = ${i} data-id = "${i}" ${element.done ? 'checked' : ''}></input>
                <label for = "${i}" class= "${element.done ? 'linethrough' : '' }" >${element.name}</label>
                <button data-id ="${i}" class="delete">X</button>
            </li>
        `
    }).join('');
}

// Delete List

function deleteList(e) {
    if (e.target.classList.contains('delete')) {
        let id = e.target.dataset.id;
        arrList.splice(id, 1);
        localStorage.setItem('list', JSON.stringify(arrList));
        displayList(arrList, itemList);
    }
}

// Toggle

function toggleDone(e) {
    if (!e.target.classList.contains('check')) return;
    const index = e.target.dataset.index;
    arrList[index].done = !arrList[index].done;
    localStorage.setItem('list', JSON.stringify(arrList));
    displayList(arrList, itemList);
}

console.log(arrList);

form.addEventListener('submit', addList);
itemList.addEventListener('click', deleteList);
itemList.addEventListener('click', toggleDone);

displayList(arrList, itemList);

