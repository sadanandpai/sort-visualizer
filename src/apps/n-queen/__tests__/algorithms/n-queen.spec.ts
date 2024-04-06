import { getCandidates, nQueen } from '@nQueen/algorithms/n-queen';

describe('N-Queen', () => {
  it('should return a valid solution for 4x4 board', () => {
    const n = 4;
    const board = Array.from(Array(n)).map(() => Array(n).fill(false));
    const result = nQueen(
      board,
      new Array(n).fill(false),
      new Array(n).fill(false)
    );
    expect(result).toBe(true);
    expect(board).toMatchInlineSnapshot(`
      [
        [
          false,
          true,
          false,
          false,
        ],
        [
          false,
          false,
          false,
          true,
        ],
        [
          true,
          false,
          false,
          false,
        ],
        [
          false,
          false,
          true,
          false,
        ],
      ]
    `);
  });

  it('should return a valid solution for 8x8 board', () => {
    const n = 8;
    const board = Array.from(Array(n)).map(() => Array(n).fill(false));
    const result = nQueen(
      board,
      new Array(n).fill(false),
      new Array(n).fill(false)
    );
    expect(result).toBe(true);
    expect(board).toMatchInlineSnapshot(`
      [
        [
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ],
        [
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
        ],
        [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
        ],
        [
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
        ],
        [
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
        ],
        [
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
        ],
        [
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
        ],
        [
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
        ],
      ]
    `);
  });
});

describe('N-Queen getCandidates', () => {
  it('should return an array of candidates', () => {
    const result = getCandidates([true, false, true, false]);
    expect(result).toEqual([1, 3]);
  });

  it('should return an empty array if there is no candidate', () => {
    const result = getCandidates([true, true, true, true]);
    expect(result).toEqual([]);
  });

  it('should return complete array if there are full candidates', () => {
    const result = getCandidates([false, false, false, false]);
    expect(result).toEqual([0, 1, 2, 3]);
  });
});