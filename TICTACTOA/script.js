let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

//winning pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

//Disable All Buttons
const disableButtons = () => {
  btnRef.forEach((ele) => (ele.disabled = true));

  //enable popup
  popupRef.classList.remove("hide");
};

//Enable All Buttons (For new game and restart)
const enableButton = () => {
  btnRef.forEach((ele) => {
    ele.innerText = "";
    ele.disabled = false;
  });
  //disable popup
  popupRef.classList.add("hide");
};

//This function is executed when a player wins
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'Y' Wins";
  }
};

//Function for draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F389; <br> It's Draw";
};

//new Game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButton();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButton();
});

//WIn Logic
const winChecker = () => {
  //Loop Through all Win Patterns
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //Check if elements are Filled
    //If 3 empty are same and would give win as would
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};

//player X play first
let xTurn = true;
let count = 0;

//Display X/O on click
btnRef.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //display X
      ele.innerHTML = "X";
      ele.disabled = true;
    } else {
      xTurn = true;
      //Display Y
      ele.innerHTML = "O";
      ele.disabled = true;
    }
    //Increment Count on each Click
    count += 1;
    if (count == 9) {
      //it's a draw since there are a total of 9 boxed
      drawFunction();
    }
    //Check for win on every Click
    winChecker();
  });
});

//enable buttons and disable popup on page load
window.onload = enableButton;
