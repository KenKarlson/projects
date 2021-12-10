'use strict';

const btn = document.getElementById('btn');
const eBtn = document.getElementById('e_btn');
const circle = document.getElementById('circle');
const inputText = document.getElementById('text');
const squareBox = document.getElementById('square');
const range = document.getElementById('range');


console.log(inputText.value);
console.log(range.value);

btn.addEventListener('click', () => {
  if (inputText.trim != '') {
    squareBox.style.backgroundColor = inputText.value;
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
  }
});
eBtn.style.display = 'none';