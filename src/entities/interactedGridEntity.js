import {getInteractedValue} from "../utils";

export const InteractedGridEntity = (grid, gridCopy, i, j) => {
  gridCopy[i][j] = getInteractedValue(grid[i][j]);
  return gridCopy
}