import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Calculator';

function App() {
  return (
    <div className="App">
      <CalculateScore Name={"Steve"} School={"Delhi Public School"} total={284} goal={3} />
    </div>
  );
}

export default App;
