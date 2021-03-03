import { render, renderWithContext, screen } from '../../test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import Rules from '../Rules';
import { lizardSpockRules } from '../../gameRules';

describe('Welcome message without DLC', () => {
  const ruleset = {
    rules:
      'Scissors cuts paper, paper covers rock, rock crushes scissors. A classic, time proven way to resolve your disputes.',
    changeMessage:
      'Anecdotal evidence suggests, that people familiar with each other, will tie 75 to 80% of the time, due to the limited number of outcomes. Want to try with more options?',
    buttonText: 'Add Lizard/Spock',
  };

  test('should render welcome message without DLC', () => {
    render(<Rules />);
    const rules = screen.getByText(ruleset.rules);
    expect(rules).toBeInTheDocument();
  });

  test('should render a change message without DLC', () => {
    render(<Rules />);
    const changeMessage = screen.getByText(ruleset.changeMessage);
    expect(changeMessage).toBeInTheDocument();
  });

  test('should render DLC button', () => {
    render(<Rules />);
    const changeButton = screen.getByRole('button', {
      name: ruleset.buttonText,
    });
    expect(changeButton).toBeInTheDocument();
  });
});

describe('Welcome message WITH DLC', () => {
  const {
    rules,
    changeMessage,
    buttonText,
  } = lizardSpockRules.rulesDescription;

  test('should render DLC welcome message', () => {
    renderWithContext(<Rules />);
    const changeButton = screen.getByRole('button', { name: /add/i });
    userEvent.click(changeButton);
    const dlcRules = screen.getByText(rules);
    expect(dlcRules).toHaveTextContent(rules);
    screen.debug();
  });

  test('should render a change message with DLC', () => {
    renderWithContext(<Rules />);
    const changeButton = screen.getByRole('button', { name: /add/i });
    userEvent.click(changeButton);
    const dlcChangeMessage = screen.getByText(changeMessage);
    expect(dlcChangeMessage).toHaveTextContent(changeMessage)
  });

  test('should render switch off DLC button', () => {
    renderWithContext(<Rules />);
    const changeButton = screen.getByRole('button', { name: /add/i });
    userEvent.click(changeButton);
    const dlcChangeButton = screen.getByRole('button', {
      name: buttonText,
    });
    expect(dlcChangeButton).toHaveTextContent(buttonText)
  });

  test('should switch back to original, once clicked on back to original Button', () => {
    renderWithContext(<Rules />);
    const changeButton = screen.getByRole('button', { name: /add/i });
    userEvent.click(changeButton);
    const dlcChangeButton = screen.getByRole('button', {
      name: buttonText,
    });
    userEvent.click(dlcChangeButton);
    expect(changeButton).toHaveTextContent('Add Lizard/Spock')
  });
});
