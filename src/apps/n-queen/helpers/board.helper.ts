import { ChessBoard } from '@nQueen/models/types';

export function initChessBoard(queens: number): ChessBoard {
  return Array.from({ length: queens }, () => Array(queens).fill(false));
}

export function hasOneQueenPerRow(board: ChessBoard) {
  return board.every((row) => row.filter((col) => col).length <= 1);
}

export function hasOneQueenPerColumn(board: ChessBoard) {
  const size = board.length;
  for (let col = 0; col < size; col++) {
    let count = 0;
    for (let row = 0; row < size; row++) {
      if (board[row][col]) {
        count++;
      }
    }

    if (count > 1) {
      return false;
    }
  }

  return true;
}

export function hasQueenInLeftDiagonal(
  board: ChessBoard,
  row: number,
  col: number
) {
  // left top
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) {
      return true;
    }
  }

  // left bottom
  for (let i = row + 1, j = col - 1; i < board.length && j >= 0; i++, j--) {
    if (board[i][j]) {
      return true;
    }
  }

  return false;
}

export function hasQueenInRightDiagonal(
  board: ChessBoard,
  row: number,
  col: number
) {
  const size = board.length;

  // right top
  for (let i = row - 1, j = col + 1; i >= 0 && j < size; i--, j++) {
    if (board[i][j]) {
      return true;
    }
  }

  // right bottom
  for (let i = row + 1, j = col + 1; i < size && j < size; i++, j++) {
    if (board[i][j]) {
      return true;
    }
  }

  return false;
}

export function hasQueenInDiagonals(
  board: ChessBoard,
  row: number,
  col: number
) {
  return (
    hasQueenInLeftDiagonal(board, row, col) ||
    hasQueenInRightDiagonal(board, row, col)
  );
}

export function getEligibleRows(board: ChessBoard) {
  return board.map((row) => !row.every((cell) => !cell));
}

export function getEligibleColumns(board: ChessBoard) {
  const columns: boolean[] = [];
  const size = board.length;
  for (let col = 0; col < size; col++) {
    let count = 0;
    for (let row = 0; row < size; row++) {
      if (!board[row][col]) {
        count++;
      }
    }

    columns.push(count !== size);
  }

  return columns;
}

export function getBoardValidity(board: ChessBoard) {
  if (!hasOneQueenPerRow(board) || !hasOneQueenPerColumn(board)) {
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] && hasQueenInDiagonals(board, i, j)) {
        return false;
      }
    }
  }

  return true;
}
