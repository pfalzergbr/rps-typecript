export const chooseWinner = (
  playerChoice: Choice<ValidRules>,
  computerChoice: Choice<ValidRules>
): WinnerObject => {
  const playerChoiceName: ValidRules = playerChoice.choiceName;
  const computerChoiceName: ValidRules = computerChoice.choiceName;

  const playerBeatMessage = playerChoice.beats.find(
    (element) => element.choice === computerChoiceName
  );

  const computerBeatMessage = computerChoice.beats.find(
    (element) => element.choice === playerChoiceName
  );

  const winner = playerChoice.beats.find(
    (element) => element.choice === computerChoiceName
  )
    ? 'player'
    : 'computer';

  let resultMessage: string;
  if (winner === 'player' && playerBeatMessage) {
    resultMessage = playerBeatMessage.message;
  } else if (winner === 'computer' && computerBeatMessage) {
    resultMessage = computerBeatMessage.message;
  }

  const winnerObject : WinnerObject = {
    playerChoice: playerChoice.choiceName,
    computerChoice: computerChoice.choiceName,
    winner,
    message: resultMessage
  }

  return winnerObject;
};
