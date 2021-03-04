import { render, screen } from '../../test-utils/test-utils';
import Choice from '../Choice';
import { originalRules, lizardSpockRules } from '../../gameRules';
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
    render(<Choice rules={lizardSpockRules} playGame={mockPlayGame}/>)
    const rockButton = screen.getByRole('button', {name: /rock/i})
    const paperButton = screen.getByRole('button', {name: /paper/i})
    const scissorsButton = screen.getByRole('button', {name: /scissors/i})
    const lizardButton = screen.getByRole('button', {name: /lizard/i})
    const spockButton = screen.getByRole('button', {name: /spock/i})
    expect(rockButton).toBeInTheDocument();
    expect(paperButton).toBeInTheDocument();
    expect(scissorsButton).toBeInTheDocument();
    expect(lizardButton).toBeInTheDocument();
    expect(spockButton).toBeInTheDocument();
  })
  
  test('should call playGame function with the right choice', () => {
    render(<Choice rules={originalRules} playGame={mockPlayGame}/>)
    const rockButton = screen.getByRole('button', {name: /rock/i});
    userEvent.click(rockButton);
    const playButton = screen.getByRole('button', {name: /play/i});
    userEvent.click(playButton);
    expect(mockPlayGame).toHaveBeenCalledWith('rock');
  })
  
})
