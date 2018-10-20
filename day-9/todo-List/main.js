let text = document.querySelector('.todo-text');
let button = document.querySelector('.btn');
let list = document.querySelector('.todo-list');


function addList(event) {
    var listItem = document.createElement('li');
    if (text.value) {
        listItem.innerText = text.value;
        list.appendChild(listItem);
        text.value = '';
    }
}


button.addEventListener("click", addList);