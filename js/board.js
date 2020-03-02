const boardGame = (() => {
  const board = new Array(9).fill(' ');


  function setMovement(element) {
    element.innerHTML = 'X'
     
  } 

  function displayBoard(arr) {
    arr.forEach((cell, i) => {
      const gridElement = document.createElement('div');
      const parentElement = document.getElementById('grid');
      gridElement.innerHTML = cell;
      parentElement.appendChild(gridElement);
      gridElement.setAttribute('id',`grid-${i+1}`)
      gridElement.addEventListener('click', ()=> {
        setMovement(gridElement)
      })

    });
  }


  displayBoard(board);

  

});

export { boardGame };