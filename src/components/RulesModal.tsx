import { useContext } from 'react';
import { RulesContext } from '../contexts/rulesContext';
import styles from './styles/RulesModal.module.scss'

export interface RulesModalProps {}

const RulesModal: React.SFC<RulesModalProps> = () => {
  const { gameRules } = useContext(RulesContext);
  const {
    rules,
    ruleBullets,
    changeMessage,
    buttonText,
  } = gameRules.rulesDescription;
  return (
    <div>
      <div className={styles.rules}>
        <h3 className={styles.rulesTitle}>Rules</h3>
        {/* <ul className={styles.rulesList}>
          {ruleBullets.map((rule, index) => <li className={styles.ruleItem} key={index}>{rule}</li>)}
        </ul>  */}
        <p className={styles.rulesText}>{rules}</p>

      </div>
    </div>
  );
};

export default RulesModal;
