'use ctrict';

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

const test1 = document.querySelector('.main-controls__select');
const test2 = document.querySelector('.main-controls__input > input[type=text]');
let screens = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screensCount: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicesPricePercent: 0,
  servicesPriceNumber: 0,
  fullPrice: 0,
  rollbackPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  isError: false,

  init: function () {
    this.addTitle();
    startBtn.addEventListener('click', () => {
      this.checkValues();
    });
    buttonPlus.addEventListener('click', () => {
      this.addScreenBlock();
    });
    inputRange.addEventListener('change', () => {
      inputRangeValue.innerHTML = inputRange.value;
      appData.rollback = inputRange.value;
    });
  },
  addTitle: function () {
    document.title = title.textContent;
  },

  checkValues: function () {
    appData.isError = false;
    screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input[type=text');
      if (select.value === '' || input.value === '') {
        appData.isError = true;
      }
    });
    if (!appData.isError) {
      appData.start();
    } else {
      alert('введите данныые');
      test2.addEventListener('change', function () {
        appData.isError = false;
      });
    }
  },
  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    appData.showResult();
  },
  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.screensCount;
    totalCountOther.value = appData.servicesPricePercent + appData.servicesPriceNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.rollbackPrice;
  },
  addScreens: function () {
    screens = document.querySelectorAll('.screen');
    console.log('hello');
    screens.forEach(function (screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screensCount += +input.value;
      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      });
    });
  },
  addServices: function () {
    //For percent
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    //For numbers
    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: function () {
    //Price for screens
    for (let screen of appData.screens) {
      appData.screenPrice += screen.price;
    }
    //Price for Number
    for (let key in appData.servicesNumber) {
      appData.servicesPriceNumber += appData.servicesNumber[key];
    }
    //Price for %
    for (let key in appData.servicesPercent) {
      appData.servicesPricePercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    //Full price
    appData.fullPrice = +appData.screenPrice + appData.servicesPriceNumber + appData.servicesPricePercent;
    //Ful price to rollback
    //appData.rollback =
    appData.rollbackPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));

  },
};

appData.init();