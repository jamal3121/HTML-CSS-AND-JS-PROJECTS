const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//items array
const items = [
  { name: "bee", image: "bee.png" },
  { name: "chameleon", image: "chameleon.png" },
  { name: "cockatoo", image: "cockatoo.png" },
  { name: "crocodile", image: "crocodile.png" },
  { name: "gorila", image: "gorila.png" },
  { name: "macaw", image: "macaw.png" },
  { name: "monkey", image: "monkey.png" },
  { name: "piranha", image: "piranha.png" },
  { name: "sloth", image: "sloth.png" },
  { name: "snake", image: "snake.png" },
  { name: "tiger", image: "tiger.png" },
  { name: "toucan", image: "toucan.png" },
];

//initial time
let seconds = 0;
minute = 0;

//initial moves and win count
let movesCount = 0;
winCount = 0;

//for timer
const timeGenerator = () => {
  seconds += 1;
  //minutes logic
  if (seconds >= 60) {
    minute += 1;
    seconds = 0;
  }
  //format timme before displaying 
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minute < 10 ? `0${minute}` : minute;
  timeValue.innerHTML = `
    <span>Time : </span>${minutesValue}:${secondsValue}
  `;


};


//for caculating moves 
const movesCounting = ()=>{
  movesCount +=1;
  moves.innerHTML = `<span>Moves : </span>${movesCount}`;
};

//Pick random object from the items Array
const generateRandom = (size = 4)=>{
  //temporary array
  let tempArray = [...items];
  //initializes the cardValues array 
  let cardValues = [];
  //sizes should be double (4*4 matrix )/2 since pairs of objects would exist 
  size = (size *size )/2;
  //random objects selection 
  for(let i=0;i<size ; i++){
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    //once selected remove the objects from temp array
    tempArray.splice(randomIndex,1);
    ;
  }
  return cardValues;
}

const matrixGenerator =  (cardValues,size = 4)=>{
  gameContainer.innerHTML = " ";
  cardValues = [...cardValues,...cardValues];
  //simple shuffle
  cardValues.sort(()=> Math.random() - 0.5);
  for(let i=0 ; i<size*size;i++){
      /*create cards
       before => front side (containes Question mark after => backside (contains actual images)) 
      data-card-values is costom attribute which stores the names of the cards to match later */
      gameContainer.innerHTML +=`
      <div class="card-container' data-card-value="${cardValues[i].name}">
        <div class="card-before">?</div>
        <div class="card-after">
          <img src="${cardValues[i].image}" class="image" />
        </div>
      </div>
      `;
  }

  //grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;
};

//initializing values and func calls
const initializer = ()=>{
  result.innerHTML = "";
  winCount = 0;
  let cardValues = generateRandom();
  matrixGenerator(cardValues);

  
}
initializer();