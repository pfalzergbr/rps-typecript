import { createContext, useState } from 'react';
import { originalRules } from '../gameRules/index';

export interface RulesProviderProps {
  children: React.ReactNode;
}

export const RulesContext = createContext(originalRules);
export const ActionContext = createContext({});

export const RulesProvider: React.FC<RulesProviderProps> = (props) => {
  const [gameRules, setGameRules] = useState(originalRules);

  return (
    <RulesContext.Provider value={gameRules}>
      <ActionContext.Provider value={setGameRules}>
        {props.children}
      </ActionContext.Provider>
    </RulesContext.Provider>
  );
};
