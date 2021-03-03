import { render, screen } from '@testing-library/react';
import Rules from '../Rules';

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
  const extendedRuleset = {
    rules:
      'Scissors cuts paper, paper covers rock. Rock crushes lizard, lizard poisions Spock. Spock smashes scissors, scissors decapitate lizard. Lizard eats paper, paper disproves Spock. Spock vapourizes rock, and rock crushes scissors.',
    changeMessage:
      'Sounds complicated? Ask Dr. Cooper to explain again, or switch back to our timeless classic base rules',
    buttonText: 'Back to Classic',
  };

  test('should render DLC welcome message', () => {
    render(<Rules rulesDescription={extendedRuleset} />);
    const rules = screen.getByText(extendedRuleset.rules);
    expect(rules).toBeInTheDocument();
  });

  test('should render a change message with DLC', () => {
    render(<Rules rulesDescription={extendedRuleset} />);
    const changeMessage = screen.getByText(extendedRuleset.changeMessage);
    expect(changeMessage).toBeInTheDocument();
  });

  test('should render switch off DLC button', () => {
    render(<Rules rulesDescription={extendedRuleset} />);
    const changeButton = screen.getByRole('button', {
      name: extendedRuleset.buttonText,
    });
    expect(changeButton).toBeInTheDocument();
  });
});
