import { render, screen } from '../../test-utils/test-utils';
import Choice from '../Choice';
import { originalRules } from '../../gameRules';
import userEvent from '@testing-library/user-event';


describe('Choice Area', () => {
  const mockPlayGame = jest.fn();

  test('should render correct choice buttons on normal ruleset', () => {
    render(<Choice rules={originalRules} playGame={mockPlayGame}/>)
    const rockButton = screen.getByRole('button', {name: /rock/i})
    const paperButton = screen.getByRole('button', {name: /paper/i})
    const scissorsButton = screen.getByRole('button', {name: /scissors/i})
    expect(rockButton).toBeInTheDocument();
    expect(paperButton).toBeInTheDocument();
    expect(scissorsButton).toBeInTheDocument();
  })

  test('should render correct choice buttons on lizard-spock ruleset', () => {
    
  })
  
  test('should call playGame function with the right choice', () => {
    
  })
  
})
