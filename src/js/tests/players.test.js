import { playerFactory } from '../players.js';

describe('Player factory create player object with name, mark and score', () => {
  test("Name: 'Bruna', mark: 'X', score: 0", () => {
    expect(playerFactory('Bruna', 'X')).toEqual({ name: 'Bruna', mark: 'X', score: 0 });
  });
});