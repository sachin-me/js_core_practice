let addBtn = document.querySelector('.add');
let list = document.querySelector('ul');
let input = document.querySelector('.input');
let srcEl;

function dragStart(e) {
  console.log('drag start');
  e.target.style.opacity = "0.5";
  srcEl = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
  console.log(e.target);
}
function dragEnter(e) {
  e.target.classList.add('over');
  console.log('drag enter');
}
function dragLeave(e) {
  e.stopPropagation();
  e.target.classList.remove('over');
  console.log('drag leave');
}
function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}
function dragDrop(e) {
  if (srcEl != e.target) {
    srcEl.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}
function dragEnd(e) {
  var col = document.querySelectorAll('.draggable');
  col.forEach.call(col, function(element) {
    element.classList.remove('over');
  });
  e.target.style.opacity = '1';
  console.log('drag end');
}

var col = document.querySelectorAll('.draggable');
col.forEach.call(col, function(item) {
  addEvent(item);
});

function addEvent(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}



// Add list

function addList() {
  let inputText = (document.querySelector('.input')).value;
  if(!inputText) return;
  displayList();
  (document.querySelector('.input')).value = '';
}

// Display list

function displayList() {
  let li = document.createElement('li');
  li.innerText = input.value;
  li.className = "draggable";
  li.setAttribute('draggable', 'true');
  list.appendChild(li);
  addEvent(li);
  console.log(li);
}

addBtn.addEventListener('click', addList);