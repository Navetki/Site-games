// Задание 1

let Numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < Numbers.length; i++) {
  const Numb = Numbers[i];
  console.log(Numb);
  if (Numb === 10) {
    break;
  }
}

// Задание 2
let array = [1, 5, 4, 10, 0, 3];
const arr = 4;

const index = array.indexOf(arr);
console.log(`Индекс значения ${arr} в массиве: ${index}`);

// Задание 3

let words = [1, 3, 5, 10, 20];
word = words.join(" ");
console.log(word);

// Задание 4

const size = 3;
let lot = [];

for (let n = 0; n < size; n++) {
  let lots = [];
  for (let m = 0; m < size; m++) {
    lots.push(1);
  }
  lot.push(lots);
}

console.log(lot);

// Задание 5

let prod = [1, 1, 1];
prod.push(2, 2, 2);

console.log(prod);

// Задание 6

let price = [9, 8, 7, "a", 6, 5];
price = price.filter((item) => typeof item === "number").sort((a, b) => a - b);

console.log(price);

// Задание 7

let scan = [9, 8, 7, 6, 5];

const userN = prompt("Угадайте число до 10");
const UserQ = Number(userN);
if (scan.includes(UserQ)) {
  alert("Угадал!");
} else {
  alert("Не угадал.");
}

// Задание 8

let greeting = "abcdef";
let userGreeting = greeting.split("").reverse().join("");
console.log(userGreeting);

// Задание 9

const mini = [
  [1, 2, 3],
  [4, 5, 6],
];

const big = mini.flat();

console.log(big);

// Задание 10

const lesson = [3, 2, 1, 9, 5, 8, 7, 4, 6];

for (let i = 0; i < lesson.length - 1; i++) {
  const oneLesson = lesson[i];
  const nextLesson = lesson[i + 1];

  const sum = oneLesson + nextLesson;

  console.log(
    `Сумма ${oneLesson} (первого элемента ${i}) и ${nextLesson} (второго элемента ${
      i + 1
    }) = ${sum}`
  );
}

// Задание 11

function getSquares(newArray) {
  const squaresArray = newArray.map(function (num) {
    return num * num;
  });

  return squaresArray;
}

const numArray = [1, 2, 3, 4, 5];
const squaredArray = getSquares(numArray);

console.log(`Массив квадратов [${numArray}]: ${getSquares(numArray)}`);

// Задание 12

const getWordLengthsShort = (products) => {
  return products.map((product) => product.length);
};

const saleProducts = ["стол", "диван", "кровать", "бра", "шкаф"];
console.log(getWordLengthsShort(saleProducts));

// Задание 13

function getNegativeNumbers(minus) {
  const minusNum = minus.filter(function (num) {
    return num < 0;
  });
  return minusNum;
}

const allNum = [1, 2, 3, 0, -1, -2, -3];

console.log(
  `Массив с отрицательными значениями: ${getNegativeNumbers(allNum)}`
);

// Задание 14

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const value = [];
const allValue = 10;
const minValue = 0;
const maxValue = 10;

for (let i = 0; i < allValue; i++) {
  value.push(getRandomIntInclusive(minValue, maxValue));
}

const values = value.filter(function (numb) {
  return numb % 2 === 0;
});

console.log(`Исходный массив : ${value}`);
console.log(`Массив с четными значениями: ${values}`);

// Задание 15

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = 6;
const minNum = 1;
const maxNum = 10;
const numbers = [];

for (let i = 0; i < randomNum; i++) {
  numbers.push(getRandomIntInclusive(minNum, maxNum));
}

const sum = numbers.reduce((accumulator, nowNum) => {
  return accumulator + nowNum;
}, 0);

const meaning = sum / numbers.length;

console.log(`Сгенерированный массив: ${numbers}`);
console.log(`Среднее арифметическое значение: ${meaning.toFixed(2)}`);
