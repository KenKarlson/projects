"use strict"
let num = 266219;
let arr = ('' + num).split('');
console.log(arr);
let temp = 1;
for (let i = 0; i < arr.length; i++) {
  temp = temp * arr[i];
}
console.log(temp);
console.log(String(temp ** 3).slice(0, 2));