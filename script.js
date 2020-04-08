'use strict';

const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const getRandomNum = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) +min;
}

const getCounter = function(){
  let counter = 0;
  return function(){
    return counter++;
  }
};
const gameRandom = function(attempts) {
  const randomNum = getRandomNum(1, 100);
  console.log(randomNum);
  const counter = getCounter();

  return function checkNumber(){
    const count = counter();    
    const userNumber = prompt('Try to guess a number');
    console.log(count);

    if(isNum(userNumber)){
      let repeat = false;
       if (count < attempts){
        const num = +userNumber;
          if(num> randomNum) {
            alert('The number is smaller');
            return checkNumber();
          } if(num < randomNum){
            alert('The number is bigger');
            return checkNumber();
          }
           repeat = confirm('You have won! Want to try again?');
      } else{
         repeat = confirm('No attempts left, Like to try again?')
      }
      if(repeat) gameRandom(attempts);
       
    }else{ 
      alert('Insert a number!');
     checkNumber();
    }
  }
}
const game = gameRandom(10);
game();