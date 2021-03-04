export interface ChoiceProps {
  rules: GameRuleset<OriginalChoices | LizardSpockChoices>;
  playGame: () => void;
}

const Choice: React.FC<ChoiceProps> = ({ rules, playGame }) => {
  const { choices } = rules;

  return (
    <div>
      <h2>Choose your weapon!</h2>
      <div>
        {choices.map(({choiceName}, index) => <button key={choiceName + index}>{choiceName}</button>)}
      </div>
      <button onClick={playGame}>Play!</button>
    </div>
  );
};

export default Choice;
