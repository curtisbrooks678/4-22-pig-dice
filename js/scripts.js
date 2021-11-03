function Dice (currentRoll) {
  this.currentRoll = currentRoll;
}

Dice.prototype.roll = function() {
  this.currentRoll = Math.floor(Math.random()*6)+1;
}
