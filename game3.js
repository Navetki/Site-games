function startGame3() {
  const game3 = prompt("Пожалуйста, введите слово");

  let answer;

  if (game3 === null || game3 === "") {
    answer = "Вы отменили ввод или ввели пустую строку";
  } else {
    const reversedAnswer = game3.split("").reverse().join("");

    answer = `Перевернутый текст: "${reversedAnswer}"`;
  }
  alert(answer);
}
