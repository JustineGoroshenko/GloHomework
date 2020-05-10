'use strict';







function DomElement(selector, options){
   this.selector = selector;
   options || options ||{};
   this.height = options.height;
   this.width = options.width;
   this.background = options.background;
   this.fontSize = options.fontSize;
   
};

DomElement.prototype.createB = function(){
      if( this.selector.value === ".block"){
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
         document.body.appendChild(p);console.log('works');
      } 
   }

let obj = {

}




let classN = new DomElement(".block", "options");
let idN = new DomElement("#block", "options");
console.log()

classN.createB();
console.log(classN);
idN.createB();
console.log(idN);





   //
   //
function Car(model , color){
   this.model = model;
   this.color = color;
}
Car.prototype.ride = function(){ 
 console.log("go");
}

let car1 = new Car("Mazda", "Red");
let car2 = new Car("Vaz", "black");
car1.ride();
console.log(car1);
console.dir(Car);


let carTest = {
 model: "mazda"
};
