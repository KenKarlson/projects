'use strict';

let language = prompt('Введите язык', 'ru en');

const dayOfTheWeek = {
  'Понедельник': 'Monday',
  'Вторник': 'Tuesday',
  'Среда': 'Wednesday',
  'Четверг': 'Thursday',
  'Пятница': 'Friday',
  'Субота': 'Saturday',
  'Воскресенье': 'Sunday'
};

let daysOfTheWeekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота', 'Воскресенье'];
let daysOfTheWeekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


let temp = language.toLowerCase();

function getRuDay() {
  console.log(JSON.stringify(daysOfTheWeekRu));
}

function getEnDay() {
  console.log(JSON.stringify(daysOfTheWeekEn));
}
if (language) {
  let out = '';
  if (temp == 'ru') {
    console.log(JSON.stringify(daysOfTheWeekRu));

    for (let key in dayOfTheWeek) {
      out += key + ', ';
    }
    console.log(out);
  } else if (temp == 'en') {
    console.log(JSON.stringify(daysOfTheWeekEn));
    for (let key in dayOfTheWeek) {
      out += dayOfTheWeek[key] + ', ';
    }
    console.log(out);
  } else {
    console.log('Непонятненько');
  }
} else {
  console.log('Непонятненько');
}

function newSwitch() {
  switch (temp) {
    case 'ru':
      getRuDay();
      break;
    case 'en':
      getEnDay();
      break;
    default:
      console.log('Непонятненько');
      break;
  }
}
newSwitch();

let namePerson = prompt('введите имя', 'Артем, Александр, другое');

function testPerson(person) {
  person = (namePerson == 'Артем') ? 'Директор' :
    (namePerson == 'Александр') ? 'Преподаватель' : 'Студент';

  console.log(person);
}
testPerson(namePerson);

function getLangDay(temp) {



}