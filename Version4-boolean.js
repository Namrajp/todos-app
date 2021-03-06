// Boolean
// Our objects should store array data as objects
var todoList = {
  todos: [],
  displayTodos: function () {
   console.log("My todos:",this.todos);
  },
  // add todo method adds an object with todoText and boolean val
  addTodos: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  // change todos of todoText
  changeTodos: function(position,newTodo) {
    this.todos[position].todoText = newTodo;
    this.displayTodos();
  },
  deleteTodos: function(position) {
    this.todos.splice(position,1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
 
}

// Version 4 - Booleans
// • Requirements
// • todoList.addTodo should add objects
// • todoList.changeTodos should change the todoText property
// • todoList.toggleCompleted should flip the completed property
// • Review
