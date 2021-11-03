function PlayerScore(currentRoll, turnTotal, totalScore) {
  this.currentRoll = currentRoll
  this.turnTotal = turnTotal;
  this.totalScore = totalScore;
}

PlayerScore.prototype.roll = function() {
  this.currentRoll = Math.floor(Math.random()*6)+1;
}

PlayerScore.prototype.scoring = function() {
  if (this.currentRoll > 1) {
    return this.currentRoll; 
  } else if (this.currentRoll === 1) {
    turnTotal = 0;
    // end turn
  }
}

let newroll = new PlayerScore();
newroll.roll();
newroll.scoring();