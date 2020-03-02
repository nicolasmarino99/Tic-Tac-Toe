/* Buttons selectors */

const multiplayerButton = document.getElementById('multiplayer-btn');
// const aiButton = document.getElementById
// const rulesButton = document.getElementById

/* others selectors */

const namesForm = document.getElementById('form');
const menuContainer = document.getElementById('menu');
const gameMultiplayer = document.getElementById('game-multiplayer');

function toggleHidden(element) {
  element.classList.toggle('hidden');
}

/*   ACTIONS TO BUTTONS   */

multiplayerButton.addEventListener('click', () => {
  toggleHidden(namesForm);
});

namesForm.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const player0 = document.querySelector('[name="name-0"]').value;
    const player1 = document.querySelector('[name="name-1"]').value;
    toggleHidden(menuContainer);
    toggleHidden(gameMultiplayer);
  }
});
