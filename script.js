
let getComputerChoice = () => {
    return Math.floor(Math.random() * 3);
};

let getHumanChoice = () => {
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toLowerCase();
    if(choice == "rock")
        return 0;
    else if(choice == "paper")
        return 1;
    else
        return 2;
};

let humanScore = 0;
let computerScore = 0;

let playRound  = (humanChoice, computerChoice) => {
    if(computerChoice - humanChoice == 1 || computerChoice - humanChoice == -2){
        computerScore++;
        console.log("You Lose!");
    }
    else if (humanChoice - computerChoice == 1 || humanChoice - computerChoice == -2){
        humanScore++;
        console.log("You Win!");
    }
    else{
        console.log("Tie Game :(");
    }
}

for(let i = 0; i < 5; i++){
    let hChoice = getHumanChoice();
    let cChoice = getComputerChoice();
    playRound(hChoice, cChoice);
}

console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)
