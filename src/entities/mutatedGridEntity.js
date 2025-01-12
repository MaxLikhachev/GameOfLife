import {getMutatedValue} from "../utils";

export const MutatedGridEntity = (grid, gridCopy) => {
  grid.forEach((row, i) => {
    row.forEach((value, j) => {
      gridCopy[i][j] = getMutatedValue({row: i, col: j, grid})
    })
  })
  return gridCopy;
}