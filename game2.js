function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //
}
function roundToThreeDecimals(num) {
  return Math.round(num * 1000) / 1000;
}

function generateMath() {
  const num1 = getRandomIntInclusive(1, 10);
  const num2 = getRandomIntInclusive(1, 10);
  const operators = ["+", "-", "*"];
  const randomOperator = operators[getRandomIntInclusive(0, 3)];

  let question;
  let answer;

  switch (randomOperator) {
    case "+":
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case "-":
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case "*":
      question = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
  }
  if (getRandomIntInclusive(0, 3) === 3) {
    const divident = getRandomIntInclusive(1, 20);
    const divisor = getRandomIntInclusive(1, 10);
    question = `${divident} / ${divisor}`;
    answer = roundToThreeDecimals(divident / divisor);
  }
  return { question, answer };
}

function startGame2() {
  const problem = generateMath();
  const userAnswerString = prompt(
    `Реши пример (если пример на деление с остатком, ответ запиши так, чтобы было 3 цифры после запятой): ${problem.question}`
  );

  const userAnswer = Number(userAnswerString);

  const isCorrect = userAnswer === problem.answer;

  if (isCorrect) {
    alert("Верно! Молодец!");
  } else {
    alert(`Ошибка! Правильный ответ: ${problem.answer.toLocaleString()}`);
  }
}
