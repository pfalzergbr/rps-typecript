import { render, screen } from '../../test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import PlayArea from '../PlayArea';

describe('Playarea', () => {
  test('should render Choice component, if the game is not running', () => {
    render(<PlayArea />);
    const choiceHeader = screen.getByRole('heading');
    expect(choiceHeader).toHaveTextContent(/choose/i)
  })

  test('should render GameResult component, if the game ran', async () => {
    render(<PlayArea />)
    const playButton = screen.getByRole('button', {name: /play/i});
    userEvent.click(playButton);
    const resultHeader = await screen.findByRole('heading');
    expect(resultHeader).toHaveTextContent(/results/i)
  })
})
