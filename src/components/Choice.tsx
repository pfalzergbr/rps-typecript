import { useState } from 'react';
import { capitalize } from '../utils/capitalize'

export interface ChoiceProps {
  rules: GameRuleset<ValidRules>;
  playGame: (choice: ValidRules) => void;
}

const Choice: React.FC<ChoiceProps> = ({ rules, playGame }) => {
  const { choices } = rules;
  const [choice, setChoice] = useState<
    ValidRules | null
  >(null);

  const handlePlayGame = () => {
    if (choice) {
      playGame(choice);
    }
  };

  const handleChoice = (choice: ValidRules) => {
    setChoice(choice);
  };

  return (
    <div>
      <h2>{choice ? `You are choosing ${capitalize(choice)}` : 'Choose your weapon!'}</h2>
      <div>
        {choices.map(({ choiceName }, index) => (
          <button
            onClick={() => handleChoice(choiceName)}
            value={choiceName}
            key={choiceName + index}
          >
            {capitalize(choiceName)}
          </button>
        ))}
      </div>
      <button onClick={handlePlayGame}>Play!</button>
    </div>
  );
};

export default Choice;
