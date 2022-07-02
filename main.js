let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highSCore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there's no input
  if (!guess) {
    document.querySelector('.message').textContent = ' 🤦‍♂️ Try a Number!';
    // when the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅Currect Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    highSCore = score;
    document.querySelector('.highscore').textContent = highSCore;

    //when the guess is greater than the secret Number
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Number too High';
    score--;
    document.querySelector('.score').textContent = score;

    //when the guess is less than the secret Number
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Number too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
  // when the score is less than one
  if (score < 1) {
    document.querySelector('.message').textContent = '🤦‍♀️ You Lost The Game! ';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
