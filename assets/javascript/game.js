// Array of words - charcters from the marvel universe
const marvelCharcters = ['spiderman', 'ironman', 'hulk', 'captainmarvel', 'thanos', 'blackpanther', 'captainamerica', 'blackwidow', 'hawkeye', 'thor', 'starlord', 'rocket', 'groot'];
// Word selected randomly

//Empty variables to store values later
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;



// ALL FUNCTIONS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//__________________________________________________________
//GAME START FUNCTION
//__________________________________________________________
function Game() {
    //computer generates random word from words array
    randomWord = marvelCharcters[Math.floor(Math.random() * marvelCharcters.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


var spiderman = document.getElementById("spiderman");
var ironman = document.getElementById("ironman");
var hulk = document.getElementById("hulk");
var captainmarvel = document.getElementById("captainmarvel");
var thanos = document.getElementById("thanos");
var blackpanther = document.getElementById("blackpanther");
var captainamerica = document.getElementById("captainamerica");
var blackwidow = document.getElementById("blackwidow");
var hawkeye = document.getElementById("hawkeye");
var thor = document.getElementById("thor");
var starlord = document.getElementById("starlord");
var rocket = document.getElementById("rocket");
var groot = document.getElementById("groot");



function gif() {
   
}
    if (randomWord === marvelCharcters[0]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/spiderman.gif";
        
    }
    

    else if (randomWord === marvelCharcters[1]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/ironman.gif";
    }
    

    else if (randomWord === marvelCharcters[2]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/hulk.gif";
    }
    
    else if (randomWord === marvelCharcters[3]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/marvel.gif";
    }
    
    else if (randomWord === marvelCharcters[4]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/thanos.gif";
    }
    
    else if (randomWord === marvelCharcters[5]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/panther.gif";
    }
    
    else if (randomWord === marvelCharcters[6]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/america.gif";
    }

    else if (randomWord === marvelCharcters[7]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/widow.gif";
    }

    else if (randomWord === marvelCharcters[8]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/hawkeye.gif";
    }

    else if (randomWord === marvelCharcters[9]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/thor.gif";
    }

    else if (randomWord === marvelCharcters[10]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/starlord.gif";
    }

    else if (randomWord === marvelCharcters[11]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/rocket.gif";
    }

    else if (randomWord === marvelCharcters[12]) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/groot.gif";
    }
;


function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}


//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        gif()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//_____________________________________________________
// EXECUTE CODE 
//_____________________________________________________

//call start game function
Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}