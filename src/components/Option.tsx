export interface OptionProps {
  option: string;
  imageUrl: string;
  onClick: (choice: Choice<ValidRules>) => void;
}
 
const Option: React.FC<OptionProps> = () => {
  return ( <div></div> );
}
 
export default Option;