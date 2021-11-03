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
    turnTotal = 0;
    // end turn
  }
}

let newroll = new PlayerScore();
newroll.roll();
newroll.scoring();
newroll.roll();
newroll.scoring();
newroll.roll();
newroll.scoring();
newroll.roll();
newroll.scoring();
newroll.roll();
newroll.scoring();
newroll.roll();
newroll.scoring();
