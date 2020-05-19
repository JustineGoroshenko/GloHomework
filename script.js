'use strict';
console.log(new Date()  );
let date = new Date();

function getGreeting(){
let hello = document.createElement("p"),
    h = (new Date()).getHours();
      if (h > 23 || h <7)  hello.innerHTML ='Good night! ' ;
      if (h > 6 && h < 12)  hello.innerHTML ='Good morning! '; 
      if (h > 11 && h < 19)  hello.innerHTML ='Good day! '; 
      if (h > 18 && h < 24)   hello.innerHTML ='Good evening! '; 
      document.querySelector('p').appendChild(hello);    
};
function getTime(date){
   let minutes = date.getMinutes(),
      hours = date.getHours(),
      seconds = date.getSeconds(),
      strTime = document.createElement("p"),
      ampm = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'!!!!
      minutes = minutes < 10 ? '0' + minutes : minutes;
      strTime.innerHTML = 'The time is: ' + hours + ':' + minutes + ':'+ seconds+ ampm + ".";
	   document.querySelector('p').appendChild(strTime);
};
function getWeekDay(date) {
   const weekDay= ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"],
   newEl = document.createElement("p");
   newEl.innerHTML = " Today is: " + weekDay[date.getDay()] + ". ";
	document.querySelector('p').appendChild(newEl);
 };
function getNewYear(deadline){
   const dateStop = new Date(deadline).getTime(),
   timeRemaining = Math.floor((dateStop - date) / 1000 / 60 / 60 / 24),
   newEl = document.createElement("p");
   newEl.innerHTML = "Time left utill the New Year is: " + timeRemaining + ' days!';
	document.querySelector('p').appendChild(newEl);
}
getGreeting();
getTime(date);
getWeekDay(date);
getNewYear('01 01 2021');
