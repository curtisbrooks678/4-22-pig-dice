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

function diceFaces (player) {
  if (player === 1) {
    $("#imgside1").show();
    $("#imgside2").hide();
    $("#imgside3").hide();
    $("#imgside4").hide();
    $("#imgside5").hide();
    $("#imgside6").hide();
  } else if (player === 2) {
    $("#imgside2").show();
    $("#imgside1").hide();
    $("#imgside3").hide();
    $("#imgside4").hide();
    $("#imgside5").hide();
    $("#imgside6").hide();
  } else if (player === 3) {
    $("#imgside3").show();
    $("#imgside1").hide();
    $("#imgside2").hide();
    $("#imgside4").hide();
    $("#imgside5").hide();
    $("#imgside6").hide();
  } else if (player === 4) {
    $("#imgside4").show();
    $("#imgside1").hide();
    $("#imgside2").hide();
    $("#imgside3").hide();
    $("#imgside5").hide();
    $("#imgside6").hide();
  } else if (player === 5) {
    $("#imgside5").show();
    $("#imgside1").hide();
    $("#imgside2").hide();
    $("#imgside3").hide();
    $("#imgside4").hide();
    $("#imgside6").hide();
  } else if (player === 6) {
    $("#imgside6").show();
    $("#imgside1").hide();
    $("#imgside2").hide();
    $("#imgside3").hide();
    $("#imgside4").hide();
    $("#imgside5").hide();  
  }
}

function showP1Scores(P1) {
  diceFaces(P1.currentRoll);
  $("#p1turntotal").html(P1.turnTotal);
  $("#p1score").html(P1.totalScore);
}
function showP2Scores(P2) {
  diceFaces(P2.currentRoll);
  $("#p2turntotal").html(P2.turnTotal);
  $("#p2score").html(P2.totalScore);
}

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
