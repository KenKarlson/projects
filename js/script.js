'use strict';

let title = prompt('Как называется ваш проект ? ', '');
let screen = prompt('Какие типы экранов нужно разработать? ', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service01 = prompt('Какой дополнительный тип услуги нужен?', '');
let servicePrice01 = +prompt('Сколько будет стоить данная работа?');

let service02 = prompt('Какой дополнительный тип услуги нужен?', '');
let servicePrice02 = +prompt('Сколько будет стоить данная работа?');

let rollback = 25;

let fullPrice = screenPrice + servicePrice01 + servicePrice02; //полная стоимость

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice / 100 * rollback)); //вычесть процент посредника


if (fullPrice >= 30000) {
  fullPrice = fullPrice - (fullPrice * 0.1);
  console.log('Даем скидку в 10 %');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  fullPrice = fullPrice - (fullPrice * 0.05);
  console.log('Даем скидку в 5 %');
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log('Скидка не предусмотрена');
} else {
  console.log('Что то пошло не так');
}