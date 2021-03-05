import { computerChoice } from '../computerChoice';
import 'jest-extended';

describe('computerChoice', () => {
  const choices: Choice<ValidRules>[] = [
    {
      choiceName: 'rock',
      beats: [
        {
          choice: 'scissors',
          message: 'Rock smashes scissors',
        },
      ],
    },
    {
      choiceName: 'paper',
      beats: [
        {
          choice: 'rock',
          message: 'Paper covers rock',
        },
      ],
    },
    {
      choiceName: 'scissors',
      beats: [
        {
          choice: 'scissors',
          message: 'Scissors cuts paper.',
        },
      ],
    },
  ]

  test('should generate a random valid choice', () => {
    const choice = computerChoice(choices)
    expect(choice).toBeOneOf(choices)
  })
})
