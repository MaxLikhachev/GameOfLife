export const getMutatedValue = ({row, col, grid}) => {
  const rowsRange = [0, grid?.length ?? 0];
  const colsRange = [0, grid[0]?.length ?? 0];

  const getNeighborsOperations = () => {

    const getNeighborsIndexesOnAxe = (axe, range = [0, 1], step = 1) => Array.from({length: step * 2 + 1}, (_, i) => i - step + axe).filter(j => j >= range[0] && j <= range[1]);

    const area = Array.from(getNeighborsIndexesOnAxe(row, rowsRange), (x) => Array.from(getNeighborsIndexesOnAxe(col, colsRange), (y) => [x, y]))

    return [].concat(...area).filter(([i, j]) => !(i === row && j === col));
  }
  const isInRange = (i = row, j = col) => (i >= rowsRange[0] && i < rowsRange[1] && j >= colsRange[0] && j < colsRange[1]);
  const getValue = (i = row, j = col) => isInRange(i, j) ? grid[i][j] : 0;

  const mutateValue = (value, neighbors) => {
    const count = neighbors.reduce((a, b) => a + b);
    return (count < 2 || count > 3) ? 0 : (value === 0 && count === 3) ? 1 : value;
  }
  const operations = getNeighborsOperations()
  const neighbors = operations.map(([x, y]) => getValue(x, y))

  return mutateValue(getValue(), neighbors)
}

export const getRandomValue = () => Math.random() > 0.7 ? 1 : 0

export const getInteractedValue = (value) => !value ? 1 : 0

export const getCoordinate = ({value, size, padding = 0}) => value * (size + padding * 2)