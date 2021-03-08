import styles from './styles/ResultOption.module.scss';
import { capitalize } from '../utils/capitalize';

export interface ResultOptionProps {
  player: PlayerName;
  option: ValidRules;
  message: string
}
 
const ResultOption: React.FC<ResultOptionProps> = ({player, option, message}) => {
  return ( 
  <div>
      <span className={styles.player}>{capitalize(player)}</span>
      <div role='img' style={{backgroundImage: `url(./images/${option}.png)`}} className={styles.optionImage}></div>
      <span className={styles.optionLabel}>{message}</span>
  </div> );
}
 
export default ResultOption;