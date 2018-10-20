let text = document.querySelector('.todo-text');
let list = document.querySelector('.todo-list');


function addList() {
    var listItem = document.createElement('li');
    if (text.value) {
        listItem.innerText = text.value;
        list.appendChild(listItem);
        text.value = '';
        listItem.style.listStyleType = "none";
        listItem.style.color = "darkgrey";
        listItem.style.fontSize = "1.5em";
        listItem.style.fontFamily = "Arial, Helvetica, sans-serif"
    }

}

function eventListen(e) {
    if (e.code == "Enter") {
        addList();
    }
}


text.addEventListener("keydown", eventListen);