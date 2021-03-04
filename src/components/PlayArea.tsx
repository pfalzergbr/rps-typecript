import { useState } from 'react';
import { originalRules } from '../gameRules';
import Choice from './Choice';
import GameResults from './GameResult';

export interface PlayAreaProps {}

const PlayArea: React.FC<PlayAreaProps> = () => {
  const [gameOn, setGameOn] = useState(false);

  const playGame = () => {
    setGameOn(true);
  }

  const activeComponent = gameOn ? (
    <GameResults rules={originalRules} />
  ) : (
    <Choice rules={originalRules} playGame={playGame}/>
  );

  return <>{activeComponent}</>;
};

export default PlayArea;
