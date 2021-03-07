import { RulesProvider } from './contexts/rulesContext';
import Header from './components/Header';
import Rules from './components/Rules';
import PlayArea from './components/PlayArea';
import styles from './App.module.scss';

function App() {


  return (
    <RulesProvider>
      <div className={styles.App}>
        <Header />
        <Rules />
        <PlayArea />
      </div>
    </RulesProvider>
  );
}

export default App;
