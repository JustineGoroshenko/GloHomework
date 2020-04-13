'use strict';
/*
const collections = document.querySelectorAll('.collection'),
   secondHead = document.getElementById('second-head'),
   elems = document.querySelectorAll('.elem');

   elems[3].remove(); //removing the element
   collections[1].append(elems[3]); //adds the element in the end of the end of the 
   collections[1].prepend(elems[5]);//adds in a beginning of the list
  
   collections[0].before(collections[1]); //moves [1] before the element [0];
   elems[4].after(elems[0]);// moves elems0 after elems4
   elems[2].replaceWith('privet'); //replacing elements

   const elemClone = elems[3].cloneNode(true);// copy entire element with all thre parameters

   elemClone.classList.add('newElem');
   elemClone.textContent = 'New elem';
   collections[1].append(elemClone);

   elems[2].textContent = 'privet';
   elems[2].innerHTML = <p>'privet'</p>;//inside of elems[4] we created a span

   const newElem = document.createElement('li');// creating a new element as an object not not page yet
   newElem.textContent = 'new Element';// added a text content
   newElem.classList.add('newElem');// added a new class
   collections[1].append(newElem);// added the element on the page in the end of the list

   //inserts text

   secondHead.insertAdjacentText('beforebegin', 'babbababba');//where you are insert  and what secondHead.insertAdjacentText('beforebegin') 
   secondHead.insertAdjacentText('afterend', 'bubububhu');
   secondHead.insertAdjacentText('afterbegin', 'bubububhu');
   secondHead.insertAdjacentText('beforeend', 'bubububhu'); // all appears in style.css


   secondHead.insertAdjacentElement('afterend', 'elems[4]');

   secondHead.insertAdjacentHTML('beforebegin', '<h3>babbababba</h3>')
   secondHead.insertAdjacentHTML('afterend', '<h3>bubububhu</h3>');
   secondHead.insertAdjacentHTML('afterbegin', '<p>bavbabab</p>');
   secondHead.insertAdjacentHTML('beforeend', '<p>bubububhu</p>');
   */

   let bookList = document.querySelectorAll('li'),
       bookTitles = document.querySelectorAll('h2'),
       books = document.querySelectorAll('.book'),
      advert = document.querySelector('.adv')
       ;
   

//1
books[1].after(books[0]);
books[0].after(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);
//2
document.body.style.background = "url('/image/you-dont-know-js.jpg')";
//3
//elems[2].textContent = 'privet';elemClone.classList.add('newElem');

let titleThree = bookTitles[4].cloneNode(true);

bookTitles[4].innerHTML = '<a>Книга 3. this и Прототипы Объектов</a>';

//4
advert.remove();
//5
   bookList[3].after(bookList[6]);
   bookList[6].after(bookList[8]);
   bookList[9].after(bookList[2]);
   bookList[47].after(bookList[55]);
   bookList[55].after(bookList[49]);
   bookList[49].after(bookList[50]);
   bookList[54].after(bookList[56]);
   bookList[53].after(bookList[51]);
//6

//Глава 8: За пределами ES6

bookList[25].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');

