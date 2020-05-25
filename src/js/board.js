// eslint-disable-next-line func-names
const boardGame = (function () {
  let board;

  const getBoard = () => board;

  const newBoard = () => {
    // eslint-disable-next-line no-use-before-define
    const currentBoard = lib.getBoard();
    board = currentBoard == null ? new Array(9).fill(' ') : currentBoard.fill(' ');
    return board;
  };

  const updateArray = (position, mark) => {
    board[position] = mark;
  };

  const lib = {
    newBoard, getBoard, updateArray,
  };

  return lib;
}());

export default boardGame;