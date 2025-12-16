function startGame5() {
  const choices = ["камень", "ножницы", "бумага"];

  let question = prompt(
    "Сделайте выбор: камень, ножницы или бумага"
  ).toLowerCase();

  if (!choices.includes(question)) {
    alert("Некорректный ввод");
    return;
  }

  const random = Math.floor(Math.random() * choices.length);
  const computer = choices[random];

  alert(`Ваш выбор: ${question}\nВыбор компьютера: ${computer}`);

  let result;

  if (question === computer) {
    result = "Ничья!";
  } else if (
    (question === "камень" && computer === "ножницы") ||
    (question === "ножницы" && computer === "бумага") ||
    (question === "бумага" && computer === "камень")
  ) {
    result = "Победа";
  } else {
    result = "Поражение";
  }

  alert(result);
}
