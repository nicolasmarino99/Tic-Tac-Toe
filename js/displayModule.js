import { boardGame } from './board.js';
import { playerFactory } from './players.js';

const displayCtrl = (function() {
    let playerName0;
    let playerName1;
  
    /* Buttons selectors */
    const multiplayerButton = document.getElementById('multiplayer-btn');
    // const aiButton = document.getElementById
    // const rulesButton = document.getElementById
  
    /* others selectors */
  
    const namesForm = document.getElementById('form');
    const menuContainer = document.getElementById('menu');
    const gameMultiplayer = document.getElementById('game-multiplayer');
  
    const setName = (name0, name1) => {
      const player0 = playerFactory(name0);
      const player1 = playerFactory(name1);
      document.getElementById('name-0').innerHTML = player0.name;
      document.getElementById('name-1').innerHTML = player1.name;
    }

    return {
      
      toggleHidden: () => {
        document.getElementById('form').classList.toggle('hidden');
      },
  
      getNames: () => {
        if (event.key === 'Enter') {
          playerName0 = document.querySelector('[name="name-0"]').value;
          playerName1 = document.querySelector('[name="name-1"]').value;
          toggleHidden(menuContainer);
          toggleHidden(gameMultiplayer);
          setName(playerName0, playerName1);
        }
      }  
    }
  
  })();
  
  
  /*   ACTIONS TO BUTTONS   */
  
  document.getElementById('multiplayer-btn').addEventListener('click', displayCtrl.toggleHidden);
  
  document.getElementById('form').addEventListener('keypress', displayCtrl.getNames);

  boardGame();

export { displayCtrl }