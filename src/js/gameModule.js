// eslint-disable-next-line import/extensions
import boardGame from './board.js';
// eslint-disable-next-line import/extensions
import { displayCtrl } from './displayModule.js';
// eslint-disable-next-line import/extensions
import { playerFactory } from './players.js';

// eslint-disable-next-line func-names
const gameModule = (function () {
  let player0;
  let player1;
  let currentPlayer;
  let names;
  let boardArray;
  let gameStatus;
  let playerMark;

  const turnMarker0 = document.querySelector('.turn-0');
  const turnMarker1 = document.querySelector('.turn-1');

  const newGame = () => {
    gameStatus = 'on';
    if (player0 == null) {
      player0 = playerFactory(names[0], 'X');
      player1 = playerFactory(names[1], 'O');
    }
    currentPlayer = player0;
  };

  const draw = () => boardGame.getBoard().every(el => el !== ' ');

  // eslint-disable-next-line consistent-return
  const victory = () => {
    const winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < winCombinations.length; i += 1) {
      if (boardGame.getBoard()[winCombinations[i][0]] === currentPlayer.mark
            && boardGame.getBoard()[winCombinations[i][1]] === currentPlayer.mark
            && boardGame.getBoard()[winCombinations[i][2]] === currentPlayer.mark) {
        return true;
      }
    }
  };

  const changePlayer = () => {
    if (gameStatus === 'on') {
      currentPlayer = currentPlayer === player0 ? player1 : player0;
    }
  };

  // eslint-disable-next-line consistent-return
  const setMovement = (position) => {
    if (boardGame.getBoard()[position] === ' ' && gameStatus === 'on') {
      playerMark = currentPlayer.mark;
      boardGame.updateArray(position, playerMark);

      if (victory()) {
        gameStatus = 'victory';
      } else if (draw()) {
        gameStatus = 'draw';
      }

      changePlayer();
      return playerMark;
    }
  };

  const makeMove = () => {
    document.getElementById('grid').addEventListener('click', () => {
      if (gameStatus === 'on') {
        // eslint-disable-next-line no-restricted-globals
        const position = parseInt(event.target.id.split('-')[1], 10);
        const mark = setMovement(position);

        if (mark != null) {
          // eslint-disable-next-line no-restricted-globals
          event.target.textContent = mark;
          turnMarker0.classList.toggle('hidden');
          turnMarker1.classList.toggle('hidden');
        }

        if (gameStatus === 'victory') {
          displayCtrl.displayMessage('victory', currentPlayer.name);
          displayCtrl.scoreCounter(currentPlayer);
        } else if (gameStatus === 'draw') {
          displayCtrl.displayMessage('draw', currentPlayer.name);
        }
      }
    });
  };

  const gameInit = (event) => {
    // eslint-disable-next-line no-restricted-globals
    if (event.key === 'Enter') {
      names = displayCtrl.getNames();
      newGame();
      boardArray = boardGame.newBoard();
      displayCtrl.displayBoard(boardArray);
      lib.makeMove();

      return { names, boardArray };
    }
  };

  const cleanBoard = () => {
    newGame(player0.name, player1.name);
    boardArray = boardGame.newBoard();
    displayCtrl.emptyCells();
    displayCtrl.toggleHidden(document.querySelector('#message-box'));
    return boardArray;
  };

  const getStatus = () => gameStatus;

  const getCurrentPlayer = () => currentPlayer;

  const setNames = (value) => names = value;

  const getPlayer0 = () => player0;

  const getPlayer1 = () => player1;

  const lib = {
    gameInit,
    newGame,
    getStatus,
    getCurrentPlayer,
    cleanBoard,
    setNames,
    getPlayer0,
    getPlayer1,
    makeMove,
  };

  return lib;
}());

export default gameModule;