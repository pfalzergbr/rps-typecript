type OriginalChoices = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';
type LizardSpockChoices = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';

type ValidRules = OriginalChoices | LizardSpockChoices;

type PlayerName = string

interface IActionContext {
  changeRules: (rules: string) => void;
  setChoice: React.Dispatch<React.SetStateAction<Choice<ValidRules> | null>> 
  choice: Choice<ValidRules> | null
}

interface RulesProviderProps {
  children: React.ReactNode;
}

interface RulesDescription {
  ruleBullets: string[]
  rules: string;
  changeMessage: string;
  buttonText: string;
}

interface Choice<T> {
  choiceName: T;
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
  choices: Choice<T>[];
}

interface WinnerObject {
  playerChoice: ValidRules;
  computerChoice: ValidRules;
  winner: 'player' | 'computer' | 'draw';
  message: string;
}
