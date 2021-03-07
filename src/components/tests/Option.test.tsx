import { render, screen } from '@testing-library/react';
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
    render(<Option option={rock} handleClick={mockHandleClick} />)
  })
  
})
