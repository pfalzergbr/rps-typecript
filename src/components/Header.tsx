import { useContext } from 'react';
import { RulesContext } from '../contexts/rulesContext';

const Header: React.FC = () => {
  const { gameRules } = useContext(RulesContext);
  const { title } = gameRules.rulesetTitle;

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      {title && <h2>{title}</h2>}
    </div>
  );
};

export default Header;
