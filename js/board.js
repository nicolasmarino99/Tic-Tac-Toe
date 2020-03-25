// eslint-disable-next-line import/extensions
import { playerFactory } from './players.js';

// eslint-disable-next-line func-names
const boardGame = (function () {
  let player0;
  let player1;
  let currentPlayer;
  let board;
  let gameStatus;

  const newGame = (name0, name1) => {
    gameStatus = 'on';
    if (player0 == null) {
      player0 = playerFactory(name0, 'X');
      player1 = playerFactory(name1, 'O');
    }
    board = board == null ? new Array(9).fill(' ') : board.fill(' ');
    currentPlayer = player0;
  };

  const draw = () => board.every(el => el !== ' ');

  // eslint-disable-next-line consistent-return
  const victory = () => {
    const winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < winCombinations.length; i += 1) {
      if (board[winCombinations[i][0]] === currentPlayer.mark
          && board[winCombinations[i][1]] === currentPlayer.mark
          && board[winCombinations[i][2]] === currentPlayer.mark) {
        return true;
      }
    }
  };

  const changePlayer = () => {
    if (gameStatus === 'on') {
      currentPlayer = currentPlayer === player0 ? player1 : player0;
    }
  };

  const setMovement = (position) => {
    if (board[position] === ' ' && gameStatus === 'on') {
      board[position] = currentPlayer.mark;

      if (victory()) {
        gameStatus = 'victory';
      } else if (draw()) {
        gameStatus = 'draw';
      }

      changePlayer();
      return board[position];
    }
  };

  const getBoard = () => board;

  const getStatus = () => gameStatus;

  const getCurrentPlayer = () => currentPlayer;

  return {
    newGame, setMovement, getBoard, getStatus, getCurrentPlayer,
  };
}());

export default boardGame;