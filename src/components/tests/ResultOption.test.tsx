import { render, screen } from '@testing-library/react';
import ResultOption from '../ResultOption';

describe('ResultOption', () => {

  test('should reder the correct option', async () => {
    render(<ResultOption player='you' option='paper' message='You chose Paper!'/>)
    const playerText = await screen.findAllByText(/you/i)
    const image = await screen.findByRole('img');
    const text = await screen.findByText(/you chose paper!/i)
    expect(image).toHaveStyle({backgroundImage: 'url(./images/paper.png)'})
    expect(playerText[0]).toHaveTextContent(/you/i)
    expect(text).toHaveTextContent(/you chose paper!/i)
  })
  
})

