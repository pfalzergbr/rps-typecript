export interface GameResultProps {
  rules: GameRuleset<ValidRules>;
}
 
const GameResult: React.FC<GameResultProps> = ({rules}) => {
  return ( <div>
    <h2>Results</h2>
  </div> );
}
 
export default GameResult;