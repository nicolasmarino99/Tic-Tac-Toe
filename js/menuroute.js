/* Buttons selectors */

const multiplayerButton = document.getElementById('multiplayer-btn')
//const aiButton = document.getElementById
//const rulesButton = document.getElementById

/* others selectors */

const namesForm = document.getElementById('form')


function toggleHidden(element) {
    element.classList.toggle('hidden')
}

/*   ACTIONS TO BUTTONS   */

multiplayerButton.addEventListener('click',toggleHidden(namesForm))