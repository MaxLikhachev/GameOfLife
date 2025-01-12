import React from "react";
import {Cell} from "./Cell";

export const Grid = ({ cellOnClick, grid }) => {
  return (
    <div
      style={{
        display: 'grid',
        width: '100%',
        height: '80vh',
        justifyContent: 'center',
      }}>
      <svg width={grid[0].length * 12 * 3} height={grid.length * 12 * 3} xmlns="http://www.w3.org/2000/svg">
        {grid.map((rows, row) =>
          rows.map((value, col) => (
            <Cell key={`${row}-${col}`} row={row} col={col} value={value} onClick={() => cellOnClick(row, col)} />
          ))
        )}
        </svg>
    </div>
)
}
