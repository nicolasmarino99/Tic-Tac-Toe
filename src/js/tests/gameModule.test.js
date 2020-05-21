jest.mock("../players.js")

import { gameModule } from "../gameModule";
import { playerFactory } from "../players.js";

const mockPlayer0 = {name: "Bruna", mark: "X", score: 0}
const mockPlayer1 = {name: "Nicolas", mark: "O", score: 0}
gameModule.setNames(["John", "Mary"])


describe("when new game starts", () => {
    test("status should be 'on'", () => {
        playerFactory.mockReturnValueOnce(mockPlayer0)
        playerFactory.mockReturnValueOnce(mockPlayer1)
    
        gameModule.newGame()
    
        expect(gameModule.getStatus()).toBe("on")
    })
    
    test("player 0 should be Bruna, with mark X", () => {
        expect(gameModule.getPlayer0()).toEqual(mockPlayer0)
    })
    
    test("player 0 should be Nicolas, with mark 0", () => {
        expect(gameModule.getPlayer1()).toEqual(mockPlayer1)
    })
    
    test("current player should be player 0", () => {
        expect(gameModule.getCurrentPlayer()).toEqual(mockPlayer0)
    })
})