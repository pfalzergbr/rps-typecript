export interface RulesetTitle {
  name: string;
  title: string | null;
}

export interface RulesDescription {
  rules: string;
  changeMessage: string;
  buttonText: string;
}

// export interface Choice {
//   choiceName: string,
//   beats: string[]
// }

// export interface Choices {

// }

export interface GameRuleset {
  rulesetTitle: RulesetTitle;
  rulesDescription: RulesDescription;
}




export const originalRules: GameRuleset = {
  rulesetTitle: {
    name: 'original',
    title: null,
  },
  rulesDescription: {
    rules:
      'Scissors cuts paper, paper covers rock, rock crushes scissors. A classic, time proven way to resolve your disputes.',
    changeMessage:
      'Anecdotal evidence suggests, that people familiar with each other, will tie 75 to 80% of the time, due to the limited number of outcomes. Want to try with more options?',
    buttonText: 'Add Lizard/Spock',
  },
};

export const lizardSpockRules: GameRuleset = {
  rulesetTitle: {
    name: 'lizardSpock',
    title: 'Lizard, Spock!',
  },
  rulesDescription: {
    rules:
      'Scissors cuts paper, paper covers rock, rock crushes scissors. A classic, time proven way to resolve your disputes.',
    changeMessage:
      'Anecdotal evidence suggests, that people familiar with each other, will tie 75 to 80% of the time, due to the limited number of outcomes. Want to try with more options?',
    buttonText: 'Add Lizard/Spock',
  },
};
