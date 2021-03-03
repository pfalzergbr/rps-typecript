
interface RulesetTitle {
  name: string;
  title: string;
}

export interface HeaderProps {
  ruleset?: RulesetTitle
}

const Header: React.FC<HeaderProps> = ({ruleset = {name: 'base', title: null}}) => {
  return <div>
    <h1>Rock, Paper, Scissors</h1>
    {ruleset.title && <h2>{ruleset.title}</h2>}
  </div>;
};

export default Header;
