'use strict'
 let button = document.querySelector("#change"),
     code = document.querySelector("#color");

button.addEventListener("click", function(){
  let rand = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + rand;
  code.innerHTML = "#"+rand;
});