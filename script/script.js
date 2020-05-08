"use strict";
let
todoControl = document.querySelector(".todo-control"),
headerInput = document.querySelector(".header-input "),
todoList = document.querySelector(".todo-list "),
todoCompleted = document.querySelector(".todo-completed");


let todoData = JSON.parse(localStorage.getItem("todoData"));  
if (!todoData) {
   todoData = []}
//if we do not have anything in tododata we are
//parsing an empty [] to LocalStorage. Because, if there are no elements
//the todo is null and it gives you an error before even start.

function local(){
   localStorage.setItem("todoData", JSON.stringify(todoData)); 
};
const delItem = function(itemToDelete){
   let newTodoData = [];
   todoData.forEach(function(item){
      if(item !== itemToDelete){
         newTodoData.push(item);
      }
   })
   todoData = newTodoData; //we are literally removing useless elements to
   //another array, which is not displayed anywhere. Genius!
}
const render = function() {
   todoList.textContent ='';
   todoCompleted.textContent = '';

   todoData.forEach(function(item){
      const li = document.createElement('li');
      li.classList.add('todo-item');
      li.innerHTML = '<span class="text-todo">' + item.value +'</span>' +
      '<div class="todo-buttons">' +
         '<button class="todo-remove"></button>' +
         '<button class="todo-complete"></button>' +
      '</div>';

      if(item.completed){
         todoCompleted.append(li);
      } else{
         todoList.append(li);         
      };
      
      const btnCompleted = li.querySelector('.todo-complete');
      btnCompleted.addEventListener('click', function(){
         item.completed = !item.completed;
         render();
         local();
      });
      
      const btnRemove = li.querySelector('.todo-remove');
      btnRemove.addEventListener('click', function(){
         delItem(item);
         render();  
      });
   })
  local();
};
todoControl.addEventListener("submit", function(event){
      event.preventDefault();
      
      if(headerInput.value === ''){
         headerInput.setAttribute("Placeholder", 'Add your activity...')
         return;
      }else{
      const newTodo = {
         value: headerInput.value,
         completed:false
      };
      todoData.push(newTodo);    
      render();
   }
      headerInput.value = "";
});
if(todoData){
   render();
} else {
   todoData = [];// render only if there is an object present.
}
