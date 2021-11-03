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
    // end turn
  }
}

PlayerScore.prototype.totalingScore = function() {
  this.totalScore += this.turnTotal;
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
