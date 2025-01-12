import React from "react";
import {Cell} from "./Cell";
import {getGridSize} from "../utils";

export const Grid = ({ cellOnClick, grid }) => {
  return (
    <div
      style={{
        display: 'grid',
        width: '100%',
        height: '80vh',
        justifyContent: 'center',
      }}>
      <svg {...getGridSize(grid)} xmlns="http://www.w3.org/2000/svg">
        {grid.map((rows, row) =>
          rows.map((value, col) => (
            <Cell key={`${row}-${col}`} row={row} col={col} value={value} onClick={() => cellOnClick(row, col)} />
          ))
        )}
        </svg>
    </div>
)
}
