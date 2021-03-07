import { capitalize } from '../utils/capitalize';

export interface OptionProps {
  option: Choice<ValidRules>;
  imageUrl: string;
  handleClick: (choice: Choice<ValidRules>) => void;
}

const Option: React.FC<OptionProps> = ({ option, imageUrl, handleClick }) => {
  return <button onClick={() => handleClick(option)}>{capitalize(option.choiceName)}</button>;
};

export default Option;
