'use strict';

let title = prompt('Как называется ваш проект ? ', '');
let screen = prompt('Какие типы экранов нужно разработать? ', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000, 15000, 30000');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service01 = prompt('Какой дополнительный тип услуги нужен?', '');
let servicePrice01 = +prompt('Сколько будет стоить данная работа?');

let service02 = prompt('Какой дополнительный тип услуги нужен?', '');
let servicePrice02 = +prompt('Сколько будет стоить данная работа?');

let managerInterest = 0.15;

let fullPrice = screenPrice + servicePrice01 + servicePrice02;
console.log('Стоимость: ' + fullPrice);
let managerPrice = fullPrice * managerInterest;
console.log('ЗП Манагера: ' + managerPrice);
let servicePercentPrice = fullPrice - (fullPrice * managerInterest);
console.log('Доход: ' + servicePercentPrice);

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