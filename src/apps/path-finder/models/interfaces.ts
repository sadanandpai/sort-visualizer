export const enum CellType {
  clear,
  entry,
  exit,
  wall,
  fill,
  path,
}

export interface Cell {
  row: number;
  col: number;
}

export interface CellElement extends Cell {
  cellType: CellType;
}

export enum Status {
  Generating,
  Ready,
  Searching,
  Complete,
}

export interface AppState {
  rows: number;
  cols: number;
  grid: number[][];
  entry: Cell;
  exit: Cell;
  status: Status;
}

export interface AlgoProps {
  grid: number[][];
  entry: Cell;
  exit: Cell;
  setCell: (value: Cell, cellType: CellType) => void;
  setCells: (value: Cell[], cellType: CellType) => void;
  isRunning: () => boolean;
  delayDuration: number;
}

export interface MazeAlgoProps {
  rows: number;
  cols: number;
  entry: Cell;
  exit: Cell;
  setStateCells: (cells: Cell[], cellType: CellType) => void;
  setStateGrid: ({
    grid,
    clone,
  }: {
    grid: CellType[][];
    clone?: boolean;
  }) => void;
  isGenerating: () => boolean;
  delayDuration: number;
}
