let form = document.querySelector('.form-element')
let itemList = document.querySelector('ul');
let completeList = document.querySelector('.complete')
let activeList = document.querySelector('.active')
let all = document.querySelector('.all');
let clearComplete = document.querySelector('.clear-link');
let counting = document.getElementById('number-counting');

let arrList = JSON.parse(localStorage.getItem('list')) || [];
console.log(arrList)
// Add List

function addList(e) {
    e.preventDefault();
    const name = (document.querySelector('[type=text]')).value;
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
            <li>
                <input class="check" type = "checkbox" data-index = ${i} id = "listContainer${i}" ${element.done ? 'checked' : ''}></input>
                <label for = "listContainer${i}" class= "${element.done ? 'linethrough' : '' }" >${element.name}</label>
                <button data-id ="${i}" class="delete">X</button>
            </li>
        `
    }).join('');
    itemLeft();
}

// Delete List

function deleteList(e) {
    if (e.target.classList.contains('delete')) {
        let id = e.target.dataset.id;
        arrList.splice(id, 1);
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

// Completed

function completedItem() {
    let onlyCompleted = arrList.filter(elem  => elem.done);
    localStorage.setItem('completedItems', JSON.stringify(onlyCompleted));
    displayList(JSON.parse(localStorage.getItem('completedItems')), itemList);
}

// Active

function activeItem() {
    let onlyActive = arrList.filter(elem => !elem.done);
    localStorage.setItem('activeItems', JSON.stringify(onlyActive));
    displayList(JSON.parse(localStorage.getItem('activeItems')), itemList);
}

// All

function allItem() {
    localStorage.setItem('allLists', JSON.stringify(arrList));
    displayList(JSON.parse(localStorage.getItem('allLists')), itemList);
}

// Clear Completed

function clearCompleted(e) {
    e.preventDefault();
    arrList = arrList.filter(item => !item.done);
    localStorage.setItem('allLists', JSON.stringify(arrList));
    displayList(JSON.parse(localStorage.getItem('allLists')), itemList);
}

// Items left

function itemLeft() {
    var itemLeft = arrList.filter(v => !v.done ).length;
    counting.innerText = `${itemLeft} Items Left`
}

console.log(arrList);



form.addEventListener('submit', addList);
itemList.addEventListener('click', deleteList);

itemList.addEventListener('click', toggleDone);

completeList.addEventListener('click', completedItem);
activeList.addEventListener('click', activeItem);
all.addEventListener('click', allItem);
clearComplete.addEventListener('click', clearCompleted);


displayList(arrList, itemList);
itemLeft()