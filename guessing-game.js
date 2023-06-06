function guessingGame() {
    let randomTarget = Math.floor(Math.random() * 100)
    console.log( "RANDOM TARGET IS ", randomTarget)
    let tries = 0;
    let gameOver = false;

    return function guess(guess){
        if(gameOver){
            return "The game is over, you already won!"
        }
        if(guess === randomTarget){
            tries++
            gameOver = true;
            return `You win! You found ${randomTarget} in ${tries} guesses.`
        }
        if(guess < randomTarget){
            tries++
            return `${guess} is too low!`
        }
        else{
            tries++;
            return `${guess} is too high!`
        }
    }

}

module.exports = { guessingGame };
