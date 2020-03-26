// eslint-disable-next-line func-names
const displayCtrl = (function () {
  let playerName0;
  let playerName1;
  let gridElement;
  let parentElement;

  /* DOM selectors */

  const menuContainer = document.getElementById('menu');
  const gameMultiplayer = document.getElementById('game-multiplayer');

  const setName = (name0, name1) => {
    document.getElementById('name-0').innerHTML = name0;
    document.getElementById('name-1').innerHTML = name1;
  };

  const displayBoard = (arr) => {
    arr.forEach((cell, i) => {
      gridElement = document.createElement('div');
      parentElement = document.getElementById('grid');
      gridElement.innerHTML = cell;
      parentElement.appendChild(gridElement);
      gridElement.setAttribute('id', `grid-${i}`);
    });
  };

  const displayMessage = (type, winner) => {
    const messageBox = document.querySelector('#message-box');
    messageBox.classList.toggle('hidden');
    if (type === 'turn') {
      messageBox.textContent = 'turn.';
    } else if (type === 'victory') {
      messageBox.textContent = `${winner} is the winner!`;
    } else if (type === 'draw') {
      messageBox.textContent = 'It\'s a draw.';
    }
  };

  const scoreCounter = (winnerPlayer) => {
    const score0 = document.querySelector('#score-0');
    const score1 = document.querySelector('#score-1');
    winnerPlayer.score += 1;
    if (winnerPlayer.mark === 'X') {
      score0.textContent = `${winnerPlayer.score} won matches`;
    } else {
      score1.textContent = `${winnerPlayer.score} won matches`;
    }
  };

  const emptyCells = () => {
    const cellArray = [...parentElement.children];
    // eslint-disable-next-line no-return-assign
    cellArray.forEach(cell => cell.textContent = ' ');
  };

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
      return [playerName0, playerName1];
    },

    displayBoard,
    displayMessage,
    scoreCounter,
    emptyCells,
  };
}());


/*   ACTIONS TO BUTTONS   */

document.getElementById('multiplayer-btn').addEventListener('click', () => {
  displayCtrl.toggleHidden(document.getElementById('form'))();
});

export default displayCtrl;