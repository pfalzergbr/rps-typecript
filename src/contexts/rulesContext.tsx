import { createContext, useState } from 'react';

export interface RulesProviderProps {
  children: React.ReactNode;
}

export const RulesContext = createContext({});



export const RulesProvider: React.FC<RulesProviderProps> = (props) => {
  // const [gameRules, setGameRules] = useState({
  //   rulesTitle: {
  //       name: '',
  //       title: '' 
    
  //   }
  // })

  return (
    <RulesContext.Provider value={{}}>{props.children}</RulesContext.Provider>
  );
};
