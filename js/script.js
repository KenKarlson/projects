'use ctrict';

const title = document.getElementsByTagName('h1')[0];
const handlerBtnStart = document.getElementsByClassName('handler_btn')[0];
const handlerBtnReset = document.getElementsByClassName('handler_btn')[1];
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.percent');
const otherItemsNumber = document.querySelectorAll('.number');
let imputRange = document.querySelector('.main-controls__range input[type=range]');
const rangeValueSpan = document.querySelector('.rollback .range-value');
const totalInput = document.getElementsByClassName('total-input');
const totalInput0 = document.getElementsByClassName('total-input')[0];
const totalInput1 = document.getElementsByClassName('total-input')[1];
const totalInput2 = document.getElementsByClassName('total-input')[2];
const totalInput3 = document.getElementsByClassName('total-input')[3];
const totalInput4 = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen option');


//test
console.log(title);
console.log(rangeValueSpan);
console.log(handlerBtnStart);
console.log(handlerBtnReset);
console.log(screenBtn);
console.log(otherItemsPercent);
console.log(otherItemsNumber);
console.log(totalInput);
console.log(imputRange);
console.log(screens);