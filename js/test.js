'use strict';
//Получить 
const h1 = document.getElementsByTagName('h1')[0];
const test = document.querySelectorAll('select .views-select');
const test2 = document.querySelector('.rollback');

const test3 = document.querySelector('.main-controls__range input[type=range]');
const test4 = document.querySelector('input[type=range]');
const imputRange = document.querySelector('.main-controls__range > input[type=range]');

const rangeValueSpan = document.querySelector('.rollback .range-value');
const h3 = document.querySelector('h3');


const totalInput = document.getElementsByClassName('total-input');
const totalInput0 = document.getElementsByClassName('total-input')[0];
const totalInput1 = document.getElementsByClassName('total-input')[1];
const totalInput2 = document.getElementsByClassName('total-input')[2];
const totalInput3 = document.getElementsByClassName('total-input')[3];
const totalInput4 = document.getElementsByClassName('total-input')[4];

const selects = document.querySelectorAll('select option');
const testInput = document.querySelectorAll('input[type=text]');

const screens = document.querySelectorAll('.screen option');



//Проверка
console.log(h1);
console.log(test);
console.log(test2);
console.log('inputs >>>');
console.log(test3);
console.log(test4);
console.log(imputRange);
console.log('range >>>');
console.log(rangeValueSpan);
console.log(h3);
console.log('total imputs >>>');
console.log(totalInput);
console.log(totalInput0);
console.log(totalInput1);
console.log(totalInput2);
console.log(totalInput3);
console.log(totalInput4);

console.log(selects);
console.log(testInput);

console.log(screens);

//Тест
rangeValueSpan.innerHTML = '<b>150%</b>';