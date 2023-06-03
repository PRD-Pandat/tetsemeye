// Definindo o jogador atual
let currentPlayer = "X";

// Função para alternar o jogador atual
function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Função para lidar com a jogada
function handleMove(cell) {
  if (cell.innerText === "") {
    cell.innerText = currentPlayer;
    switchPlayer();
  }
}

// Função para reiniciar o jogo
function resetGame() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.innerText = "";
  });
  currentPlayer = "X";
}

// Event listeners para as células e botão de reiniciar
document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      handleMove(cell);
    });
  });
  
  const resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", () => {
    resetGame();
  });
});
