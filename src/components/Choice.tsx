export interface ChoiceProps {
  rules: GameRuleset<Choice<OriginalChoices | LizardSpockChoices>>;
  playGame: () => void;
}

const Choice: React.FC<ChoiceProps> = ({ rules, playGame }) => {
  return (
    <div>
      <h2>Choose your weapon!</h2>
      <ul>
        <li>
          <button>Rock</button>
        </li>
        <li>
          <button>Paper</button>
        </li>
        <li>
          <button>Scissors</button>
        </li>
      </ul>
      <button onClick={playGame}>Play!</button>
    </div>
  );
};

export default Choice;
