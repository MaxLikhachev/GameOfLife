import {NUM_COLS, NUM_ROWS} from "../const";

export const EmptyGridEntity = ({rows = NUM_ROWS, cols = NUM_COLS}) => {
  return Array.from({length: rows}, () => Array.from({length: cols}, () => 0));
}