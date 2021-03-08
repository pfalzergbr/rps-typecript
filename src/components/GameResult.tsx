import { capitalize } from '../utils/capitalize';
import { generateWinnerMessage } from '../utils/generateWinnerMessage';
import ResultOption from './ResultOption';
import styles from './styles/GameResult.module.scss'

export interface GameResultProps {
  gameResult: WinnerObject;
  restartGame: () => void;
}

const GameResult: React.FC<GameResultProps> = ({ restartGame, gameResult }) => {
  const playerChoiceMessage = `chose ${capitalize(
    gameResult.playerChoice
  )}!`;
  const computerChoiceMessage = `chose ${capitalize(
    gameResult.computerChoice
  )}!`;
  const resultMessage =
    gameResult.winner !== 'draw'
      ? `${gameResult.message} ${generateWinnerMessage(gameResult.winner)}`
      : `You both chose ${gameResult.playerChoice}. It's a draw!`;

  return (
    <div className={styles.GameResult}>
      <div className={styles.results}>
        <ResultOption
          player='you'
          option={gameResult.playerChoice}
          message={playerChoiceMessage}
        />
        <ResultOption
          player='computer'
          option={gameResult.computerChoice}
          message={computerChoiceMessage}
        />
      </div>

      <div className={styles.resultMessage}>
        <p className={styles.resultText}>{resultMessage}</p>
      </div>
      <button className={styles.restartButton} onClick={restartGame}>Play again</button>
    </div>
  );
};

export default GameResult;
