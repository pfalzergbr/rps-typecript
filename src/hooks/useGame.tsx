import { useState } from 'react';
import { chooseWinner } from '../game/chooseWinner';
import { computerChoice } from '../game/computerChoice';

const useGame = () => {
  const [gameResult, setGameResult] = useState<WinnerObject | null>(null);

  const restartGame = () => {
    setGameResult(null);
  };
  const playGame = (
    playerChoice: Choice<ValidRules>,
    choices: Choice<ValidRules>[]
  ) => {
    const computer = computerChoice(choices);
    const gameResult = chooseWinner(playerChoice, computer);
    setGameResult(gameResult);
  };

  return { gameResult, playGame, restartGame };
};

export default useGame;
