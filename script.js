'use strict';

class First {
  hello() {
    return 'I am a method of a parent element' 
  }
}
class Second extends First {
  show() {
    return this.hello() + '... and I am a child method ;)';
  }
}
let second = new Second();
console.log(second.show());