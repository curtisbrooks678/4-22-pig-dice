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


// function showRoll() {

// }

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

// function endOfTurn() {

// }

$(document).ready(function() {
  let player1 = new PlayerScore();
  let player2 = new PlayerScore();
  let playercounter = true;

  $("button#rolldice").click(function() {
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
      if (player2.currentRoll === 1){
        playercounter = !playercounter;
        $("#p1turn").show();
        $("#p2turn").hide();
      }
    }
  });
});

  // $("button#holddice").click(function() {
  //   if (playercounter = true) {
  //     player1Object.totalingScore();
  //   } else if (playercounter = false) {
  //     player2Object.totalingScore();
  //   }
  //   playercounter = !playercounter;
  // }); 
  


  // 
  // if (player1Object.totalScore >= 100) {
  //   display Congrats P1;
  // }
  // if (player2Object.totalScore >= 100) {
  //   display Congrats P2;
  // }




// let newroll = new PlayerScore();
// newroll.roll();
// newroll.scoring();
// newroll.totalingScore();
// console.log(newroll);
// newroll.roll();
// newroll.scoring();
// newroll.totalingScore();
// console.log(newroll);
// newroll.roll();
// newroll.scoring();
// newroll.totalingScore();
// console.log(newroll);
// newroll.roll();
// newroll.scoring();
// newroll.totalingScore();
// console.log(newroll);
// newroll.roll();
// newroll.scoring();
// newroll.totalingScore();
// console.log(newroll);
// newroll.roll();
// newroll.scoring();
// newroll.totalingScore();
// console.log(newroll);
// newroll.roll();
// newroll.scoring();
// newroll.totalingScore();
// console.log(newroll);


// playerTurn {
//   playercounter = 0;
//   if (playercounter === 0) {
//     // player one's turn
//     playercounter += 1;
//   }
//   if (playercounter === 1) {
//     // player two's turn
//     playercounter -= 1;
//   }
// }
