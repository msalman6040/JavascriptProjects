const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput == 'bomb') {
    return userInput;
  } else {
    console.log('Error in input.');
  }
};


const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return  'scissors';
      break;
    default:
      return 'Error in computerChoice';
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice == 'bomb') {
    return 'user has won';
  }
  if (userChoice === computerChoice) {
    return 'game is a tie.';
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer has won.';
    } else {
        return 'user has won.';
    }
  } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'computer has won.';
    } else {
        return 'user has won.';
    }
  } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'computer has won.';
    } else {
        return 'user has won';
    }
  }
}

const playGame  = () => {
  const userChoice = getUserChoice('bomb');
  console.log('You threw: ' + userChoice);



  const computerChoice = getComputerChoice('paper');
  console.log('the computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  }
  
playGame();
