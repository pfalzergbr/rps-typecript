import { useContext } from 'react';
import { RulesContext } from '../contexts/rulesContext';
import styles from './styles/Header.module.scss';

const Header: React.FC = () => {
  const { gameRules } = useContext(RulesContext);
  const { title } = gameRules;

  return (
    <div className={styles.Header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Rock, Paper, Scissors</h1>
        {title && <h2 className={styles.subtitle}>{title}</h2>}
      </div>
    </div>
  );
};

export default Header;
