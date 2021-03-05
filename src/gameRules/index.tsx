export const originalRules: GameRuleset<OriginalChoices> = {
  name: 'original',
  title: null,
  rulesDescription: {
    rules:
      'Scissors cuts paper, paper covers rock, rock crushes scissors. A classic, time proven way to resolve your disputes.',
    changeMessage:
      'Anecdotal evidence suggests, that people familiar with each other, will tie 75 to 80% of the time, due to the limited number of outcomes. Want to try with more options?',
    buttonText: 'Add Lizard/Spock',
  },
  choices: [
    {
      choiceName: 'rock',
      beats: [
        {
          choice: 'scissors',
          message: 'Rock smashes scissors.',
        },
      ],
    },
    {
      choiceName: 'paper',
      beats: [
        {
          choice: 'rock',
          message: 'Paper covers rock.',
        },
      ],
    },
    {
      choiceName: 'scissors',
      beats: [
        {
          choice: 'paper',
          message: 'Scissors cuts paper.',
        },
      ],
    },
  ],
};

export const lizardSpockRules: GameRuleset<LizardSpockChoices> = {
  name: 'lizardSpock',
  title: 'Lizard, Spock!',
  rulesDescription: {
    rules:
      'Scissors cuts paper, paper covers rock. Rock crushes lizard, lizard poisions Spock. Spock smashes scissors, scissors decapitates lizard. Lizard eats paper, paper disporves Spock. Spock vapourizes rock, and as it always has, rock crushes scissors.',
    changeMessage:
      'Sounds complicated? Ask Dr. Cooper to explain again, or Switch back to classic ruleset',
    buttonText: 'Classic Rules',
  },
  choices: [
    {
      choiceName: 'rock',
      beats: [
        {
          choice: 'scissors',
          message: 'Rock smashes scissors.',
        },
        {
          choice: 'lizard',
          message: 'Rock smashes lizard.',
        },
      ],
    },
    {
      choiceName: 'paper',
      beats: [
        {
          choice: 'rock',
          message: 'Paper covers rock.',
        },
        {
          choice: 'spock',
          message: 'Paper disproves Spock.',
        },
      ],
    },
    {
      choiceName: 'scissors',
      beats: [
        {
          choice: 'paper',
          message: 'Scissors cuts paper.',
        },
        {
          choice: 'lizard',
          message: 'Scissors decapitates lizard. (No animals were harmed making this game).',
        },
      ],
    },
    {
      choiceName: 'lizard',
      beats: [
        {
          choice: 'paper',
          message: 'Lizard eats paper',
        },
        {
          choice: 'spock',
          message: 'Lizard poisions Spock',
        },
      ],
    },
    {
      choiceName: 'spock',
      beats: [
        {
          choice: 'rock',
          message: 'Spock vapourizes rock.',
        },
        {
          choice: 'spock',
          message: 'Spock crushes scissors.',
        },
      ],
    },
  ],
};
