"use strict";
let
todoControl = document.querySelector(".todo-control"),
headerInput = document.querySelector(".header-input "),
todoList = document.querySelector(".todo-list "),
todoCompleted = document.querySelector(".todo-completed");

let todoData = [];
function backData(){
   todoData = JSON.parse(localStorage.getItem("todoData"));
   
}
function local(){
   localStorage.setItem("todoData", JSON.stringify(todoData));
   
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
      btnRemove.addEventListener('click', function(event, i){
            if(item.todoData === event.target.innerHTML){
               if(event.onclick){
                  todoData.splice(i , 1);
               }
            }
         render(); 
         local();
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
     local() 
     render();
   }
      headerInput.value = "";
});
backData();//must be here
render();