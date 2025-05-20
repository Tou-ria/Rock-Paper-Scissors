const choices = ['Rock', 'Paper', 'Scissors'];
let isRunning = false;
let intervalId;
const CompterPlays =
  {
    wins : 0,
    loses : 0,
    tie : 0
  };

/*localStorage.setItem('Score',JSON.stringify(score));
let CompterPlays = JSON.parse(localStorage.getItem('Score'));*/

// Function for the choice of the computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// function for the play game between on player and the computer
function yourMove(PlayerMove)
{
  let ComputerMove = getComputerChoice();
  let ResultPlay;
  
  if(PlayerMove === ComputerMove)
  {
    ResultPlay = " tie";
    CompterPlays.tie ++;
  }
  else if((PlayerMove === "Rock" && ComputerMove ==="Paper") || (PlayerMove === "Paper" && ComputerMove ==="Scissors") ||(PlayerMove === "Scissors" && ComputerMove ==="Rock"))
  {
     ResultPlay = "You lose  " + "<img style='width:18px;height: 18px;' src ='./Img/sad.png'/>";
     CompterPlays.loses ++;
  }
else
{
   ResultPlay = "You win  " + "<img style='width:18px;height: 18px;' src ='./Img/win.png'/>";
   CompterPlays.wins++;
}

document.querySelector(".Final-result-game").innerHTML = `You <img style="width: 15px;height: 15px;" src="./Img/${PlayerMove}.png"/> | <img style="width: 15px;height: 15px;" src="./Img/${ComputerMove}.png"/> Computer `;

document.querySelector(".result-js-statut").innerHTML = `${ResultPlay}`;

document.querySelector(".Score-result-js").innerHTML = `Wins: ${CompterPlays.wins}, Lost: ${CompterPlays.loses}, Tie: ${CompterPlays.tie}`;


}
// function reset the score
function RestartValues()
{

  for(let index in CompterPlays)
  {
    CompterPlays[index] = 0;
  }
  document.querySelector(".Final-result-game").innerHTML = " ";
  document.querySelector(".Score-result-js").innerHTML = " ";
  document.querySelector(".result-js-statut").innerHTML = " ";
 
}
// for the auto play 
document.querySelector(".auto-button-js").addEventListener('click',() => {
    if(!isRunning)
    {
      intervalId = setInterval(() => {
      yourMove(getComputerChoice());
      }, 1500);
      isRunning = true;
    }
    else
    {
      clearInterval(intervalId);
    }
})



