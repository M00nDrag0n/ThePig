
function pigDice(PlayerOne, PlayerTwo, score) {
  this.PlayerOne = 0;
  this.PlayerTwo = 0;
  this.score = 0;

  function Player(score){
    this.score = score
  }
  Player.prototype.addScore = function(){
    this.score +=1;
  }


  PigDice.prototype.addScore = function(){
    this.score +=1;
    return this.score;
  }

  function Player.push();

 function pigDice(Player, score) {
   $("inputForm" + Player).submit(function(event) {
     event.preventDefault();
   })
 }






//
// }
//  PlayerOne
// //
//
// function Player = [];
//   function Player.push();
//
//   Math.floor(Math.random()*6) +1 //prevents the program from adding <1 or >6 to the score at a time. "Math.floor" etc causes us to get random numbers. By itself, "Math.floor" tells the CPU to round down from the number that you give it from "Math.random". The first part of it means "less than 6" which is why you have a +1 at the end of the sequence. Without the +1, it only gives you numbers 0-5, rather than 1-6. *6 means less than 6, not less than or equal to 6.
// //   //
// //
// // //Would ".roll" do anything?
// // //Is there a way to simulate dice using codes or is a link to a dice simulator necessary for this project?
// // //is there a way to stop a function? (I'm thinking of if the player does not "hold", the score will delete itself and add "0" to the score instead of the total number, possibly by multiplying the "added score" by 0)
// //
// //
// //
//  PlayerTwo
// //
// //
// //
// //
// //
// //   //
// //
// //
// //
//  score
// //
// //
// //
// //
// //   // j
