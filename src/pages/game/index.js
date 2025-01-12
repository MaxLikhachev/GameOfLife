import React, {useCallback, useEffect, useRef, useState} from 'react';
import {produce} from 'immer';
import {Grid} from "../../features";
import {fetchCreateEmptyGrid, fetchInteractGrid, fetchMutateGrid, fetchRandomizeGrid} from "../../services";
import {Menu} from "../../widgets";
import {NUM_COLS, NUM_ROWS} from "../../const";

export const GameOfLife = () => {
  const [grid, setGrid] = useState(null);

  const [running, setRunning] = useState(false);
  const [fetching, setFetching] = useState(true);
  const runningRef = useRef(running);
  runningRef.current = running;

  useEffect(() => {
    if (!grid) {
      fetchCreateEmptyGrid(NUM_ROWS, NUM_COLS).then(setGrid).finally(() => setFetching(false));
    }
  }, [grid])

  const runAnimationCallback = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        fetchMutateGrid(g, gridCopy).then(newGrid => {
          gridCopy = newGrid
        })
      });
    });

    setTimeout(runAnimationCallback, 100);
  }, []);

  const clearHandler = () => {
    setFetching(true);
    setGrid(null);
  }

  const randomHandler = () => {
    fetchRandomizeGrid(grid).then(randomGrid => setGrid(randomGrid));
  }

  const runHandler = () => {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runAnimationCallback();
    }
  }

  const interactHandler = (i, j) => {
    const newGrid = produce(grid, (gridCopy) => {
      fetchInteractGrid(grid, gridCopy, i, j).then(newGrid => {
        gridCopy = newGrid
      })
    });
    setGrid(newGrid);
  }

  return (<>
    <Menu runHandler={runHandler} interactHandler={interactHandler} clearHandler={clearHandler}
          randomHandler={randomHandler} running={running}/>
    {!fetching ? <Grid grid={grid} cellOnClick={interactHandler}/> : null}
  </>);
};
