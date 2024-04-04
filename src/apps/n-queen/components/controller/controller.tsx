import { nQueen } from '@nQueen/algorithms/n-queen';
import { defaultSpeeds, speeds } from '@nQueen/config';
import { Play, RefreshCcw } from 'lucide-react';
import { useState } from 'react';
import styles from './controller.module.scss';
import { useAppDispatch, useAppSelector } from '@/host/store/hooks';
import { setBoard, setSize } from '@nQueen/store/n-queen.slice';

const defaultSpeed = defaultSpeeds.desktop;

function Controller() {
  const dispatch = useAppDispatch();
  const size = useAppSelector((state) => state.nQueen.size);
  const board = useAppSelector((state) => state.nQueen.board);
  const [speed, setSpeed] = useState<string | number>(
    speeds.get(defaultSpeed) as number
  );

  function handleSpeed(e: React.ChangeEvent<HTMLSelectElement>) {
    setSpeed(e.target.value);
  }

  function handleSetQueen(e: React.ChangeEvent<HTMLInputElement>) {
    const totalQueens = e.target.value;
    dispatch(setSize(parseInt(totalQueens)));
  }

  function handlePlay() {
    const newBoard = board.map((row) => row.slice());
    nQueen(newBoard, 0);
    dispatch(setBoard(newBoard));
  }

  return (
    <section className={styles.controller}>
      <input
        className={styles.queenRange}
        type="range"
        min="4"
        max="8"
        value={size}
        onChange={handleSetQueen}
      />
      <select
        className={styles.speed}
        data-tooltip="Animation speed"
        value={speed}
        id="speed"
        onChange={handleSpeed}
      >
        {[...speeds.entries()].map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>

      <button
        data-testid="player"
        data-tooltip="Play"
        onClick={() => handlePlay()}
      >
        <Play size={20} />
      </button>
      <button
        data-testid="clear"
        // onClick={handleClear}
        data-tooltip="clear"
      >
        <RefreshCcw size={20} />
      </button>
    </section>
  );
}

export default Controller;