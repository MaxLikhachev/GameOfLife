import './App.css';
import {GameOfLife} from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conway's Game of Life</h1>
        <GameOfLife />
      </header>
    </div>
  );
}

export default App;
