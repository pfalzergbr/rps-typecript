import { useContext } from 'react';
import { RulesContext } from '../contexts/rulesContext';

const Header: React.FC = () => {
  const { rulesetTitle } = useContext(RulesContext);

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      {rulesetTitle.title && <h2>{rulesetTitle.title}</h2>}
    </div>
  );
};

export default Header;
