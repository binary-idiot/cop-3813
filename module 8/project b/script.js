let number = null;
let count = 0;
const result = document.getElementById('result');
const answerInput = document.getElementById('guess');
const message = document.getElementById('message');

function guess(){
    count++;
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

        if(count < 10){
            message.innerHTML = 'Either you know the secret or you got lucky!';
        }else if(count === 10){
            message.innerHTML = 'Ahah! You know the secret!';
        }else{
            message.innerHTML = 'You should be able to do better!';
        }
        count = 0;
    }else if(guess < number){
        result.innerHTML = 'Too low, try again';
        message.innerHTML = '';
    }else{
        result.innerHTML = 'Too high, try again';
        message.innerHTML = '';
    }
}