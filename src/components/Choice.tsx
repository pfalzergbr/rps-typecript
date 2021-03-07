import { useState } from 'react';
import { capitalize } from '../utils/capitalize';
import Option from './Option';
import styles from './styles/Choice.module.scss'

export interface ChoiceProps {
  rules: GameRuleset<ValidRules>;
  playGame: (choice: Choice<ValidRules>) => void;
}

const Choice: React.FC<ChoiceProps> = ({ rules, playGame }) => {
  const { choices } = rules;
  const [choice, setChoice] = useState<Choice<ValidRules> | null>(null);

  const handlePlayGame = () => {
    if (choice) {
      playGame(choice);
    }
  };

  const handleChoice = (choice: Choice<ValidRules>) => {
    setChoice(choice);
  };

  return (
    <div className={styles.Choice}>
      <h2>
        {choice
          ? `You are choosing ${capitalize(choice.choiceName)}`
          : 'Choose your weapon!'}
      </h2>
      <div className={styles.choices}>
        {choices.map((choice, index) => (
          <Option
            key={choice.choiceName + index}
            handleClick={handleChoice}
            option={choice}
          />
        ))}
      </div>
      <button onClick={handlePlayGame}>Play!</button>
    </div>
  );
};

export default Choice;
