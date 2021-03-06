let text = document.querySelector('.todo-text');
let list = document.querySelector('.todo-list');

// Add List

let listItem = JSON.parse(localStorage.getItem('todos')) || [];
function addList() {
    let Obj = {
        name : "",
        done : false
    }
    Obj.name = text.value;
    listItem.push(Obj);
    localStorage.setItem('todos', JSON.stringify(listItem));
}

// Display List
function displayTodo(){
    var li = document.createElement('li');
    var checkBox = document.createElement('input');
    if (text.value) {
        listItem.forEach((elem, i) => {
          li.innerText = elem.name;
          li.setAttribute('data-id', i);
          li.style.fontSize = "23px";
          li.style.textTransform = "capitalize";
          list.appendChild(li);
          checkBox.setAttribute('type', 'checkbox');
          checkBox.setAttribute('data-id', i);
          checkBox.setAttribute('checked', '');
          checkBox.style.height = "20px";
          checkBox.style.width = "20px";
          checkBox.style.outline = "none";
          li.prepend(checkBox);
          checkBox.checked = false;

          // Delete button

          var deleteBtn = document.createElement('button');
          deleteBtn.innerText = "X";
        //   deleteBtn.style.height = "30px";
        //   deleteBtn.style.width = "30px";
        //   deleteBtn.style.borderRadius = "50%";
        //   deleteBtn.style.outline = "none";
        //   deleteBtn.style.background = "transparent";
        //   deleteBtn.style.color = "darkgrey";
        //   deleteBtn.style.border = "2px solid darkgrey";
        //   deleteBtn.style.cursor = "pointer";
          li.appendChild(deleteBtn);
          (deleteBtn.onclick = function() {
              if (checkBox.checked) {
                elem.done = true;
                this.parentNode.remove();
              }
          })
            
        })
        text.value = "";
    }
}
 
console.log(listItem);

function eventListen(e) {
    if (e.code == "Enter") {
        addList();
        displayTodo();
    }
}

displayTodo();

text.addEventListener("keydown", eventListen);
