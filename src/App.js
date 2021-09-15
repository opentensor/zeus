import logo from './bittensor-logo.png';
import './App.css';
import WsComponent from './WsComponent';
import Tables from './Tables';
import Stakes from './Stakes';
import NetworkGraph from './NetworkGraph';
import Ranking from './Ranking';

function App() {
  return (
    <div className="App">
      <div id="content"style={{marginTop: '80px'}}>
        <WsComponent />
        <div>
          <h1 style={{marginBottom: '50px', paddingBottom: '10px'}}>Zeus (Bittensor Network Explorer)</h1>
          <Tables />
          <br/>
        </div>
        <hr/>
        <div>
          <Stakes />
          <br/>
        </div>
        <hr/>
        <div>
          <NetworkGraph />
          <br/>
        </div>
        <hr/>
        <div>
          <Ranking />
          <br/>
        </div>
      </div><br/><br/>
    </div>
  );
}

export default App;
