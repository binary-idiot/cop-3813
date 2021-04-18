let number = null;
const result = document.getElementById('result');
const answerInput = document.getElementById('guess');

function guess(){
    result.classList.remove('win', 'start');

    if(number === null){
        number = Math.floor(Math.random() * 1000) + 1;
    }

    const guess = parseInt(answerInput.value);

    if(guess === number){
        number = null;
        result.innerHTML = 'Congratulations! You guessed the number!';
        result.classList.add('win');
        answerInput.value = null
    }else if(guess < number){
        result.innerHTML = 'Too low, try again';
    }else if(guess > number){
        result.innerHTML = 'Too high, try again';
    }
}