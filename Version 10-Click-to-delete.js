Version 10- Click to delete
•	The ‘return’ statement
•	Requirements
•	There should be a way to create delete buttons
•	There should be a delete buttons for each todo
•	Each li should have a id that has the todo position
•	Delete buttons should have access to the todo id
•	Clicking delete should update todoList.todos and the DOM
•	Cleanup and Review

var todoList = {
  todos: [], 
  // add todo method adds an object with todoText and boolean val
  addTodos: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  // change todos of todoText
  changeTodos: function(position,newTodo) {
    this.todos[position].todoText = newTodo;
  },
  deleteTodos: function(position) {
    this.todos.splice(position,1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function(){
    var totalCompleted = 0;
    for(var i=0; i < this.todos.length; i++)
    {
      if(this.todos[i].completed === true)
      {
        totalCompleted++;
      }
    }
    //if everything is true make everything false
    if(totalCompleted === this.todos.length){
      for(var i=0; i < this.todos.length; i++){
        this.todos[i].completed = false;
      } 
    }
    else
      for(var i=0; i < this.todos.length; i++){
        this.todos[i].completed = true;
      }
    // else make everything true
  }
};
var handlers = {
  addTodos: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodos(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodos: function(){
    var changeTodosPositionInput = document.getElementById('changeTodosPositionInput');
    var changeTodosTextInput = document.getElementById("changeTodosTextInput");
    todoList.changeTodos(changeTodosPositionInput.valueAsNumber,changeTodosTextInput.value);
    changeTodosPositionInput.value = "";
    changeTodosTextInput.value = '';
    view.displayTodos();
  },
  deleteTodos: function(){
        var deleteTodosPositionInput = document.getElementById('deleteTodosPositionInput');
        todoList.deleteTodos(deleteTodosPositionInput.valueAsNumber);
        changeTodosPositionInput.value = '';
        view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedTextInput = document.getElementById('toggleCompletedTextInput');
    todoList.toggleCompleted(toggleCompletedTextInput.valueAsNumber);
    toggleCompletedTextInput.value = '';
    view.displayTodos();
  }

};

// •	Requirements
// •	Inserting li elements into the DOM
// •	There should be an li element for every todo
// •	Each li element should contain .todoText
// •	Each li element should show .completed
// •	Escaping the console
// •	Review

var view = {
	displayTodos: function(){
		var todoUl = document.querySelector('ul');
		todoUl.innerHTML = '';

		for(var i = 0; i < todoList.todos.length;i++) {
			var todoTextWithCompletion = '';
			var todo = todoList.todos[i];

			if(todo.completed === true){
				todoTextWithCompletion = '( * )' + todo.todoText;
			} else {
				todoTextWithCompletion = '(  )' + todo.todoText;
			}
// Inserting li elements into the DOM
			var todoLi = document.createElement('li');
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton() );
			todoUl.appendChild(todoLi);
		}
		
		},
		createDeleteButton: function() {
			var deleteButton = document.createElement('button');
			deleteButton.textContent = 'Delete';
			deleteButton.className = 'deleteButton';
			return deleteButton;


	}
};
