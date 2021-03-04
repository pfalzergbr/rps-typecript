import { useState } from 'react';
import { useContext } from 'react';
import { RulesContext } from '../contexts/rulesContext';
import Choice from './Choice';
import GameResults from './GameResult';

export interface PlayAreaProps {}

const PlayArea: React.FC<PlayAreaProps> = () => {
  const { gameRules } = useContext(RulesContext);
  const [gameOn, setGameOn] = useState(false);

  const playGame = ( choice: OriginalChoices | LizardSpockChoices ) => {
    setGameOn(true);
  }

  const activeComponent = gameOn ? (
    <GameResults rules={gameRules} />
  ) : (
    <Choice rules={gameRules} playGame={playGame}/>
  );

  return <>{activeComponent}</>;
};

export default PlayArea;
