/**
 * @jest-environment jsdom
 */
import Leaderboard from './Leaderboard.js';

describe('Initial setup', () => {
  it('Happy Path', () => {
    expect(Leaderboard.test()).toBe('leaderboard OK');
  });
});
