import {boardGame} from '../board'

let boardArray = new Array(9).fill(' ')

test("newboard function should return a board an empty array", () => {
    expect(boardGame.newBoard()).toEqual(boardArray)
})

test("update mark X on index 2 array's game", () => {
    boardGame.newBoard()
    boardGame.updateArray(2,'X')
    expect(boardGame.getBoard()).toEqual([' ',' ','X',' ',' ',' ',' ',' ',' '])
})