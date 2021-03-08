import { useContext } from 'react';
import { RulesContext } from '../contexts/rulesContext';
import styles from './styles/RulesModal.module.scss';

export interface RulesModalProps {
  closeModal: () => void;
}

const RulesModal: React.SFC<RulesModalProps> = ({closeModal}) => {
  const { gameRules } = useContext(RulesContext);
  const {
    rules,
    ruleBullets,
  } = gameRules.rulesDescription;

  return (
    <>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={styles.modal}>
        <div className={styles.rules}>
          <h3 className={styles.rulesTitle}>Rules</h3>
          <ul className={styles.rulesList}>
            {ruleBullets.map((rule, index) => (
              <li className={styles.ruleItem} key={index}>
                {rule}
              </li>
            ))}
          </ul>
          <p className={styles.rulesText}>{rules}</p>
          <button className={styles.backButton} onClick={closeModal}>Back</button>
        </div>
      </div>
    </>
  );
};

export default RulesModal;
