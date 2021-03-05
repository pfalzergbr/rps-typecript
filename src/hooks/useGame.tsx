import { useState } from 'react';
import { chooseWinner} from '../game/chooseWinner';
import { computerChoice } from '../game/computerChoice';


const useGame = () => {
  const [gameOn, setGameOn] = useState(false);

  
  const restartGame = () => {
    setGameOn(false);
  }
  const playGame = ( playerChoice: Choice<ValidRules>, choices: Choice<ValidRules>[]) => {
    setGameOn(true);
    const computer = computerChoice(choices);
    return chooseWinner(playerChoice, computer)
  }
  // chooseWinner()

  return { gameOn, playGame, restartGame, }
}
 
export default useGame;