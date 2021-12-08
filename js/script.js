'use ctrict';
//9.1
const title = document.getElementsByTagName('h1')[0];
//9.2
const handlerBtnStart = document.getElementsByClassName('handler_btn')[0];
const handlerBtnReset = document.getElementsByClassName('handler_btn')[1];
//9.3
const screenBtn = document.querySelector('.screen-btn');
//9.4
const otherItemsPercent = document.querySelectorAll('.percent');
const otherItemsNumber = document.querySelectorAll('.number');
//9.5
//const inputTypeRange = document.querySelector('.main-controls__range').getElementsByTagName('input')[0].value;
let imputRange = document.querySelector('.main-controls__range input[type=range]');
//9.6
const rangeValueSpan = document.querySelector('.rollback .range-value');
//9.7
const totalInput = document.getElementsByClassName('total-input');
const totalInput0 = document.getElementsByClassName('total-input')[0];
const totalInput1 = document.getElementsByClassName('total-input')[1];
const totalInput2 = document.getElementsByClassName('total-input')[2];
const totalInput3 = document.getElementsByClassName('total-input')[3];
const totalInput4 = document.getElementsByClassName('total-input')[4];
//9.8
let screens = document.querySelectorAll('.screen option');


//test
console.log(title);
console.log(rangeValueSpan);
console.log('btn start & reset >>>');
console.log(handlerBtnStart);
console.log(handlerBtnReset);
console.log('btn >>>');
console.log(screenBtn);
console.log('persent & number >>>');
console.log(otherItemsPercent);
console.log(otherItemsNumber);
console.log('input >>>');
console.log(inputTypeRange);
console.log('total >>>');
console.log(totalInput);

console.log(imputRange);
console.log(screens);