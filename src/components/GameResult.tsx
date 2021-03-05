export interface GameResultProps {
  rules: GameRuleset<ValidRules>;
  restartGame: () => void;
}
 
const GameResult: React.FC<GameResultProps> = ({rules, restartGame}) => {
  return ( <div>
    <h2>Results</h2>
    <button onClick={restartGame}>Play again</button>
  </div> );
}
 
export default GameResult;