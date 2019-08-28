//Business Logic
function pigDice () {
  this.task = [],
  this.currentId = 0
};

pigDice.prototype.addTask = function (Task) {
  task.id = this.assignId();
  this.tasks.push(Task)
}

pigDice.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID
};

function Task(rollDice, newGame, hold) {
  this.rollDice = rollDice;
  this.newGame = newGame;
  this.hold = hold;
}


//User Interface Logic

$(document).ready 
