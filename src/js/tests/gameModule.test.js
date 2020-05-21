import { gameModule } from "../gameModule";
import { playerFactory } from "../players.js";

jest.mock("../players.js")
const mockPlayer0 = {name: "Bruna", mark: "X", score: 0}
const mockPlayer1 = {name: "Nicolas", mark: "O", score: 0}

//gameModule.gameInit("Enter")

test("when new game, status should be 'on'", () => {
    gameModule.setNames(["John", "Mary"])
    playerFactory.mockReturnValueOnce(mockPlayer0)

    gameModule.newGame()

    expect(gameModule.getStatus()).toBe("on")
})

test("when game starts, current player should be player 0", () => {
    gameModule.setNames(["John", "Mary"])
    expect(gameModule.getCurrentPlayer()).toEqual(mockPlayer0)
})