import './App.css';
import SocketData from './SocketData';

function App() {
  return (
    <div className="App">
      <div id="content"style={{marginTop: '80px'}}>
        <div>
          <h1 style={{marginBottom: '50px', paddingBottom: '10px'}}>Zeus (Bittensor Network Explorer)</h1>
          <SocketData />
        </div>
      </div><br/><br/>
    </div>
  );
}

export default App;
