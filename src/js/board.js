// eslint-disable-next-line func-names
const boardGame = (function () {
  let board;

  const newBoard = () => {
    board = board == null ? new Array(9).fill(' ') : board.fill(' ');
    return board;
  };

  const updateArray = (position, mark) => {
    board[position] = mark;
  };

  const getBoard = () => board;

  return {
    newBoard, getBoard, updateArray,
  };
}());

export {boardGame};