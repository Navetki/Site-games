// Задание 1

const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

people.sort((a, b) => {
  return a.age - b.age;
});

console.log(people);

// Задание 2

function isPositive(num) {
  return num > 0;
}

function isMale(man) {
  return man.gender === "male";
}

function filter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (callback(item)) {
      result.push(item);
    }
  }

  return result;
}

// Задание 3

function logCurrentDate() {
  const now = new Date();
  console.log("Текущее время:", now.toLocaleTimeString());
}

const intervalId = setInterval(logCurrentDate, 3000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("30 секунд прошло");
}, 30000);

// Задание 4

function delayForSecond(callbackHello) {
  setTimeout(callbackHello, 1000);
}
delayForSecond(function () {
  console.log("Привет, Глеб!");
});

// Задание 5

function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
  sayHi("Глеб");
});
