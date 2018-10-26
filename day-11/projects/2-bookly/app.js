
let mainList = document.querySelector('.book-wrapper');
let addBtn = document.querySelector('button');

let listItem = JSON.parse(localStorage.getItem('todo')) || [];

// Add Book

function addBook(e) {
    e.preventDefault();
    let input = document.querySelector('.add-book');
    if (!input.value) return;
    listItem.push(input.value);
    input.value = '';
    displayBook(listItem);
}

// Display Book

function displayBook(data = []) {
    mainList.innerHTML = "";
    data.forEach((elem, i) => {
    let bookList = document.createElement('li');
        bookList.innerText = elem;
        bookList.setAttribute('data-id', i);
        mainList.appendChild(bookList);
        let deleteBtn = document.createElement('button');
        deleteBtn.className = "delete";
        deleteBtn.innerText = 'Delete';
        deleteBtn.setAttribute('data-id', i);
        bookList.appendChild(deleteBtn);
    })
    localStorage.setItem('todo', JSON.stringify(listItem));
}

// Delete Book

function deleteBook(e) {
    if (e.target.classList.contains('delete')) {
        let id = e.target.dataset.id;
        listItem.splice(id, 1);
        displayBook(listItem);
    }
}

// Hide books

let hideList = document.querySelector('#hide');
function hideBook(e) {
    if (e.target.checked == true) {
        mainList.innerHTML = "";
    } else if (e.target.checked == false) {
        displayBook(listItem);
    }
}

hideList.addEventListener("click", hideBook);

// Search Books

let search = document.querySelector('.search-book');
function searchBook(e) {
    let changeCase = e.target.value.toLowerCase();
    let searchItem = listItem.filter( (elem) => elem.toLowerCase().includes(changeCase) );
    displayBook(searchItem);
    console.log(searchItem);
}
search.addEventListener('keyup', searchBook);

displayBook(listItem);


addBtn.addEventListener("click", addBook);

mainList.addEventListener("click", deleteBook);