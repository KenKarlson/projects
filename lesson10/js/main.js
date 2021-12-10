'use strict';

const book = document.querySelectorAll('.book');
const ulElem = document.querySelectorAll('ul');
const liElem = document.querySelectorAll(' li');
const booksName = document.querySelectorAll('h2 a');
const imgBaner = document.querySelector('.adv');
const nowBook = 'Книга 3. this и Прототипы Объектов';
const nowСhapter8 = 'Глава 8: За пределами ES6';
const cloneChapter = liElem[25].cloneNode(true);

const bookTo = document.querySelectorAll('.book ul li');
//Проверка
console.log(ulElem);
console.log(liElem);
console.log(book);
console.log(book[0]);
console.log(booksName);

console.log('test');
console.log(bookTo);

//Работа
liElem[4].before(liElem[8]);
liElem[3].after(liElem[6]);

liElem[47].after(liElem[55]);
liElem[50].after(liElem[48]);
liElem[54].before(liElem[51]);
liElem[9].after(liElem[2]);

book[1].after(book[0]);
book[0].after(book[4]);
book[5].after(book[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

booksName[4].textContent = nowBook;

imgBaner.style.display = 'none';


ulElem[2].appendChild(cloneChapter);
cloneChapter.textContent = nowСhapter8;
cloneChapter.after(liElem[26]);