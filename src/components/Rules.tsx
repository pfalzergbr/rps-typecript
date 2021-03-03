import { RulesDescription } from '../gameRules';
import { originalRules } from '../gameRules';
export interface RulesProps {
  rulesDescription?: RulesDescription;
}


const Rules: React.FC<RulesProps> = ({ rulesDescription = originalRules.rulesDescription }) => {
  const {rules, changeMessage, buttonText} = rulesDescription

  return (
    <div>
      <div>
        <h3>Rules</h3>
        <p>{rules}</p>
        <p>{changeMessage}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Rules;
