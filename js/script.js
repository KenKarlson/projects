"use strict"
let title = 'I learning JS',
  screens = 'Простые, Сложные, Интерактивные',
  screenPrice = 99,
  rollback = 2,
  fullPrice = 150000,
  adaptive = true;

console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
screens = screens.toLowerCase();
console.log(screens.split(','));
console.log((fullPrice * (rollback / 100)));