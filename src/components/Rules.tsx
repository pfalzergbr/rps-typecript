import { useContext, useState } from 'react';
import { RulesContext, ActionContext } from '../contexts/rulesContext';
import RulesModal from './RulesModal';
import styles from './styles/Rules.module.scss';

const Rules: React.FC = () => {
  const [isModalOpen, setIsModalOpen ] = useState(false);
  const { gameRules } = useContext(RulesContext);
  const { changeRules } = useContext(ActionContext);
  const { buttonText, changeMessage } = gameRules.rulesDescription;

  const handleChangeRules = () => {
    gameRules.name === 'lizardSpock'
      ? changeRules('original')
      : changeRules('lizardSpock');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className={styles.Rules}>
      {isModalOpen && <RulesModal />}
      <div className={styles.changeRules}>
        <p className={styles.changeRulesMessage}>{changeMessage}</p>
      <button className={styles.changeRulesBtn} onClick={handleChangeRules}>
        {buttonText}
      </button>
      <button onClick={toggleModal} className={styles.modalBtn}>Show me the Rules</button>
      </div>
    </div>
  );
};

export default Rules;
