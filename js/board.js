import { playerFactory } from './players.js';

const boardGame = (function() {
  let player0
  let player1
  let currentPlayer
  let board
  let gameStatus

  const newGame = (name0,name1) => { 
    gameStatus = "on"
    player0 = playerFactory(name0, 'X');
    player1 = playerFactory(name1, 'O');
    board = new Array(9).fill(' ') 
    currentPlayer = player0
  
  }

  const draw = () => {
    
  }
  const victory = () => {
    let winCombinations = [[0, 1, 2],[3, 4, 5],[6, 7, 8],
                           [0, 3, 7],[1, 4, 7],[2, 5, 8],
                           [0, 4, 8],[2, 4, 6]] 
    for (let i = 0; i < winCombinations.length; i += 1) {
        if (board[winCombinations[i][0]] === currentPlayer.mark
            && board[winCombinations[i][1]] === currentPlayer.mark
            && board[winCombinations[i][2]] === currentPlayer.mark) {
            return true;
        }
    }
}


  const changePlayer = () => {
    currentPlayer = currentPlayer == player0 ? player1 : player0
  }

  

  const setMovement = (position) => {
    if(board[position] == ' ') {
      board[position] = currentPlayer.mark
      if ( victory() ) {
        
        gameStatus = "victory"
        
      } else if (  )
      changePlayer()
      

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