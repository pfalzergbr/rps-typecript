export const originalRules: GameRuleset = {
  name: 'original',
  title: null,
  rulesDescription: {
    rules:
      'Scissors cuts paper, paper covers rock, rock crushes scissors. A classic, time proven way to resolve your disputes.',
    changeMessage:
      'Anecdotal evidence suggests, that people familiar with each other, will tie 75 to 80% of the time, due to the limited number of outcomes. Want to try with more options?',
    buttonText: 'Add Lizard/Spock',
  },
};

export const lizardSpockRules: GameRuleset = {
  name: 'lizardSpock',
  title: 'Lizard, Spock!',
  rulesDescription: {
    rules:
      'Scissors cuts paper, paper covers rock. Rock crushes lizard, lizard poisions Spock. Spock smashes scissors, scissors decapitates lizard. Lizard eats paper, paper disporves Spock. Spock vapourizes rock, and as it always has, rock crushes scissors.',
    changeMessage:
      'Sounds complicated? Ask Dr. Cooper to explain again, or Switch back to classic ruleset',
    buttonText: 'Classic Rules',
  },
};
