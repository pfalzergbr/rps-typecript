import { RulesetTitle } from '../gameRules'
import { originalRules } from '../gameRules'
// interface RulesetTitle {
//   name: string;
//   title: string;
// }

export interface HeaderProps {
  ruleset?: RulesetTitle
}

const Header: React.FC<HeaderProps> = ({ruleset = originalRules.rulesetTitle}) => {
  return <div>
    <h1>Rock, Paper, Scissors</h1>
    {ruleset.title && <h2>{ruleset.title}</h2>}
  </div>;
};

export default Header;
