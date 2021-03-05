export interface GameResultProps {
  gameResult: WinnerObject;
  restartGame: () => void;
}
 
const GameResult: React.FC<GameResultProps> = ({ restartGame}) => {
  return ( <div>
    <h2>Results</h2>
    <button onClick={restartGame}>Play again</button>
  </div> );
}
 
export default GameResult;