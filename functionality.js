var newTodo = document.getElementById("new-todo");
var submit = document.getElementById("submit");
var todoList = document.getElementById("todo-list");
var toggleAll = document.getElementById("toggle-all");
var clearCompleted = document.getElementById("clear-completed");

function newElement() {
    toggleAll.disabled = false;
    var li = document.createElement("li");
    var inputValue = document.getElementById("new-todo").value;
    var text = document.createElement('span');
    text.innerText = inputValue;
    var radiobox = document.createElement('input');
    radiobox.type = 'checkbox';
    var close = document.createElement('button');
    close.innerText = '\u00D7';

    li.appendChild(radiobox);
    li.appendChild(text);
    li.appendChild(close);

    if (inputValue === '') {
      alert("You forgot to type something!");
    }
    else {
      todoList.appendChild(li);
    }

    newTodo.value = "";
}

function todoSubmited() {
    newElement();
}

newTodo.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        submit.click();
    }
});

toggleAll.addEventListener('click', function() {
  var check;
  var text;
  for (var i = 0; i < todoList.children.length; i++) {
      check = todoList.children[i].children[0];
      todo = todoList.children[i].children[1];
      if (this.checked) {
        if (!check.checked) {
          check.checked = true;
          todo.classList.add('completed');
        }
      } else {
        if (check.checked) {
          check.checked = false;
          todo.classList.remove('completed');
        }
      }
}});

todoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'INPUT') {
        var todo = e.target.nextElementSibling;
        if (e.target.checked) {
            todo.classList.add('completed');
        } else {
            todo.classList.remove('completed');
        }
    }
});

todoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});
