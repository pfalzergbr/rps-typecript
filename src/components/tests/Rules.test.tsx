import { render, renderWithContext, screen } from '../../test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import Rules from '../Rules';
import { originalRules, lizardSpockRules } from '../../gameRules';

describe('Welcome message without DLC', () => {
  const { rules, changeMessage, buttonText } = originalRules.rulesDescription;

  test('should render welcome message without DLC', () => {
    render(<Rules />);
    const rulesButton = screen.getByRole('button', { name: /rules/i });
    userEvent.click(rulesButton);
    const originalRules = screen.getByText(rules);
    expect(originalRules).toBeInTheDocument();
  });

  // test('should render correct rules list without DLC', () => {
  //   render(<Rules />);
  //   const rulesList = screen.getAllByRole('listitem');
  //   expect(rulesList).toHaveLength(3);
  // })

  test('should render Rules modal button', () => {
    render(<Rules />);
    const rulesButton = screen.getByRole('button', {
      name: 'Show me the Rules',
    });
    expect(rulesButton).toBeInTheDocument();
  });

  test('should render a change message without DLC', () => {
    render(<Rules />);
    const originalChangeMessage = screen.getByText(changeMessage);
    expect(originalChangeMessage).toBeInTheDocument();
  });

  test('should render DLC button', () => {
    render(<Rules />);
    const changeButton = screen.getByRole('button', {
      name: buttonText,
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

  test('should render DLC welcome message', async () => {
    renderWithContext(<Rules />);
    const rulesButton = screen.getByRole('button', { name: /rules/i });
    const changeButton = screen.getByRole('button', { name: /add/i });
    userEvent.click(changeButton);
    userEvent.click(rulesButton);
    const dlcRules = await screen.findByText(rules);
    expect(dlcRules).toHaveTextContent(rules);
  });

  test('should render a change message with DLC', () => {
    renderWithContext(<Rules />);
    const changeButton = screen.getByRole('button', { name: /add/i });
    userEvent.click(changeButton);
    const dlcChangeMessage = screen.getByText(changeMessage);
    expect(dlcChangeMessage).toHaveTextContent(changeMessage);
  });

  test('should render switch off DLC button', () => {
    renderWithContext(<Rules />);
    const changeButton = screen.getByRole('button', { name: /add/i });
    userEvent.click(changeButton);
    const dlcChangeButton = screen.getByRole('button', {
      name: buttonText,
    });
    expect(dlcChangeButton).toHaveTextContent(buttonText);
  });

  test('should switch back to original, once clicked on back to original Button', () => {
    renderWithContext(<Rules />);
    const changeButton = screen.getByRole('button', { name: /add/i });
    userEvent.click(changeButton);
    const dlcChangeButton = screen.getByRole('button', {
      name: buttonText,
    });
    userEvent.click(dlcChangeButton);
    expect(changeButton).toHaveTextContent('Add Lizard/Spock');
  });
});
