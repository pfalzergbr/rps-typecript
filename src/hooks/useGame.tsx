import { useState } from 'react';
import { chooseWinner, computerChoice } from '../game/index';


const useGame = () => {
  const [gameOn, setGameOn] = useState(false);

  const playGame = ( playerChoice: Choice<ValidRules>, choices: Choice<ValidRules>[]) => {
    const computer = computerChoice(choices);
    const winnerObject = chooseWinner(playerChoice, computer)
  }
  // chooseWinner()
}
 
export default useGame;