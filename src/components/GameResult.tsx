import { capitalize } from '../utils/capitalize';
import { generateWinnerMessage } from '../utils/generateWinnerMessage';
import ResultOption from './ResultOption';

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
      <h2>Results</h2>

      <ResultOption player='you' option={gameResult.playerChoice} message={playerChoiceMessage}/>
      <ResultOption player='computer' option={gameResult.computerChoice} message={computerChoiceMessage}/>

      <div>
        <p>{resultMessage}</p>
      </div>
      <button onClick={restartGame}>Play again</button>
    </div>
  );
};

export default GameResult;
