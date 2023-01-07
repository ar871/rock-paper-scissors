const playerText =document.querySelector("#playerText")
const computerText =document.querySelector("#computerText")
const resultText =document.querySelector("#resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn") // this connects to html
let player;
let computer;
let result; // left undefined as the choice of rock paper or scissors will be assigned

choiceBtns.forEach(button => button.addEventListener("click", () => {
 
    player = button.textContent;
    computerTurn();//
    playerText.textContent = `Player: ${player}`
    computerText.textContent = `Computer: ${computer}`
    resultText.textContent = `${checkWinner()}` // outputs
}))

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) +1 // function for computer
    switch(randNum){ // basically saying it be random 
        case 1:
            computer = "ROCK"
            break;
         case 2:
            computer = "PAPER"
            break;
        case 3:
            computer = "SCISSORS"
            break;
    } // computer picking system 
}
function checkWinner(){
    if (player == computer){
        return "Draw!" // if player and computer pick same itll come back with draw
    }
    else if (computer == "ROCK"){// if comp picks rock and i pick paper i win 
        return (player == "PAPER")  ? "You Win !" : "You lose!"
    }
    else if (computer == "PAPER"){ // if comp pick paper and i pick scissor i win 
        return (player == "SCISSORS") ? "You Win !" : "You lose!"
    }
    else if (computer == "SCISSORS"){ // if comp pick scissor and i pick rock i win 
        return (player == "ROCK") ? "You Win !" : "You lose!"
    } 
} // this funtion just chesks who won 