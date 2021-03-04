export interface ChoiceProps {
  rules: GameRuleset;
  playGame: () => void;
}
 
const Choice: React.FC<ChoiceProps> = ({rules, playGame}) => {
  return ( <div>
    <h2>Choose your weapon!</h2>
    <button onClick={playGame}>Play!</button>
  </div> );
}
 
export default Choice;