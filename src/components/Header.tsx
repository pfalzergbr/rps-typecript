import { useContext } from 'react';
import { RulesContext } from '../contexts/rulesContext';
import styles from './styles/Header.module.scss';

const Header: React.FC = () => {
  const { gameRules } = useContext(RulesContext);
  const { title } = gameRules;

  return (
    <div>
      <h1 className={styles.header}>Rock, Paper, Scissors</h1>
      {title && <h2>{title}</h2>}
    </div>
  );
};

export default Header;
