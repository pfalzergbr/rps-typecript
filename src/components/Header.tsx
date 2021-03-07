import { useContext } from 'react';
import { RulesContext, ActionContext } from '../contexts/rulesContext';
import styles from './styles/Header.module.scss';

const Header: React.FC = () => {
  const { gameRules } = useContext(RulesContext);
  const { changeRules } = useContext(ActionContext);
  const { title } = gameRules;

  const handleChangeRules = () => {
    gameRules.name === 'lizardSpock'
      ? changeRules('original')
      : changeRules('lizardSpock');
  };

  return (
    <div className={styles.Header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Rock, Paper, Scissors</h1>
        {title && (
          <button onClick={handleChangeRules} className={styles.subtitle}>
            {title}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
