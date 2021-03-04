import { computerChoice } from '../computerChoice';
import 'jest-extended';

describe('computerChoice', () => {
  const choices: ValidRules[] = ['rock', 'paper', 'scissors']
  test('should generate a random valid choice', () => {
    const choice = computerChoice(choices)
    expect(choice).toBeOneOf(['rock', 'paper', 'scissors'])
  })
})
