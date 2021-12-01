'use strict';
// объявление переменных
let title;
let screens;
let screenPrice;
let adaptive;


let rollback = 25; //Проценты 
let fullPrice; //Полная стоимость screenPrice + servicePrice01 + servicePrice02
let servicePercentPrice; //Сумма процентов
let allServicePrices; //сумма всех дополнительных услуг

let service01;
let service02;



// какой то функционал

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};
//Вопросы
const asking = function () {
  title = prompt('Как называется ваш проект ? ', 'Калькулятор верстки');
  screens = prompt('Какие типы экранов нужно разработать? ', 'Простые, Сложные, Интерактивные');

  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  }
  while (!isNumber(screenPrice));

  // while (!isNumber(screenPrice)) {
  //   screenPrice = prompt('Сколько будет стоить данная работа?');
  // }
  adaptive = confirm('Нужен ли адаптив на сайте?');
};


//Узнать сумма доп услуг
const getAllServicePrices = function () {
  let sum = 1;
  let sum1;
  let sum2;
  for (let i = 0; i < 2; i++) {
    if (i == 0) {
      service01 = prompt('Какой дополнительный тип услуги нужен?', 'Metric');
      do {
        sum1 = prompt('Сколько будет стоить данная работа?');
        sum--;
        sum += sum1;
      }
      while (!isNumber(sum1));

    } else if (i == 1) {
      service02 = prompt('Какой дополнительный тип услуги нужен?', 'Send form');
      do {
        sum2 = prompt('Сколько будет стоить данная работа?');
        sum++;
        sum += sum2 - 1;
      }
      while (!isNumber(sum2));
    }

  }
  return sum;
};

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
  return +screenPrice + allServicePrices;
}


// вывод данных
asking();
console.log(screenPrice);
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('Название проекта: ' + title);
console.log('Какие экраны нужно: ' + getAllScreens(screens));
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей.');
console.log('Стоимость доп услуг: ' + allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log('Полная стоимость: ' + fullPrice);
console.log('Сумма Итого: ' + servicePercentPrice);