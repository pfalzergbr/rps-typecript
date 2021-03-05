import { render, screen } from '../../test-utils/test-utils';
import userEvent from '@testing-library/user-event'
import GameResult from '../GameResult';

describe('GameResult', () => {
  const mockRestart = jest.fn();

  test('should render correct winner if computer wins', async () => {
    const gameResult: WinnerObject = {
      playerChoice: 'spock',
      computerChoice: 'paper',
      winner: 'computer',
      message: 'Paper disproves Spock.',
    };

    render(<GameResult gameResult={gameResult} restartGame={mockRestart} />);
    const playerChoice = await screen.findByText(`You chose Spock!`)
    expect(playerChoice).toBeInTheDocument();
    const computerChoice = await screen.findByText(`Computer chose Paper!`)
    expect(computerChoice).toBeInTheDocument();
    const resultMessage = await screen.findByText('Paper disproves Spock. Computer wins!')
    expect(resultMessage).toBeInTheDocument()
    const restartButton = await screen.findByRole('button', {name: /play again/i})
    userEvent.click(restartButton);
    expect(mockRestart).toHaveBeenCalled();
  });

  test('should render correct winner if player wins', async () => {
    const gameResult: WinnerObject = {
      playerChoice: 'rock',
      computerChoice: 'lizard',
      winner: 'player',
      message: 'Rock crushes lizard.',
    };

    render(<GameResult gameResult={gameResult} restartGame={mockRestart} />);
    const playerChoice = await screen.findByText(`You chose Rock!`)
    expect(playerChoice).toBeInTheDocument();
    const computerChoice = await screen.findByText(`Computer chose Lizard!`)
    expect(computerChoice).toBeInTheDocument();
    const resultMessage = await screen.findByText('Rock crushes lizard. You win!')
    expect(resultMessage).toBeInTheDocument()
    const restartButton = await screen.findByRole('button', {name: /play again/i})
    userEvent.click(restartButton);
    expect(mockRestart).toHaveBeenCalled();
  });

  test('should render correct winner if it is a draw', async () => {
    const gameResult: WinnerObject = {
      playerChoice: 'scissors',
      computerChoice: 'scissors',
      winner: 'draw',
      message: 'Draw!',
    };

    render(<GameResult gameResult={gameResult} restartGame={mockRestart} />);
    const playerChoice = await screen.findByText(`You chose Scissors!`)
    expect(playerChoice).toBeInTheDocument();
    const computerChoice = await screen.findByText(`Computer chose Scissors!`)
    expect(computerChoice).toBeInTheDocument();
    const resultMessage = await screen.findByText("You both chose scissors. It's a draw!")
    expect(resultMessage).toBeInTheDocument()
    const restartButton = await screen.findByRole('button', {name: /play again/i})
    userEvent.click(restartButton);
    expect(mockRestart).toHaveBeenCalled();
  });
});
