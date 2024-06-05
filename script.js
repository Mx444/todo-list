"use strict";
const asciiArt = `TODO LIST 📝
⚙️ CMD :
✅ addTodo('Description')  
🗑️ removeTodo(id) 
⭕ toggleTodoStatus(id) 
🔧 updateTodoDescription(id, 'newDescription')
`;

console.log(asciiArt);

const taskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

let todos = [];
let id = 0;

function addTodo(Description) {
  if (!taskInput.value) {
    window.alert("Task non valida");
    return;
  }
  const description = taskInput.value || Description;
  var newList = document.createElement("li");
  newList.innerHTML = `${description}<i class="far fa-circle"></i><i class="fas fa-edit"></i><i class="fas fa-trash"></i>`;
  newList.dataset.id = id;
  taskList.appendChild(newList);
  taskInput.value = "";

  todos.push({
    description: description,
    status: false,
    idTodo: id,
  });

  id++;
  console.log(`Aggiunto alla lista ${description} ✅`);
  console.log("Lista aggiornata:", todos);
}
taskList.addEventListener("click", function (e) {
  const target = e.target;
  const id = target.parentElement.dataset.id;
  if (target.classList.contains("fa-trash")) {
    removeTodo(id);
  } else if (
    target.classList.contains("fa-circle") ||
    target.classList.contains("fa-check-circle")
  ) {
    toggleTodoStatus(id);
  } else if (target.classList.contains("fa-edit")) {
    const newDescription = prompt("Nuova Descrizione");
    updateTodoDescription(id, newDescription);
  }
});
addTaskBtn.addEventListener("click", addTodo);

function removeTodo(idTodo) {
  taskList.removeChild(taskList.querySelector(`[data-id='${idTodo}']`));
  todos = todos.filter((todo) => idTodo != todo.idTodo);
  console.log(`Rimosso dalla lista ID = ${idTodo} ✅`);
  console.log("Lista aggiornata:", todos);
}

function toggleTodoStatus(idTodo) {
  const taskElement = taskList.querySelector(`[data-id='${idTodo}']`);
  const iconElement = taskElement.querySelector(".fa-circle, .fa-check-circle");

  if (iconElement) {
    if (iconElement.classList.contains("fa-circle")) {
      iconElement.classList.remove("fa-circle");
      iconElement.classList.add("fa-check-circle");
    } else {
      iconElement.classList.remove("fa-check-circle");
      iconElement.classList.add("fa-circle");
    }
  }

  todos = todos.map((todo) =>
    todo.idTodo === parseInt(idTodo) ? { ...todo, status: !todo.status } : todo
  );
  console.log(`Stato del todo con ID ${idTodo} cambiato ✅`);
  console.log("Lista aggiornata:", todos);
}

function updateTodoDescription(idTodo, newDescription) {
  const taskElement = taskList.querySelector(`[data-id='${idTodo}']`);
  const oldDescription = taskElement.textContent;
  createIcon(taskElement);

  if (newDescription == "") {
    window.alert("Descrizione non valida");
    taskElement.textContent = oldDescription;
    createIcon(taskElement);
  } else {
    taskElement.textContent = newDescription;
    createIcon(taskElement);
  }
  todos = todos.map((todo) =>
    idTodo == todo.idTodo ? { ...todo, description: newDescription } : todo
  );
  console.log(`Todo con ID ${idTodo} aggiornato ✅`);
  console.log("Lista aggiornata:", todos);
}

function createIcon(elem) {
  if (!elem.querySelector(".fa-circle")) {
    const todoIcon = document.createElement("i");
    todoIcon.classList.add("far", "fa-circle", "task-action");
    elem.appendChild(todoIcon);
  }
  if (!elem.querySelector(".fa-edit")) {
    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-edit", "task-action");
    elem.appendChild(editIcon);
  }
  if (!elem.querySelector(".fa-trash")) {
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash", "task-action");
    elem.appendChild(deleteIcon);
  }
}
