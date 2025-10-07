let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#userScore");

const compScorePara = document.querySelector("#computerScore");

const winMessage = document.querySelector("#msg");



choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



const generateComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};



const drawGame  = () =>{
    winMessage.innerText = "Game was draw! Play again."
    winMessage.style.backgroundColor = "#081b31";
};



const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        winMessage.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        winMessage.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        winMessage.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        winMessage.style.backgroundColor = "red";
    }
};



const playGame = (userChoice) =>{
    console.log("user Choice",userChoice);
    const compChoice = generateComputerChoice();
    console.log("computer Choice = ",compChoice)

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){

            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
    
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }else if(userChoice === "scissors"){
    
            //rock, paper
            userWin = compChoice === "rock"? false: true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
    
};




















