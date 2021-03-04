import { useContext } from 'react';
import { RulesContext, ActionContext } from '../contexts/rulesContext';


const Rules: React.FC = () => {
  const { gameRules } = useContext(RulesContext);
  const { changeRules } = useContext(ActionContext)
  const { rules, changeMessage, buttonText } = gameRules.rulesDescription;

  const handleChangeRules = () => {
    gameRules.name === 'lizardSpock' ? 
    changeRules('original') : 
    changeRules('lizardSpock')  
  };

  return (
    <div>
      <div>
        <h3>Rules</h3>
        <p>{rules}</p>
        <p>{changeMessage}</p>
        <button onClick={handleChangeRules}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Rules;
