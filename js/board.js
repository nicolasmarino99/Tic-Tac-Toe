const boardGame = (() => {
  const newGame = () => { 
    new Array(9).fill(' ') 
  }


  const setMovement =  (element) => {
    element.innerHTML = 'X'
     
  } 

  const displayBoard = (arr) => {
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



  return {newGame, displayBoard}
  

});

export { boardGame };