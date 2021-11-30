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
const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
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

const getServicePercentPrices = function (elem1, elem2) {
  return (elem1 * (elem2 / 100));
};
//Разбить типы экранов на массив
const getAllScreens = function (elem) {
  let temp = [];
  if (elem) {
    temp = elem.split(' ');
    console.log('test elem');
  }
  return temp;
};
//Узнать полную стоимость
function getFullPrice(price1, price2) {
  return price1 + price2;
}


// вывод данных
allServicePrices = getAllServicePrices(servicePrice01, servicePrice02);
console.log('Все доп услуги: ' + allServicePrices);
fullPrice = getFullPrice(screenPrice, allServicePrices);
console.log('Полная стоимость: ' + fullPrice);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
console.log('Сумма отката: ' + servicePercentPrice);
console.log('Какие экраны нужно: ' + getAllScreens(screens));



console.log(getTitle(title));
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей.');
console.log(getRollbackMessage(fullPrice));

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);