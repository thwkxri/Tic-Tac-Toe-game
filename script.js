let currentPlayer = "X"; 
let cells = document.querySelectorAll(".cell");
let winInfo = document.getElementById('win-info');
const restartBtn = document.getElementById('restart-btn');
let gameOver = false;

function cellClick(cell) {
  if (gameOver){
    return;
  }
  if (!cell.textContent) {
      cell.textContent = currentPlayer;
      if (checkWin()) {
          winInfo.innerHTML = `${currentPlayer} выиграли!`;
          gameOver = true;
      } else {
          currentPlayer = currentPlayer == "X" ? "O" : "X";
      }
  }
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombos.some(combo => {
        return cells[combo[0]].textContent &&
            cells[combo[0]].textContent === cells[combo[1]].textContent &&
            cells[combo[1]].textContent === cells[combo[2]].textContent;
    });
}

function init() {
    cells.forEach(cell => {
        cell.addEventListener('click', (e) => cellClick(cell));
    });
}

init();

restartBtn.addEventListener('click', (e) => {
  cells.forEach(cell => {
    cell.textContent = '';
  })
  winInfo.textContent = '';
})

