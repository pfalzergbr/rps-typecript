import { createContext, useState } from 'react';
import { originalRules, lizardSpockRules } from '../gameRules/index';

export const RulesContext = createContext({ gameRules: originalRules });
export const ActionContext: React.Context<IActionContext> = createContext(
  {} as IActionContext
);

export const RulesProvider: React.FC<RulesProviderProps> = (props) => {
  const [gameRules, setGameRules] = useState(originalRules);
  const [choice, setChoice] = useState<Choice<ValidRules> | null>(null);

  const changeRules = (rules: string = 'original') => {
    setChoice(null);
    rules === 'lizardSpock'
      ? setGameRules(lizardSpockRules)
      : setGameRules(originalRules);
  };

  return (
    <RulesContext.Provider value={{ gameRules }}>
      <ActionContext.Provider value={{ changeRules, choice, setChoice }}>
        {props.children}
      </ActionContext.Provider>
    </RulesContext.Provider>
  );
};