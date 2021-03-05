export const chooseWinner = (
  playerChoice: Choice<ValidRules>,
  computerChoice: Choice<ValidRules>
): WinnerObject => {
  const playerChoiceName: ValidRules = playerChoice.choiceName;
  const computerChoiceName: ValidRules = computerChoice.choiceName;

  const winnerObject: WinnerObject = {
    playerChoice: playerChoice.choiceName,
    computerChoice: computerChoice.choiceName,
    winner: 'draw',
    message: '',
  }; 

  const playerBeatMessage = playerChoice.beats.find(
    (element) => element.choice === computerChoiceName
  );

  const computerBeatMessage = computerChoice.beats.find(
    (element) => element.choice === playerChoiceName
  );

  const playerBeatsComputer: boolean = !!playerChoice.beats.find(
    (element) => element.choice === computerChoiceName
  );

  if (playerChoiceName === computerChoiceName) {
    winnerObject.winner = 'draw';
  } else if (playerBeatsComputer) {
    winnerObject.winner = 'player';
  } else {
    winnerObject.winner = 'computer';
  }

  if (winnerObject.winner === 'player' && playerBeatMessage) {
    winnerObject.message = playerBeatMessage.message;
  } else if (winnerObject.winner === 'computer' && computerBeatMessage) {
    winnerObject.message = computerBeatMessage.message;
  } else {
    winnerObject.message = 'Draw!';
  }

  return winnerObject;
};
