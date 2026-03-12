const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-btn");
const newGame = document.querySelector(".new-btn");
const winner = document.querySelector(".winner");

let turnO = true;

const winPatterns = [
  [0,1,2],[0,3,6],[0,4,8],
  [1,4,7],[2,5,8],[2,4,6],
  [3,4,5],[6,7,8],
];

const resetGame = () => {
  turnO = true;

  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }

  winner.innerText = "";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color="#ef4444"
      turnO = false;
    } else {
      box.innerText = "X";
       box.style.color="#3b82f6"
      turnO = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 && pos1 === pos2 && pos2 === pos3) {
      winner.innerText = `Winner is: ${pos1}`;
      disableBoxes();
    }
  }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);