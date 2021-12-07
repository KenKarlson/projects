'use ctrict';

const title = document.getElementsByTagName('h1')[0].innerHTML;
const handlerBtnStart = document.getElementsByClassName('handler_btn')[0];
const handlerBtnReset = document.getElementsByClassName('handler_btn')[1];
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.percent');
const otherItemsNumber = document.querySelectorAll('.number');

const rangeValueSpan = document.querySelector('.rollback').querySelector('.range-value');

const totalInput = document.getElementsByClassName('total-input');

let screenSelect = document.querySelectorAll('.screen');

console.log(title);
console.log(handlerBtnStart);
console.log(handlerBtnReset);
console.log(screenBtn);
console.log(otherItemsPercent);
console.log(otherItemsNumber);

console.log(totalInput);

console.log(screenSelect);

console.log(rangeValueSpan);