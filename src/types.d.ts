interface IActionContext {
  changeRules: (rules: GameRuleset) => void;
}

interface RulesProviderProps {
  children: React.ReactNode;
}

interface RulesetTitle {
  name: string;
  title: string | null;
}

interface RulesDescription {
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

interface GameRuleset {
  rulesetTitle: RulesetTitle;
  rulesDescription: RulesDescription;
}
