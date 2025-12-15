// Задание 1
const textCase = "js";

const upperText = textCase.toUpperCase();

console.log(upperText);

// Задание 2

function filterByStartString(word, searchWord) {
  const lowerSearchString = searchWord.toLowerCase();

  const Array = word.filter((item) => {
    const LowerItem = item.toLowerCase();

    return LowerItem.startsWith(lowerSearchString);
  });

  return Array;
}

const products = ["Барбарис", "Яблоко", "Банан", "Батон", "Абрикос"];
const searchElement = "ба";

const result = filterByStartString(products, searchElement);
console.log(`\nЭлементы, начинающиеся с "${searchElement}":`);
console.log(result);

// Задание 3

const Number = 32.58884;

const floorNumber = Math.floor(Number);

const ceilNumber = Math.ceil(Number);

const roundNumber = Math.round(Number);

console.log(`Округление до меньшего целого (Math.floor): ${floorNumber}`);
console.log(`Округление до большего целого (Math.ceil): ${ceilNumber}`);
console.log(`Округление до ближайшего целого (Math.round): ${roundNumber}`);

// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

const maxValue = Math.max(...numbers);

const minValue = Math.min(...numbers);

console.log(`Минимальное значение (Math.min): ${minValue}`);
console.log(`Максимальное значение (Math.max): ${maxValue}`);

// Задание 5

function displayRandomNumber1To10() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  console.log(`Случайное число от 1 до 10: ${randomNumber}`);
}

displayRandomNumber1To10();

// Задание 6

function generateRandomArray(maxNumber) {
  const arrayLength = Math.floor(maxNumber / 2);
  const resultArray = [];

  if (arrayLength <= 0) {
    console.log("Число слишком маленькое");
    return [];
  }

  for (let i = 0; i < arrayLength; i++) {
    const randomNum = Math.floor(Math.random() * (maxNumber + 1));

    resultArray.push(randomNum);
  }

  return resultArray;
}

// Задание 7

function getRandomIntInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = getRandomIntInRange(70, 100);
console.log(`Случайное число от 70 до 100: ${randomNum}`);

// Задание 8

const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

console.log(`Сегодня: ${day}.${month}.${year}`);

// Задание 9

const currentDate = new Date();

const daysInMilliseconds = 73 * 24 * 60 * 60 * 1000;

const dateAfter73Days = new Date(currentDate.getTime() + daysInMilliseconds);

console.log(`Через 73 дня будет: ${dateAfter73Days.toDateString()}`);

// Задание 10
function formatRussianDate(dateObj) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const weekdays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  const dayOfMonth = dateObj.getDate();
  const monthName = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const weekdayName = weekdays[dateObj.getDay()];

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();

  function addLeadingZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  const dateToday = `Дата: ${dayOfMonth} ${monthName} ${year} — это ${weekdayName}.`;

  const timeToday = `Время: ${addLeadingZero(hours)}:${addLeadingZero(
    minutes
  )}:${addLeadingZero(seconds)}.`;

  return `${dateToday}\n${timeToday}`;
}
const now = new Date();
console.log(formatRussianDate(now));
