// This is where the JavaScript is written

console.log("GAME OF ROCK PAPER and SCISSORS");

function getRandomInt(max=100) {
  /**
   * Return a random integer between 0 and 100
   */

  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
  /**
   * Return a random choice of rock paper and scissor
   */

  let x = getRandomInt();
  let rock = "ROCK";
  let scissor = "SCISSOR";
  let paper = "PAPER";

  if (x % 3 == 0){ return rock; }
  if (x % 5 == 0){ return scissor; }
  if (x % 7 == 0){ return paper; }
  
  return getComputerChoice();
}


function playRound(playerSelection, computerSelection){
  /**
   * Game play (Rock paper and scissors) 
   * between user and computer 
   */
  
  let rock = "ROCK";
  let scissor = "SCISSOR";
  let paper = "PAPER";
  
  let win = "WIN";
  let lose = "LOSE"
  let tie = "TIE";

  let invalid = "INVALID Please type in one of the three: ROCK, PAPER, SCISSOR";

  if (computerSelection == rock){
    switch(playerSelection){
      case (rock):
        return tie;
      case (scissor):
        return lose;
      case (paper):
        return win;
      default:
        return invalid;
    }
  }

  if (computerSelection == paper){
    switch(playerSelection){
      case (rock):
        return lose;
      case (scissor):
        return win;
      case (paper):
        return tie;
      default:
        return invalid;
    }
  }
  
  if (computerSelection == scissor){
    switch(playerSelection){
      case (rock):
        return win;
      case (scissor):
        return tie;
      case (paper):
        return lose;
      default:
        return invalid;
    }
  }
}

function oneRound(){
  /**
   * One round of game play of Rock Paper and Scissors
   */
  const computerSelection = getComputerChoice();
  const input = prompt("Type in one of the three: ROCK, PAPER, SCISSOR");
  const playerSelection = input;
  
  let result = playRound(playerSelection, computerSelection);
  
  if (result != "WIN" && result != "LOSE" && result != "TIE"){
    console.log("This does not count. Let's play one more time!");
    return oneRound();
  }

  console.log(`Result (You VS computer): ${result}`);
  
  switch(result){
    case ("WIN"): return 1;
    case ("LOSE"): return -1;
    default: return 0;
  }
}

function game(num_rounds=5){
  if (num_rounds == 0){
    return 0;
  }
  return oneRound() + game(num_rounds-1);
}


// Play 5 games and output user score
score = game(5);
console.log(`Your score is ${score}`)











