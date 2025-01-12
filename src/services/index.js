import {EmptyGridEntity, InteractedGridEntity, MutatedGridEntity, RandomGridEntity} from "../entities";

export function fetchCreateEmptyGrid(rows, cols) {
  return Promise.resolve(EmptyGridEntity({rows, cols}));
}

export function fetchRandomizeGrid(grid) {
  return Promise.resolve(RandomGridEntity({grid}));
}

export function fetchMutateGrid(grid, gridCopy) {
  return Promise.resolve(MutatedGridEntity(grid, gridCopy));
}

export function fetchInteractGrid(grid, gridCopy, i, j) {
  return Promise.resolve(InteractedGridEntity(grid, gridCopy, i, j));
}