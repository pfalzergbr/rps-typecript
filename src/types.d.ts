
type OriginalChoices = 'rock'| 'paper' | 'scissors'
type LizardSpockChoices = 'rock'| 'paper' | 'scissors' | 'lizard' | 'spock'
 

interface IActionContext {
  changeRules: (rules: string) => void;
}

interface RulesProviderProps {
  children: React.ReactNode;
}

interface RulesDescription {
  rules: string;
  changeMessage: string;
  buttonText: string;
}

interface Choice <T>{
  choiceName: T,
  beats: Beat<T>[];
}

interface Beat<T> {
  choice: T;
  message: string;
}

interface GameRuleset<T> {
  name: string;
  title: string | null;
  rulesDescription: RulesDescription;
  choices: T[]
}
