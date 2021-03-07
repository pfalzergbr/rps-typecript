import { capitalize } from '../utils/capitalize';
import styles from './styles/Option.module.scss';

export interface OptionProps {
  option: Choice<ValidRules>;
  handleClick: (choice: Choice<ValidRules>) => void;
}

const Option: React.FC<OptionProps> = ({ option, handleClick }) => {
  return (
    <button className={styles.button} onClick={() => handleClick(option)}>
      <div style={{backgroundImage: `url(./images/${option.choiceName}.png)`}} className={styles.image}></div>
      <span className={styles.optionLabel}>{capitalize(option.choiceName)}</span>
    </button>
  );
};

export default Option;
