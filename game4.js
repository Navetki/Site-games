const quiz = [
  {
    question: "Какой цвет небо?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2,
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2,
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2,
  },
];

function startGame4() {
  let score = 0;

  quiz.forEach((currentQuestion) => {
    const promptMessage =
      `${currentQuestion.question}\n\n` + currentQuestion.options.join("\n");

    const userAnswerInput = prompt(promptMessage);
    const userAnswerNumber = parseInt(userAnswerInput);

    if (userAnswerNumber === currentQuestion.correctAnswer) {
      alert("Правильно!");
      score++; //
    } else {
      alert(`Неправильно. Правильный ответ: ${currentQuestion.correctAnswer}`);
    }
  });

  alert(`Ваш результат: ${score} правильных ответов из ${quiz.length}.`);
}
