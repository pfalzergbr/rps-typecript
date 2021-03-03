import { useContext } from 'react';
import { RulesContext, ActionContext } from '../contexts/rulesContext';

const Rules: React.FC = () => {
  const { rulesDescription } = useContext(RulesContext);
  const { setGameRules } = useContext(ActionContext)
  const { rules, changeMessage, buttonText } = rulesDescription;

  const changeRules = () => {
    setGameRules()
  };

  return (
    <div>
      <div>
        <h3>Rules</h3>
        <p>{rules}</p>
        <p>{changeMessage}</p>
        <button onClick={changeRules}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Rules;
