export interface RulesDescription {
  rules: string;
  changeMessage: string;
  buttonText: string;
}

export interface RulesProps {
  rulesDescription?: RulesDescription;
}

const basicRuleset = {
  rules: 'Scissors cuts paper, paper covers rock, rock crushes scissors. A classic, time proven way to resolve your disputes.',
  changeMessage: 'Anecdotal evidence suggests, that people familiar with each other, will tie 75 to 80% of the time, due to the limited number of outcomes. Want to try with more options?',
  buttonText: 'Add Lizard/Spock'
}

const Rules: React.FC<RulesProps> = ({ rulesDescription = basicRuleset }) => {
  const {rules, changeMessage, buttonText} = rulesDescription

  return (
    <div>
      <div>
        <h3>Rules</h3>
        <p>{rules}</p>
        {/* <p>changeMessage</p> */}
        <p>{changeMessage}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Rules;
