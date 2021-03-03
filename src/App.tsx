import { RulesProvider } from './contexts/rulesContext';
import Header from './components/Header';
import Rules from './components/Rules';

function App() {


  return (
    <RulesProvider>
      <div className='App'>
        <Header />
        <Rules />
      </div>
    </RulesProvider>
  );
}

export default App;
