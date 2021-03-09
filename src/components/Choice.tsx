import { useContext } from 'react';
import { capitalize } from '../utils/capitalize';
import Option from './Option';
import styles from './styles/Choice.module.scss';
import { ActionContext } from '../contexts/rulesContext';

export interface ChoiceProps {
  rules: GameRuleset<ValidRules>;
  playGame: (option: Choice<ValidRules>) => void;
}

const Choice: React.FC<ChoiceProps> = ({ rules, playGame }) => {
  const { choices } = rules;
  const {choice, setChoice } = useContext(ActionContext);

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
      <div className={styles.choices}>
        {choices.map((option, index) => (
          <Option
            activeOption={choice ? choice.choiceName : null}
            key={option.choiceName + index}
            handleClick={handleChoice}
            option={option}
          />
        ))}
      </div>
      <p>
        {choice
          ? `You are choosing ${capitalize(choice.choiceName)}!`
          : 'Choose your weapon!'}
      </p>
      <button disabled={!choice} className={styles.playButton} onClick={handlePlayGame}>
        Play!
      </button>
    </div>
  );
};

export default Choice;
