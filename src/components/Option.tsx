import { capitalize } from '../utils/capitalize';
import styles from './styles/Option.module.scss';

export interface OptionProps {
  activeOption: string | null;
  option: Choice<ValidRules>;
  handleClick: (choice: Choice<ValidRules>) => void;
}


const Option: React.FC<OptionProps> = ({ option, activeOption, handleClick }) => {
  const isActiveButton: boolean = activeOption === option.choiceName;

  return (
    <button className={styles.button} onClick={() => handleClick(option)}>
      <div role='img' style={{backgroundImage: `url(./images/${option.choiceName}.png)`}} className={`${styles.image} ${isActiveButton ? styles.active : ''}`}></div>
      <span className={styles.optionLabel}>{capitalize(option.choiceName)}</span>
    </button>
  );
};

export default Option;
