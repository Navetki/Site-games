function startGame6() {
  const chars = "0123456789ABCDEF";
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += chars[Math.floor(Math.random() * 16)];
  }

  document.body.style.background = randomColor;

  const block = document.querySelector(".minigames-block ");
  if (block) block.style.background = randomColor;
}
