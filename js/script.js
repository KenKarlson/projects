'use strict';

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle(appData.title);

    appData.logger();
  },

  asking: function () {
    do {
      appData.title = prompt('Как называется ваш проект ?');
    }
    while (appData.isString(appData.title));


    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt('Какие типы экранов нужно разработать? ');
      }
      while (appData.isString(name));
      let price = 0;
      do {
        price = prompt('Сколько будет стоить данная работа?');
      }
      while (!appData.isNumber(price));
      appData.screens.push({
        id: i,
        name: name + i,
        price: price
      });

    }
    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
      }
      while (appData.isString(name));

      do {
        price = prompt('Сколько будет стоить данная работа?');
      }
      while (!appData.isNumber(price));
      appData.services[name + i] = +price;
    }
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  getAllServicePrices: function () {



    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  isString: function (str) {
    return !isNaN(str);
  },
  getTitle: function (elem) {
    let temp;
    if (elem) {
      temp = elem.trim().charAt(0).toUpperCase() + elem.trim().substr(1).toLowerCase();
    } else {
      temp = 'Новый проект';
    }
    appData.title = temp;
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
    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
  },
  getAllScreens: function (elem) {
    let temp = [];
    if (elem) {
      temp = elem.split(' ');
    }
    return temp;
  },
  getFullPrice: function () {
    appData.screenPrice = appData.screens.reduce((s, i) => s = s + Number.parseInt(i.price), 0);

    appData.fullPrice = Number.parseInt(appData.screenPrice) + Number.parseInt(appData.allServicePrices);
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
    console.log('Finish');
  }
};


appData.start();