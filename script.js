'use strict';
function DomElement(selector, options){
   this.selector = selector;
   this.height = options.height;
   this.width = options.width;
   this.background = options.background;
   this.fontSize = options.fontSize;
};
DomElement.prototype.createB = function(){
      if( this.selector === ".block"){
         let newDiv = document.createElement('div');
         newDiv.classList.add('.block');
         newDiv.style.cssText = "height: 100px; width: 120px; background:pink;font-size:55px";
         newDiv.innerHTML = "Babi";
         document.body.appendChild(newDiv);     
      } else  {
        let p = document.createElement('p');
         p.setAttribute("id", "aidi");
         p.innerHTML = "Buba";
         p.style.cssText = "height: 100px; width: 120px; background:red;font-size:55px";
         document.body.appendChild(p);
      } 
   };

let classN = new DomElement(".block", "options");
let idN = new DomElement("#block", "options");

classN.createB();
console.log(typeof classN);
idN.createB();
console.log(idN);




