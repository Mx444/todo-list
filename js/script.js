"use strict";

const taskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function todosApp() {
  const li = document.createElement("li");
  const taskContent = taskInput.value;
  li.innerHTML = `<span>${taskContent}</span><i class="far fa-circle"></i><i class="fas fa-edit"></i><i class="fas fa-trash"></i>`;

  function validateInut(input) {
    return input !== "" && input.length <= 20;
  }

  //Status ⭕/✅
  const iconCircle = li.querySelector(".far.fa-circle");
  iconCircle.addEventListener("click", () => {
    if (iconCircle.classList.contains("fa-circle")) {
      iconCircle.classList.replace("fa-circle", "fa-check-circle");
    } else if (iconCircle.classList.contains("fa-check-circle")) {
      iconCircle.classList.replace("fa-check-circle", "fa-circle");
    }
  });

  //Edit ✒️
  const iconEdit = li.querySelector(".fas.fa-edit");
  iconEdit.addEventListener("click", () => {
    const editTask = prompt("✒️ Edit task");
    if (!validateInut(editTask)) {
      window.alert("Invalid task! ❌");
    } else {
      li.querySelector("span").innerText = editTask;
    }
  });

  //Delete 🗑️
  const iconTrash = li.querySelector(".fas.fa-trash");
  iconTrash.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  if (!validateInut(taskContent)) {
    window.alert("Invalid task! ❌");
  } else {
    taskList.appendChild(li);
  }
}

addTaskBtn.addEventListener("click", todosApp);
