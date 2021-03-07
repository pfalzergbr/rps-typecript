import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Option from '../Option';

describe('Option', () => {
  const mockHandleClick = jest.fn();

  const rock: Choice<ValidRules> = {
    choiceName: 'rock',
    beats: [
      {
        choice: 'scissors',
        message: 'Rock smashes scissors.',
      },
    ],
  }

  test('should render the option correctly', () => {
    render(<Option option={rock} handleClick={mockHandleClick} activeOption='paper' />)
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    const label = screen.getByText(/rock/i);
    expect(label).toBeInTheDocument();
  })
})
