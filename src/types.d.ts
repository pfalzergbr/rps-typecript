interface IActionContext {
  changeRules: (rules: string) => void;
}

interface RulesProviderProps {
  children: React.ReactNode;
}

// interface RulesetTitle {
//   name: string;
//   title: string | null;
// }

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
  name: string;
  title: string | null;
  rulesDescription: RulesDescription;
}
