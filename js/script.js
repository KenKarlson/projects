'use strict';
// объявление переменных
let title = prompt('Как называется ваш проект ? ', '');
let screens = prompt('Какие типы экранов нужно разработать? ', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service01 = prompt('Какой дополнительный тип услуги нужен?', '');
let servicePrice01 = +prompt('Сколько будет стоить данная работа?');
let service02 = prompt('Какой дополнительный тип услуги нужен?', '');
let servicePrice02 = +prompt('Сколько будет стоить данная работа?');
let rollback = 25; //Проценты 
let fullPrice = 0; //Полная стоимость screenPrice + servicePrice01 + servicePrice02
let servicePercentPrice = 0; //Сумма процентов
let allServicePrices = 0; //сумма всех дополнительных услуг

// какой то функционал
// Title
const getTitle = function (elem) {
  let temp;
  if (elem) {
    temp = elem.trim().charAt(0).toUpperCase() + elem.trim().substr(1).toLowerCase();
  } else {
    temp = 'Новый проект';
  }
  return temp;
};
//Узнать тип
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};
//Узнать сумма доп услуг
const getAllServicePrices = function () {
  return servicePrice01 + servicePrice02;
};
// Предоставляемая скидка
const getRollbackMessage = function (price) {
  if (price >= 30000) {
    //fullPrice = fullPrice - (fullPrice * 0.1);
    return 'Даем скидку в 10 %';
  } else if (price >= 15000 && price < 30000) {
    //fullPrice = fullPrice - (fullPrice * 0.05);
    return 'Даем скидку в 5 %';
  } else if (price < 15000 && price > 0) {
    return 'Скидка не предусмотрена';
  } else {
    return 'Что то пошло не так';

  }

};

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
};
//Разбить типы экранов на массив
const getAllScreens = function (elem) {
  let temp = [];
  if (elem) {
    temp = elem.split(' ');
  }
  return temp;
};
//Узнать полную стоимость
function getFullPrice() {
  return screenPrice + allServicePrices;
}


// вывод данных
allServicePrices = getAllServicePrices();
console.log('Стоимость доп услуг: ' + allServicePrices);
fullPrice = getFullPrice();
console.log('Полная стоимость: ' + fullPrice);
servicePercentPrice = getServicePercentPrices();
console.log('Сумма Итого: ' + servicePercentPrice);
console.log('Какие экраны нужно: ' + getAllScreens(screens));



console.log(getTitle(title));
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей.');
console.log(getRollbackMessage(fullPrice));

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);