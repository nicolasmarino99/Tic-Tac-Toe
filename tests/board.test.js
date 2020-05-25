import boardGame from '../src/js/board';

const boardArray = new Array(9).fill(' ');

describe('When get board is called, it return board', () => {
  test('if game is not initialized yet, board is null', () => {
    expect(boardGame.getBoard()).toBeUndefined();
  });
});

describe('newBoard function', () => {
  test('if board is undefined, board should be a new empty array', () => {
    expect(boardGame.newBoard()).toEqual(boardArray);
  });

  test('if board array exists, it should return an empty array', () => {
    jest.spyOn(boardGame, 'getBoard').mockReturnValueOnce(['X', 'O', ' ', 'X', 'O', ' ', 'X', 'O', ' ']);
    const resultBoard = boardGame.newBoard();
    expect(resultBoard).toEqual(boardArray);
  });
});

test('When update board array with mark X on position 2 should return updated board', () => {
  boardGame.newBoard();
  boardGame.updateArray(2, 'X');
  expect(boardGame.getBoard()).toEqual([' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ']);
});