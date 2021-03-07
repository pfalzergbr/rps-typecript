import { render, screen, renderWithContext } from '../../test-utils/test-utils';
import Header from '../Header';
import { lizardSpockRules, originalRules } from '../../gameRules';
import { RulesContext } from '../../contexts/rulesContext';


describe('The Header', () => {
  test('should render the title correctly on startup with base ruleset', () => {
    renderWithContext(<Header /> );
    const mainHeader = screen.getByRole('heading', { level: 1 })
    expect(mainHeader).toHaveTextContent(/rock, paper, scissors/i)
  })
  
  test('should render Classic subtitle if there is no active DLC', () => {
    render(
      <RulesContext.Provider value={{gameRules: originalRules}}>
        <Header/> 
      </RulesContext.Provider>

    );
    const mainHeader = screen.getByRole('heading', { level: 1 })
    const subHeader = screen.getByRole('heading', { level: 2 })
    expect(mainHeader).toHaveTextContent(/rock, paper, scissors/i)
    expect(subHeader).toHaveTextContent(/classic/i)
  })
  

  test('should render DLC subtitle, if there is an active DLC.', () => {
    render(
      <RulesContext.Provider value={{gameRules: lizardSpockRules}}>
        <Header/> 
      </RulesContext.Provider>

    );
    const mainHeader = screen.getByRole('heading', { level: 1 })
    const subHeader = screen.getByRole('heading', { level: 2 })
    expect(mainHeader).toHaveTextContent(/rock, paper, scissors/i)
    expect(subHeader).toHaveTextContent(/lizard, spock/i)
  })
  
})
