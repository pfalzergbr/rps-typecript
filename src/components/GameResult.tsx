import { capitalize } from '../utils/capitalize';
import { generateWinnerMessage } from '../utils/generateWinnerMessage';
export interface GameResultProps {
  gameResult: WinnerObject;
  restartGame: () => void;
}

const GameResult: React.FC<GameResultProps> = ({ restartGame, gameResult }) => {
  const playerChoiceMessage = `You chose ${capitalize(
    gameResult.playerChoice
  )}!`;
  const computerChoiceMessage = `Computer chose ${capitalize(
    gameResult.computerChoice
  )}!`;
  const resultMessage =
    gameResult.winner !== 'draw'
      ? `${gameResult.message} ${generateWinnerMessage(gameResult.winner)}`
      : `You both chose ${gameResult.playerChoice}. It's a draw!`;

  return (
    <div>
      <div>
        <p>{playerChoiceMessage}</p>
      </div>
      <div>
        <p>{computerChoiceMessage}</p>
      </div>
      <div>
        <p>{resultMessage}</p>
      </div>
      <h2>Results</h2>
      <button onClick={restartGame}>Play again</button>
    </div>
  );
};

export default GameResult;
