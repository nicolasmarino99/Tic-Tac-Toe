// eslint-disable-next-line import/extensions
import displayCtrl from './displayModule.js';
import gameModule from './gameModule.js';

// eslint-disable-next-line func-names
const boardGame = (function () {
  let board;

  const newBoard = () => {
    board = board == null ? new Array(9).fill(' ') : board.fill(' ');
    console.log(`board from boardModule: ${board}`)
    return board
  }

  const updateArray = (position) => {
    board[position] = gameModule.getCurrentPlayer.mark;
  }

  const getBoard = () => board;

  return {
    newBoard, getBoard, updateArray 
  };
}());

export default boardGame;