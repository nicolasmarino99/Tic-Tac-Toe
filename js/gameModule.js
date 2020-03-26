// eslint-disable-next-line import/extensions
import boardGame from './board.js';
import displayCtrl from './displayModule.js';
import { playerFactory } from './players.js';

const gameModule = (function () {
    let player0;
    let player1;
    let currentPlayer;
    let names;
    let boardArray;
    let gameStatus;
    let playerMark;

    const newGame = () => {
        gameStatus = 'on';
        if (player0 == null) {
            player0 = playerFactory(names[0], 'X');
            player1 = playerFactory(names[1], 'O');
            console.log(player0)
            console.log(player1)
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

    const setMovement = (position) => {
        console.log(`board = ${boardGame.getBoard()}`)
        if (boardGame.getBoard()[position] === ' ' && gameStatus === 'on') {
          playerMark = boardGame.updateArray(position)
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
            console.log(gameStatus)
            console.log(`board = ${boardGame.getBoard()}`)
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

            if (getStatus() === 'victory') {
            displayMessage('victory');
            scoreCounter();
            } else if (getStatus() === 'draw') {
            displayMessage('draw');
            }
        }
        });

    
  };

    const gameInit = () => {
        // eslint-disable-next-line no-restricted-globals
        if (event.key === 'Enter') {
        names = displayCtrl.getNames();
        console.log(names)
        newGame();
        boardArray = boardGame.newBoard();
        console.log(`board array: ${boardArray}`)
        displayCtrl.displayBoard(boardArray);
        makeMove();
        }
    }

    const getStatus = () => gameStatus;

    const getCurrentPlayer = () => currentPlayer;

    return { gameInit, newGame, getStatus, getCurrentPlayer }
})()

export default gameModule;