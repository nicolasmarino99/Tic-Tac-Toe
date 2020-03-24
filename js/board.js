import { playerFactory } from './players.js';

const boardGame = (function() {
  let player0
  let player1
  let current_player
  let board

  const newGame = (name0,name1) => { 
    player0 = playerFactory(name0, 'X');
    player1 = playerFactory(name1, 'O');
    board = new Array(9).fill(' ') 
    current_player = player0
  }

  const changePlayer = () => {
    current_player = current_player == player0 ? player1 : player0
  }

  const setMovement = (position) => {
    if(board[position] == ' ') {
      board[position] = current_player.mark
      changePlayer()
      console.log(board)
      return board[position]
    } else {
      alert('Choose an empty position')
    }
  }

  const getBoard = () => {
    return board
  }

  return { newGame, setMovement, getBoard }
})();

export { boardGame };