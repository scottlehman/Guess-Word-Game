var wins = 0;


var newGame = function () {
    generateGame();
}

var generateGame = function () {

    // Words Array
    var words = ["jupiter", "blackhole", "constellation", "satellite", "galaxy", "astronaut", "comet"]
    // holds the word that is randomly generated
    var chosenWord = words[Math.floor(Math.random() * words.length)];
    //Holds the letters in chosenWord and splits it into an array
    var letters = chosenWord.split('');
    //holds the right guessed letters
    var currentWord = [];
    //holds the wrong letters guessed
    var wrongGuess = [];
    // games counter
    var guessesLeft = 10;
    var letterCount = letters.length;
    var correctGuess = 0;

    for (var i = 0; i < chosenWord.length; i++) {

        currentWord.push('_ ');

        document.getElementById('currentWord').innerHTML = currentWord.join('');
        document.getElementById('attemptsLeft').innerHTML = guessesLeft;
        document.getElementById('guessedLetters').innerHTML = wrongGuess;
    }

    document.onkeyup = function (event) {
        
        var userGuess = event.key;

        if (letters.indexOf(userGuess) > -1) {

            for (var i = 0; i < letterCount; i++) {
                if (letters[i] === userGuess) {
                    currentWord[i] = userGuess;
                    document.getElementById('currentWord').innerHTML = currentWord.join('');
                    correctGuess++;
                }
            }
        } else {
            guessesLeft--;
            wrongGuess.push(userGuess);
            document.getElementById('attemptsLeft').innerHTML = guessesLeft;
            document.getElementById('guessedLetters').innerHTML = wrongGuess;

        }

        if (correctGuess === letters.length) {
            wins++;
            document.getElementById('wins').innerHTML = 'wins: ' + wins;
            document.getElementById('my-4').innerHTML = 'Congratulations You Win! You guessed ' + letters.join('');
            // alert('Congratulations You Win!');
            var audio1 = new Audio('assets/apollo11liftoff.mp3')
            audio1.play();
            newGame();
        }

        if (guessesLeft === 0) {
            document.getElementById("my-4").innerHTML = 'Sorry you have lost, the word was ' + letters.join('');
            // alert('Sorry you have lost');
            var audio2 = new Audio('assets/apollo13prob.mp3')
            audio2.play();
            newGame();
        }
    }

}

generateGame();