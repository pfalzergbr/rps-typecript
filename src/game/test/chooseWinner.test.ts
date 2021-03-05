import { chooseWinner } from '../chooseWinner';

describe('chooseWinner', () => {
  const rock: Choice<ValidRules> = {
    choiceName: 'rock',
    beats: [
      {
        choice: 'scissors',
        message: 'Rock smashes scissors.',
      },
      {
        choice: 'lizard',
        message: 'Rock smashes lizard.',
      },
    ],
  };

  const paper: Choice<ValidRules> = {
    choiceName: 'paper',
    beats: [
      {
        choice: 'rock',
        message: 'Paper covers rock.',
      },
      {
        choice: 'spock',
        message: 'Paper disproves Spock.',
      },
    ],
  };

  const spock: Choice<ValidRules> = {
    choiceName: 'spock',
    beats: [
      {
        choice: 'rock',
        message: 'Spock vapourizes rock.',
      },
      {
        choice: 'spock',
        message: 'Spock crushes scissors.',
      },
    ],
  };

  test('should return the correct winner object if player chooses rock, computer chooses paper', () => {
    const winnerObject = chooseWinner(rock, paper);
    expect(winnerObject).toEqual({
      playerChoice: 'rock',
      computerChoice: 'paper',
      winner: 'computer',
      message: 'Paper covers rock.',
    });
  });

  test('should return the correct winner object if player chooses paper, computer chooses Spock', () => {
    const winnerObject = chooseWinner(paper, spock);
    expect(winnerObject).toEqual({
      playerChoice: 'paper',
      computerChoice: 'spock',
      winner: 'player',
      message: 'Paper disproves Spock.',
    });
  });

  test('should return the correct winner object, if the players draw', () => {
    const winnerObject = chooseWinner(rock, rock);
    expect(winnerObject).toEqual({
      playerChoice: 'rock',
      computerChoice: 'rock',
      winner: 'draw',
      message: 'Draw!',
    });
  })
  
});
