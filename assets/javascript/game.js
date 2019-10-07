// Array of words - charcters from the marvel universe
const words = ['spider man', 'iron man', 'hulk', 'captain marvel', 'Thanos', 'black panther', 'captain america', 'black widow', 'hawkeye', 'thor', 'star lord', 'rocket', 'groot'];
// Word selected randomly

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 8;

function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

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




let docUnderScore = document.getElementsByClassName('underscore');

console.log(choosenWord);
// Form underscores based on the word length - create for loop
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
        docUnderScore[0].innerHTML = underScore.join(' '); 

    }
    return underScore;

}

console.log(generateUnderscore());
//Users guess
document.addEventListener('keypress', (event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);
//If guess is correct  
    if(choosenWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);

        underScore[choosenWord.indexOf(keyword)] = keyword;

        if(underScore.join('') == choosenWord) {
            alert('You Win');
        }
    }
    else {
        wrongWord.push(keyword);
    }
});

generateUnderscore();

//