import { useContext } from 'react';
import { RulesContext, ActionContext } from '../contexts/rulesContext';
import styles from './styles/Rules.module.scss';

const Rules: React.FC = () => {
  const { gameRules } = useContext(RulesContext);
  const { changeRules } = useContext(ActionContext);
  const { rules, changeMessage, buttonText } = gameRules.rulesDescription;

  const handleChangeRules = () => {
    gameRules.name === 'lizardSpock'
      ? changeRules('original')
      : changeRules('lizardSpock');
  };

  return (
    <div className={styles.Rules}>
      <div className={styles.rules}>
        <h3 className={styles.rulesTitle}>Rules</h3>
        <p className={styles.rulesText}>{rules}</p>
        <div className={styles.changeRules}>
        <p className={styles.changeRulesMessage}>{changeMessage}</p>
        <button className={styles.changeRulesBtn} onClick={handleChangeRules}>
          {buttonText}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Rules;
