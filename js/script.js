'use ctrict';

const title = document.getElementsByTagName('h1')[0];
const handlerBtnStart = document.getElementsByClassName('handler_btn')[0];
const handlerBtnReset = document.getElementsByClassName('handler_btn')[1];

const buttonPlus = document.querySelector('.screen-btn');

const otherItemsPercent = document.querySelectorAll('.percent');
const otherItemsNumber = document.querySelectorAll('.number');

let imputRange = document.querySelector('.main-controls__range input[type=range]');
const rangeValueSpan = document.querySelector('.rollback .range-value');

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');


const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function(){
    appData.addTitle();
    handlerBtnStart.addEventListener('click',()=>{
      appData.start();
    });
    buttonPlus.addEventListener('click', ()=>{
      appData.addScreenBlock();
    });
  },
  addTitle: function(){
    document.title = (title.textContent);
  },
  start: function () {
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.showResult();
    // appData.getServicePercentPrices();
    // appData.logger();
    console.dir(appData);
  },
  showResult: function(){
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
  },
  addScreens: function(){
    screens = document.querySelectorAll('.screen');
    screens.forEach(function(screen, index){
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value});
    });
    console.log(appData.screens);
  },
  addServices: function(){
    otherItemsPercent.forEach(function(item){
      const check = item.querySelector('input[type=checkbox');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text');

      if(check.checked){
        appData.servicesPercent[label.textContent] = +input.value;
      }
      
    });
    otherItemsNumber.forEach(function(item){
      const check = item.querySelector('input[type=checkbox');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text');

      if(check.checked){
        appData.servicesNumber[label.textContent] = +input.value;
      }
      
    });
  },
  addScreenBlock: function(){
    const clonScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(clonScreen);
  },
  addPrices: function(){
    for(let screen of appData.screens){
      appData.screenPrice += +screen.price;appData.services[key];
    }
    for(let key in appData.services){
      appData.allServicePrices += appData.services[key];
    }
  },
//Подсчет сумма цена проценты
  addPrices: function(){
    for(let screen of appData.screens){
      appData.screenPrice =+ +screen.price;
    }
     for(let key in appData.servicesNumber){
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for(let key in appData.servicesPercent){
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
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
  getAllScreens: function (elem) {
    let temp = [];
    if (elem) {
      temp = elem.split(' ');
    }
    return temp;
  },
 
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
    console.log('Finish');
  }
};


appData.init();