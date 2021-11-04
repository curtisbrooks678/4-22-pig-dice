//Business Logic

function PlayerScore(currentRoll, turnTotal, totalScore) {
  this.currentRoll = currentRoll
  this.turnTotal = 0;
  this.totalScore = 0;
}

PlayerScore.prototype.roll = function() {
  this.currentRoll = Math.floor(Math.random()*6)+1;
}

PlayerScore.prototype.scoring = function() {
  if (this.currentRoll > 1) {
    return this.turnTotal += this.currentRoll;
  } else if (this.currentRoll === 1) {
    this.turnTotal = 0;
  }
}

PlayerScore.prototype.totalingScore = function() {
  this.totalScore += this.turnTotal;
}

//UI Logic

function showP1Scores(player1) {
  $("#dicerolltotal").html(player1.currentRoll);
  $("#p1turntotal").html(player1.turnTotal);
  $("#p1score").html(player1.totalScore);
}
function showP2Scores(player2) {
  $("#dicerolltotal").html(player2.currentRoll);
  $("#p2turntotal").html(player2.turnTotal);
  $("#p2score").html(player2.totalScore);
}

// function winner() {
//   player1.turnTotal = 0;
//   player1.totalScore = 0;
//   showP1Scores(player1);
//   player2.turnTotal = 0;
//   player2.totalScore = 0;
//   showP2Scores(player2);
// }

$(document).ready(function() {
  let player1 = new PlayerScore();
  let player2 = new PlayerScore();
  let playercounter = true;

  $("button#rolldice").click(function() {
    $("#p1-win").hide();
    $("#p2-win").hide();
    if (playercounter === true) {
      player1.roll();
      player1.scoring();
      showP1Scores(player1);
      if (player1.currentRoll === 1){
        playercounter = !playercounter;
        $("#p2turn").show();
        $("#p1turn").hide();
      }
    } else if (playercounter === false) {
      player2.roll();
      player2.scoring();
      showP2Scores(player2);
      if (player2.currentRoll === 1) {
        playercounter = !playercounter;
        $("#p1turn").show();
        $("#p2turn").hide();
      }
    }
  });
  

  $("button#holddice").click(function() {
    if (playercounter === true) {
      player1.totalingScore();
      player1.turnTotal = 0;
      showP1Scores(player1);
      playercounter = !playercounter;
      $("#p2turn").show();
      $("#p1turn").hide();
      if (player1.totalScore >= 100) {
        $("#p1-win").show();
        // winner();
        // player1.turnTotal = 0;
        player1.totalScore = 0;
        showP1Scores(player1);
        player2.turnTotal = 0;
        player2.totalScore = 0;
        showP2Scores(player2);
        playercounter = true;
        $("#p1turn").show();
        $("#p2turn").hide();
      }

    } else if (playercounter === false) {
      player2.totalingScore();
      player2.turnTotal = 0;
      showP2Scores(player2);
      playercounter = !playercounter;
      $("#p1turn").show();
      $("#p2turn").hide();
      if (player2.totalScore >= 100) {
        $("#p2-win").show();
        // winner();
        // player2.turnTotal = 0;
        player2.totalScore = 0;
        showP2Scores(player2);
        player1.turnTotal = 0;
        player1.totalScore = 0;
        showP1Scores(player1);
        playercounter = true;
        $("#p1turn").show();
        $("#p2turn").hide();
      }
    }
  }); 
});
