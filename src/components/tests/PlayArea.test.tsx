import { render, screen } from '../../test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import PlayArea from '../PlayArea';

describe('PlayArea', () => {
  test('should render Choice buttons, if the game is not running', () => {
    render(<PlayArea />)
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent(/rock/i);
    expect(buttons[1]).toHaveTextContent(/paper/i);
    expect(buttons[2]).toHaveTextContent(/scissors/i);
  })

  test('should render GameResult component, if the game ran', async () => {
    render(<PlayArea />)
    const paperButton = screen.getByRole('button', {name: /rock/i});
    userEvent.click(paperButton);
    const playButton = screen.getByRole('button', {name: /play/i});
    userEvent.click(playButton);
    const resultImages = await screen.findAllByRole('img');
    expect(resultImages).toHaveLength(2)
  })

  test('should render Choice buttons again, if clicked play again', async () => {
    render(<PlayArea />)
    const paperButton = screen.getByRole('button', {name: /rock/i});
    userEvent.click(paperButton);
    const playButton = screen.getByRole('button', {name: /play/i});
    userEvent.click(playButton);
    const playAgainButton = await screen.findByRole('button', {name: /play again/i});
    userEvent.click(playAgainButton);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent(/rock/i);
    expect(buttons[1]).toHaveTextContent(/paper/i);
    expect(buttons[2]).toHaveTextContent(/scissors/i);
  })
  
})
