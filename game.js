var target;
var random;
var guesses = 0;
var user_guess;
var finished = false;
var colors = ["black", "blue", "cyan", "gold", "green", "lavender", "maroon", "orange", "pink", "purple", "turquoise", "yellow"];
var guessed = document.createElement("h1");
var n, c;

function do_game() {
  random = Math.floor(Math.random() * 12);
  target = colors[random + 1];
  console.log(target);
  while (!finished) {
    user_guess = prompt("I am thinking of one of these colors: \n\n black, blue, cyan, gold, green, lavender, maroon, orange, pink, purple, turquoise and yellow \n\n What colot am I thinking of?");
    n = 0;
    user_guess = user_guess.toLowerCase();
    guesses += 1;
    finished = check_guess();
  }
}

function check_guess() {
  //n = 0;

  
  if (!isNaN(user_guess)) {
    alert("Wrong input. \n\n Please try again.");
    return false;
  }
  
  if ((user_guess[0] < "a") || (user_guess[0] > "z")) {
    alert("Wrong Input. \n\n Please try again.");
    return false;
  }
  
  for (c in colors) {
    if (colors[c] === user_guess) {
      n += 1;
    }
  }

  if (n === 0) {
    alert("Sorry, I don't recognize your color. \n\n Please try again.");
    return false;
  }
  
  if (user_guess < target) {
    alert("Sorry, your guess is not correct! \n\n Hint: your guess is alphabetically lower than mine. \n\n Please try again.");
    return false;
  }
  
  if (user_guess > target) {
    alert("Sorry, your guess is not correct! \n\n Hint: your guess is alphabetically higher than mine. \n\n Please try again.");
    return false;
  }
  

  
  document.querySelector("body").style.backgroundColor = target;
  guessed.innerHTML = "GREAT JOB!";
  guessed.style.color = "white";
  guessed.style.textAlign = "center";
  guessed.style.fontSize = "200px";
  guessed.style.fontWeight = "bolder";
  document.querySelector("body").appendChild(guessed);

  setTimeout(function () {
    alert("Congratulations! You have guessed the color! \n\n It took you " + guesses + " guesses to finish the game! \n\n You can see the color in the background.")}, 50);
  return true; 

  
}