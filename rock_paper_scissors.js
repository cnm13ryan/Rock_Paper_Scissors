/**
 *
 *
 *
 *
 *
 */


function getRandomInt(max=1000) {
  /**
   * Return a random integer between 0 and 100
   */
  return Math.floor(Math.random() * max);
}



function getComputerChoice(){
  /**
   * A random number is generated
   * Choose one of (rock, scissor, paper) wrt 
   * (modulo3, modulo5, modulo7)
   * for the computer choice
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




function playRoundResult(playerSelection, computerSelection){
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
  let invalid = "INVALID";
  
  console.log(`You: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);

  // Outcome of this game round
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



function getPlayerChoice(){
  /**
   * Generate a prompt to allow user input
   * either rock, scissor, or paper
   */
  let input = prompt("Type in one of the three: rock, paper, or scissor");
  const INPUT = input.toUpperCase();
  return INPUT;
}



function playingOneRoundOfGame(){
  /**
   * One round of playing Rock Paper and Scissors
   * Record and return result:
   * win: +1
   * tie: +0
   * lose: -1
   */
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  
  let win = "WIN";
  let lose = "LOSE"
  let tie = "TIE";
  let invalid = "INVALID";

  let result = playRoundResult(playerSelection, computerSelection);

  if (result == invalid){
    console.log("Invalid entry");
    console.log("Let's try again");
    return playingOneRoundOfGame();
  }

  console.log(`Result (You VS computer): ${result}`);
  switch(result){
    case (win): return 1;
    case (lose): return -1;
    // case (tie): return 0;
    default: return 0;
  }
}




function playGameFor(num_rounds){
  /**
   * Count the scores of each game round
   */
  if (num_rounds == 0){ return 0;}
  return playingOneRoundOfGame() + playGameFor(num_rounds-1);
}



function verifyNumber(input){
  /**
   * Verify whether the input
   * is an invalid number (NaN)
   */
  let input_num = parseInt(input);
  //console.log(`${typeof input_num}`);
  //console.log(`${input_num}`);
  if (Number.isNaN(input_num)){ return true; }
  return false;
}



function getNumOfRounds(){
  /**
   * Get the number of rounds that the user wants to play
   */
  let input = prompt("How many rounds would you like to play? Please enter a valid number.");

  if (verifyNumber(input)){
    console.log("Invalid number");
    return getNumOfRounds();
  }
  return input;
}




function executeGame(){
  /**
   * Start and execute the game of
   * playing rock paper and scissors
   */
  console.log("GAME OF ROCK PAPER and SCISSORS");
  num_rounds = getNumOfRounds();
  totScore = playGameFor(num_rounds);

  console.log(`Your total score in ${num_rounds} games is ${totScore}`);
  return "END OF GAME";
}




// Global executing environment
// Executing the game
executeGame();





