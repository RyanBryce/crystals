console.log("yo");

//computer chice between 19-120
var scoreToGuessDOM = $("#scoreToGuess")
var winsDOM = $("#wins")
var lossesDOM = $("#losses")
var crystalsDOM = $("#crystals")
var currentScoreDOM = $("#currentScore")

var computerChoice = 0;
var wins = 0;
var losses = 0;
var currentScore = 0;

function genreateGame(){
  crystalsDOM.empty()
  currentScore = 0;
  computerChoice = Math.floor(Math.random() * (120 - 12) + 12)

  for (let i = 0; i < 4; i++) {
    var cryImg = $(`<img id="crystal" src="./images/cry-${i}.png" alt="cry-image" style="height:200px; width:200px;"></img>`);

    cryImg.attr("data-value", Math.floor(Math.random() * (12 - 1) + 1))

    crystalsDOM.append(cryImg)
  }
  scoreToGuessDOM.text(computerChoice)
  winsDOM.text(wins)
  lossesDOM.text(losses)
  currentScoreDOM.text(currentScore);
}

genreateGame()
// 4 crystals with values 1-12 need to be clickable

//keep track of wins and losses

$("#crystals").on("click", "#crystal", function (event) {
    event.preventDefault()
    console.log($(this));
    var crystalVal = $(this).attr("data-value");
    currentScore += (+crystalVal);
    if(currentScore > computerChoice){
      currentScoreDOM.text(currentScore)
      ++losses;
      lossesDOM.text(losses)
      genreateGame()
    }
    else if (currentScore == computerChoice) {
      currentScoreDOM.text(currentScore)
      ++wins
      winsDOM.text(wins)
      genreateGame()
    } else {
      currentScoreDOM.text(currentScore)
    }
    
    // if its greater then the user score the losses goes up and game restarts
    //else if the userscore is equal to the computer score the wins goes up and game restarts
    //else the user guess is less them the computer guess
      //increase the current score with the calue of the crystal they clicked on display results and let crystals go up
  
})


