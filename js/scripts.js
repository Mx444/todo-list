"use strict";
class AppTodoList {
  constructor() {
    this.todos = [];
    this.id = 0;
  }

  addTodo(description) {
    this.todos.push({
      description: description,
      status: false,
      idTodo: this.id,
    });
    this.id++;
    console.log(`Aggiunto alla lista ${description} ✅`);
    console.log("Lista aggiornata:", this.todos);
  }
  removeTodo(idTodo) {
    this.todos = this.todos.filter((todo) => idTodo !== todo.idTodo);
    console.log(`Rimosso dalla lista ID = ${idTodo} ✅`);
    console.log("Lista aggiornata:", this.todos);
  }
  toggleTodoStatus(idTodo) {
    this.todos = this.todos.map((todo) =>
      todo.idTodo === idTodo ? { ...todo, status: !todo.status } : todo
    );
    console.log(`Stato del todo con ID ${idTodo} cambiato ✅`);
    console.log("Lista aggiornata:", this.todos);
  }
  updateTodo(idTodo, newDescription) {
    this.todos = this.todos.map((todo) =>
      idTodo === todo.idTodo ? { ...todo, description: newDescription } : todo
    );
    console.log(`Todo con ID ${idTodo} aggiornato ✅`);
    console.log("Lista aggiornata:", this.todos);
  }
}

const todo = new AppTodoList();
