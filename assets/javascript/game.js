// Array of words - charcters from the marvel universe
const words = ['spider man', 'iron man', 'hulk', 'captain marvel', 'Thanos', 'black panther', 'captain america', 'black widow', 'hawkeye', 'thor', 'star lord', 'rocket', 'groot'];
// Word selected randomly
let randNum = Math.floor(Math.random() * words.length);
let choosenWord = words[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

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