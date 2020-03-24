import { playerFactory } from './players.js';

const boardGame = (function() {
  let player0
  let player1
  let board
  const newGame = (name0,name1) => { 
    player0 = playerFactory(name0);
    player1 = playerFactory(name1);
    board = new Array(9).fill(' ') 
    
  }

  const setMovement =  () => {
    
  }

  const getBoard = () => {
    return board
  }

  return { newGame, setMovement, getBoard }
})();

export { boardGame };