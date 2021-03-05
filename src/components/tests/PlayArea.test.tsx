import { render, screen } from '../../test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import PlayArea from '../PlayArea';

describe('PlayArea', () => {
  test('should render Choice component, if the game is not running', () => {
    render(<PlayArea />);
    const choiceHeader = screen.getByRole('heading', {level: 2});
    expect(choiceHeader).toHaveTextContent(/choose/i)
  })

  test('should render GameResult component, if the game ran', async () => {
    render(<PlayArea />)
    const paperButton = screen.getByRole('button', {name: /rock/i});
    userEvent.click(paperButton);
    const playButton = screen.getByRole('button', {name: /play/i});
    userEvent.click(playButton);
    const resultHeader = await screen.findByRole('heading');
    expect(resultHeader).toHaveTextContent(/results/i)
  })

  test('should render Choice component again, if clicked play again', async () => {
    render(<PlayArea />)
    const paperButton = screen.getByRole('button', {name: /rock/i});
    userEvent.click(paperButton);
    const playButton = screen.getByRole('button', {name: /play/i});
    userEvent.click(playButton);
    const playAgainButton = await screen.findByRole('button', {name: /play again/i});
    userEvent.click(playAgainButton);
    const choiceHeader = await screen.findByRole('heading');
    expect(choiceHeader).toHaveTextContent(/choose/i)
  })
  
})
