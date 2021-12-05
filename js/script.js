'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 25,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  service01: '',
  service02: '',

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle(appData.title);


    appData.logger();

  },

  asking: function () {
    appData.title = prompt('Как называется ваш проект ? ', 'Калькулятор верстки');
    appData.screens = prompt('Какие типы экранов нужно разработать? ', 'Простые, Сложные, Интерактивные');

    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    }
    while (!appData.isNumber(appData.screenPrice));
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  getAllServicePrices: function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      let price = 0;
      if (i === 0) {
        appData.service01 = prompt('Какой дополнительный тип услуги нужен?', 'Metric');
      } else if (i === 1) {
        appData.service02 = prompt('Какой дополнительный тип услуги нужен?', 'Send form');
      }
      do {
        price = prompt('Сколько будет стоить данная работа?');
      }
      while (!appData.isNumber(price.trim()));
      sum += Number.parseInt(price);

    }
    return sum;
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getTitle: function (elem) {
    let temp;
    if (elem) {
      temp = elem.trim().charAt(0).toUpperCase() + elem.trim().substr(1).toLowerCase();
    } else {
      temp = 'Новый проект';
    }
    return temp;
  },
  getRollbackMessage: function (price) {
    let temp;
    if (price >= 30000) {
      temp = 'Даем скидку в 10 %';
    } else if (price >= 15000 && price < 30000) {
      temp = 'Даем скидку в 5 %';
    } else if (price < 15000 && price > 0) {
      temp = 'Скидка не предусмотрена';
    } else {
      temp = 'Что то пошло не так';
    }
    return temp;
  },
  getServicePercentPrices: function () {
    return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
  },
  getAllScreens: function (elem) {
    let temp = [];
    if (elem) {
      temp = elem.split(' ');
    }
    return temp;
  },
  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);

    for (let key in appData) {
      console.log('Key: ' + key + ' Value: ' + appData[key]);
    }
    console.log('Finish');
  }
};


appData.start();