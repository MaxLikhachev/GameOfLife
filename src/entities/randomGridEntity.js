import {NUM_COLS, NUM_ROWS} from "../const";
import {getRandomValue} from "../utils";

export const RandomGridEntity = ({rows = NUM_ROWS, cols = NUM_COLS, grid = null}) => {
  return grid ? grid.map(rows => rows.map(getRandomValue)) : Array.from({length: rows}, () => Array.from({length: cols}, getRandomValue));
}