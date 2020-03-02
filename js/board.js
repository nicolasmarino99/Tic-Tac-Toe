const boardGame = (() => {
  const board = new Array(9).fill(' ');

  function displayBoard(arr) {
    arr.forEach((cell, i) => {
      const gridElement = document.createElement('div');
      const parentElement = document.getElementById('grid');
      gridElement.innerHTML = cell;
      parentElement.appendChild(gridElement);

      if (i % 2 === 0) {
        gridElement.style.color = '#848AC4';
      } else {
        gridElement.style.color = '#ffffff';
      }
    });
  }

  displayBoard(board);
});

export { boardGame };