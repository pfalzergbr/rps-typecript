import { useContext } from 'react';
import { RulesContext } from '../contexts/rulesContext';
import useGame from '../hooks/useGame';
import Choice from './Choice';
import GameResults from './GameResult';
import styles from './styles/PlayArea.module.scss';


export interface PlayAreaProps {}

const PlayArea: React.FC<PlayAreaProps> = () => {
  const { gameResult, playGame, restartGame } = useGame();
  const { gameRules } = useContext(RulesContext);

  const handlePlayGame = (playerChoice:Choice<ValidRules>) => {
    playGame(playerChoice, gameRules.choices);
  }


  const activeComponent = gameResult ? (
    <GameResults gameResult={gameResult} restartGame={restartGame} />
  ) : (
    <Choice rules={gameRules} playGame={handlePlayGame}/>
  );

  return <div className={styles.PlayArea}>{activeComponent}</div>;
};

export default PlayArea;
