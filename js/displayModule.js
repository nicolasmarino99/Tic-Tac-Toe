import { boardGame } from './board.js';
 
const displayCtrl = (function() {
    let playerName0;
    let playerName1;
    let gridElement;
    let parentElement;
    let boardArray
  
    /* Buttons selectors */
    const multiplayerButton = document.getElementById('multiplayer-btn');
    // const aiButton = document.getElementById
    // const rulesButton = document.getElementById
  
    /* others selectors */
  
    const namesForm = document.getElementById('form');
    const menuContainer = document.getElementById('menu');
    const gameMultiplayer = document.getElementById('game-multiplayer');
    const turnMarker0 = document.querySelector('.turn-0')
    const turnMarker1 = document.querySelector('.turn-1')
    
  
    const setName = (name0, name1) => {
      document.getElementById('name-0').innerHTML = name0;
      document.getElementById('name-1').innerHTML = name1;
    }

    const displayBoard = (arr) => {
      arr.forEach((cell, i) => {
        gridElement = document.createElement('div');
        parentElement = document.getElementById('grid');
        gridElement.innerHTML = cell;
        parentElement.appendChild(gridElement);
        gridElement.setAttribute('id',`grid-${i}`)
      });
    }

    const displayMessage = (type) => {
      let messageBox = document.querySelector('#message-box')
      messageBox.classList.toggle('hidden')
      if(type === 'turn') {
         messageBox.textContent = `turn.` 
      } else if(type === 'victory') {
          messageBox.textContent = `${boardGame.getCurrentPlayer().name} is the winner!`
      } else if(type === 'draw') {
          messageBox.textContent = `It's a draw.`
      }  
    }

    const scoreCounter = () => {
      const score0 = document.querySelector('#score-0')
      const score1 = document.querySelector('#score-1')
      boardGame.getCurrentPlayer().score += 1
      if (boardGame.getCurrentPlayer().mark == 'X') {
        score0.textContent = `${boardGame.getCurrentPlayer().score} won matches`
      } else {
        score1.textContent = `${boardGame.getCurrentPlayer().score} won matches`
      }

    }

    const makeMove = () => {
      parentElement.addEventListener('click', () => {
        if (boardGame.getStatus() == 'on') {
          let position = parseInt(event.target.id.split('-')[1])
          let mark = boardGame.setMovement(position)

          if (mark != null) {
            event.target.textContent = mark
          }

          console.log(boardGame.getStatus())

          if (boardGame.getStatus() == 'victory') {
            displayMessage("victory")
            scoreCounter()

          } else if (boardGame.getStatus() == 'draw') {
            displayMessage("draw")
          }

          turnMarker0.classList.toggle('hidden')
          turnMarker1.classList.toggle('hidden')

          console.log(boardGame.getBoard())
        }
      })
    }
    
    return {
      
      toggleHidden: (element) => {
        element.classList.toggle('hidden');
      },
  
      getNames: () => {
        playerName0 = document.querySelector('[name="name-0"]').value;
        playerName1 = document.querySelector('[name="name-1"]').value;
        displayCtrl.toggleHidden(menuContainer);
        displayCtrl.toggleHidden(gameMultiplayer);
        setName(playerName0, playerName1);
      },
      
      cleanBoard: () => {
        boardGame.newGame(playerName0,playerName1)
        boardArray = boardGame.getBoard()
        displayBoard(boardArray)
        makeMove()
        
      },

      gameInit: () => {
        if (event.key === 'Enter') {
          displayCtrl.getNames()
          displayCtrl.cleanBoard()
        }
      }
      
      
      
    
      


    }
  })();
  
  
  /*   ACTIONS TO BUTTONS   */
  
  document.getElementById('multiplayer-btn').addEventListener('click',  () => {
    displayCtrl.toggleHidden(document.getElementById('form'))()
  });
  
  document.getElementById('form').addEventListener('keypress', displayCtrl.gameInit);
  
  document.querySelector('#replay').addEventListener('click', displayCtrl.cleanBoard)

//export { displayCtrl }