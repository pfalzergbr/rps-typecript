import { useContext } from 'react';
import { RulesContext } from './contexts/rulesContext';

import { RulesProvider } from './contexts/rulesContext';
import Header from './components/Header';
import Rules from './components/Rules';

function App() {
  const { rulesDescription, rulesetTitle} = useContext(RulesContext)

  return (
    <RulesProvider>
      <div className='App'>
        <Header />
        <Rules rulesDescription={rulesDescription}/>
      </div>
    </RulesProvider>
  );
}

export default App;
