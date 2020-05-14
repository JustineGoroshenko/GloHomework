'use strict';

class First {
   hello(){
      console.log('Hi, I am a method of a parent element');
   }
 }
class Second {
    constructor() {
        this.first = new First();
    }
    tryingMethod(){
      this.first.hello();
      console.log("And I am a child element");
    }
 }
 var child = new Second();
 child.tryingMethod();