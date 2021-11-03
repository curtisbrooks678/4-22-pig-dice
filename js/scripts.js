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
    return false;
  }
}

PlayerScore.prototype.totalingScore = function() {
  this.totalScore += this.turnTotal;
}

// PlayerScore.prototype.playerTurn = function() {
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



P1 clicks roll button however many times
  If P1 clicks HOLD, turntotal added to scoretotal and then P2 turn
P2 clicks roll button however many times
  If P2 clicks HOLD, turntotal added to scoretotal and then P1 turn
If either player scoretotal >= 100, congrats end game



UI LOGIC

click function {
  display (Player ones turn)

  let player1Object = new PlayerScore();
  let player2Object = new PlayerScore();
  let playercounter = true;

  click function for roll button
    if (playercounter = true) {
      player1Object.roll()
      if (player1Object.currentRoll === 1){
        playercounter = !playercounter
        display Player Twos Turn;
      }
    } else if (playercounter = false) {
      player2Object.roll()
      if (player2Object.roll() === 1){
        playercounter = !playercounter
        display Player One Turn;
      }
    }

  click function for HOLD button
    if (playercounter = true) {
      add turntotal to scoretotal to player1Object
    } else if (playercounter = false) {
      add turntotal to scoretotal to player2Object
    }
    playercounter = !playercounter;
  } 
  
  if (player1Object.totalScore >= 100) {
    display Congrats P1;
  }
  if (player2Object.totalScore >= 100) {
    display Congrats P2;
  }
  





let newroll = new PlayerScore();
newroll.roll();
newroll.scoring();
newroll.totalingScore();
console.log(newroll);
newroll.roll();
newroll.scoring();
newroll.totalingScore();
console.log(newroll);
newroll.roll();
newroll.scoring();
newroll.totalingScore();
console.log(newroll);
newroll.roll();
newroll.scoring();
newroll.totalingScore();
console.log(newroll);
newroll.roll();
newroll.scoring();
newroll.totalingScore();
console.log(newroll);
newroll.roll();
newroll.scoring();
newroll.totalingScore();
console.log(newroll);
newroll.roll();
newroll.scoring();
newroll.totalingScore();
console.log(newroll);


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
