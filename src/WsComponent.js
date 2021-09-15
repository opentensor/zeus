// Import
import React from 'react';
//import ReactDOM from 'react-dom';
import { ApiPromise, WsProvider } from '@polkadot/api';

class WsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hash: '', stake : ''};
  }
  async componentDidMount() {
    const wsProvider = new WsProvider('wss://204.48.29.198:5000');
    const api = await ApiPromise.create({ provider: wsProvider });
    const stake = await api.stake();
    this.setState({ hash: api.genesisHash.toHex(), stake: String(stake)});
  }
  render() {
    return <p><b>Genesis Hash:</b> {this.state.hash} <br/><br/><b>Stake:</b> {this.state.stake}<br/><br/></p>;
  }
}

export default WsComponent;
