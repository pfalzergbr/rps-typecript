import { RulesProvider } from './contexts/rulesContext';
import Header from './components/Header';
import Rules from './components/Rules';
import PlayArea from './components/PlayArea';

function App() {


  return (
    <RulesProvider>
      <div className='App'>
        <Header />
        <Rules />
        <PlayArea />
      </div>
    </RulesProvider>
  );
}

export default App;
