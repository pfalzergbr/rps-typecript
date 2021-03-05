import { useContext } from 'react';
import { RulesContext } from '../contexts/rulesContext';
import useGame from '../hooks/useGame';
import Choice from './Choice';
import GameResults from './GameResult';


export interface PlayAreaProps {}

const PlayArea: React.FC<PlayAreaProps> = () => {
  const { gameOn, playGame, restartGame } = useGame();
  const { gameRules } = useContext(RulesContext);

  const handlePlayGame = (playerChoice:Choice<ValidRules>) => {
    playGame(playerChoice, gameRules.choices);
  }


  const activeComponent = gameOn ? (
    <GameResults rules={gameRules} restartGame={restartGame} />
  ) : (
    <Choice rules={gameRules} playGame={handlePlayGame}/>
  );

  return <>{activeComponent}</>;
};

export default PlayArea;
