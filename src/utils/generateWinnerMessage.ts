export const generateWinnerMessage = (
  winner: 'computer' | 'player' | 'draw'
) => {
  if (winner === 'player') {
    return 'You win!';
  } else if (winner === 'computer') {
    return 'Computer wins!';
  } else {
    return 'draw';
  }
};
