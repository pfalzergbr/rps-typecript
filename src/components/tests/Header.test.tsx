import { render, screen } from '@testing-library/react';
import Header from '../Header';

const dlc = {
  name: 'lizardSpock',
  title: 'Lizard, Spock!'
}

describe('The Header', () => {
  test('should render the title correctly on startup with base ruleset', () => {
    render(<Header />)
    const mainHeader = screen.getByRole('heading', { level: 1 })
    expect(mainHeader).toHaveTextContent(/rock, paper, scissors/i)
  })
  
  test('should render DLC subtitle, if there is an active DLC.', () => {
    render(<Header ruleset={dlc} />)
    const mainHeader = screen.getByRole('heading', { level: 1 })
    const subHeader = screen.getByRole('heading', { level: 2 })
    expect(mainHeader).toHaveTextContent(/rock, paper, scissors/i)
    expect(subHeader).toHaveTextContent(/lizard, spock/i)
  })

  test('should not render DLC subtitle, if there is no active DLC.', () => {
    render(<Header/>)
    const mainHeader = screen.getByRole('heading', { level: 1 })
    const subHeader = screen.queryByRole('heading', { level: 2 })
    expect(mainHeader).toHaveTextContent(/rock, paper, scissors/i)
    expect(subHeader).not.toBeInTheDocument();
  })
  
})
