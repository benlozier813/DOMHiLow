

var randomNum = Math.floor(Math.random()*100)+1;
var tries = 1;


function processGuess(){
  var guess = document.getElementById('guess').value;
  var lastGuess = document.getElementById('lastGuess');
  var hint = document.getElementById('hint');
  var comment = document.getElementById('comment')
  var commentArray = ["Correct!... just kidding, you got it wrong.", "You're a bad person", "Have you tried doing it right? that might work", "I have to go to the bathroom, but theres someone in there", "this sucks, lets play hungry hungry hippos!", "How do you suck at guessing a number?"]
  var randomComment = Math.floor(Math.random()*commentArray.length)
  lastGuess.innerHTML = guess;

  if(isNaN(guess)) {
      hint.innerHTML = "You must guess a number"
  }
  else {
    if(tries >= 7){
      hint.innerHTML = "You lose"
      comment.innerHTML = "Game Over"
    }
    else{
      if (guess < randomNum) {
        hint.innerHTML = "Too Low";
        comment.innerHTML = commentArray[randomComment];
      }
      else {
        if (guess > randomNum) {
          hint.innerHTML = "Too High";
          comment.innerHTML = commentArray[randomComment];
        }
        else {
          hint.innerHTML = "Good Job Dickhead!";
          comment.innerHTML = "Game Over"
        }
      }
    };
  }
guess = "";
  tries++ ;

  }

  // function gameReset(){
  //   var lastGuess = document.getElementById('lastGuess');
  //   var hint = document.getElementById('hint');
  //   var comment = document.getElementById('comment');
  //   var tries = 0
  //   lastGuess.innerHTML = "";
  //   hint.innerHTML = hint
  //
  // }
