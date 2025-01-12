import {CELL_PARAMS} from "../const";
import {getCoordinate, getRandomValue} from "../utils";

export const CellEntity = ({
                             row,
                             col,
                             length = CELL_PARAMS.length,
                             width = CELL_PARAMS.width,
                             height = CELL_PARAMS.height,
                             padding = CELL_PARAMS.padding,
                             rx = CELL_PARAMS.rx,
                             value = getRandomValue(), ...options
                           }) => ({
    x: getCoordinate({value: col, size: height, padding}),
    y: getCoordinate({value: row, size: width, padding}),
    rx, row, col, length, width, height, padding, value, ...options
  }
)