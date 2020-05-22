import { gameModule } from '../gameModule';
import { playerFactory } from '../players';

jest.mock('../players.js');

const mockPlayer0 = { name: 'Bruna', mark: 'X', score: 0 };
const mockPlayer1 = { name: 'Nicolas', mark: 'O', score: 0 };

test('set current player names', ()=> {
  expect(gameModule.setNames(['John', 'Mary'])).toEqual(['John', 'Mary'])
})

gameModule.setNames(['John', 'Mary']);




beforeEach(() => {
  // Clears the database and adds some testing data.
  // Jest will wait for this promise to resolve before running tests.
  playerFactory.mockReturnValueOnce(mockPlayer0);
  playerFactory.mockReturnValueOnce(mockPlayer1);
});
describe('when new game starts', () => {
  test("status should be 'on'", () => {
   

    gameModule.newGame();

    expect(gameModule.getStatus()).toBe('on');
  });

  test('player 0 should be Bruna, with mark X', () => {
    expect(gameModule.getPlayer0()).toEqual(mockPlayer0);
  });

  test('player 0 should be Nicolas, with mark 0', () => {
    expect(gameModule.getPlayer1()).toEqual(mockPlayer1);
  });

  test('current player should be player 0', () => {
    expect(gameModule.getCurrentPlayer()).toEqual(mockPlayer0);
  });
});


test('cleanBoard return an array 9 empty strings', ()=> {
  expect(gameModule.cleanBoard()).toEqual(new Array(9).fill(' '))
})

//test('initialize game match', () => {
//  const event = {key: 'Enter'}
//  expect(gameModule.gameInit(event).toEqual({names: ['John', 'Mary'], boardArray: new Array(9).fill(' ')}))
//})

//(gameInit,).

