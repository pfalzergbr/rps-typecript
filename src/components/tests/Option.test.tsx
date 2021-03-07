import { render, screen } from '@testing-library/react';
import Option from '../Option';

describe('Option', () => {
  const mockHandleClick = jest.fn();

  test('should render the option correctly', () => {
    render(<Option option='' imageUrl='' onClick={mockHandleClick} />)
  })
  
})
