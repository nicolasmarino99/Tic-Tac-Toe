import { boardGame } from './board.js';
 
const displayCtrl = (function() {
    let playerName0;
    let playerName1;
    let gridElement;
    let parentElement;
  
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

    const makeMove = () => {
      parentElement.addEventListener('click', () => {
        let position = parseInt(event.target.id.split('-')[1])
        let mark = boardGame.setMovement(position)

        if (mark != null) {
          event.target.textContent = mark
        }

        turnMarker0.classList.toggle('hidden')
        turnMarker1.classList.toggle('hidden')
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
      
      gameInit: () => {
        if (event.key === 'Enter') {
          displayCtrl.getNames()
          boardGame.newGame(playerName0,playerName1)
          let boardArray = boardGame.getBoard()
          displayBoard(boardArray)
          makeMove()

          console.log(boardArray)
        }
      }, 
      
      getPlayer: () => {
        player0
        player1
      }
      
    }
  })();
  
  
  /*   ACTIONS TO BUTTONS   */
  
  document.getElementById('multiplayer-btn').addEventListener('click',  () => {
    displayCtrl.toggleHidden(document.getElementById('form'))()
  });
  
  document.getElementById('form').addEventListener('keypress', displayCtrl.gameInit);
  

//export { displayCtrl }