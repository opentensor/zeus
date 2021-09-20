import React from "react";
import io from 'socket.io-client';
import Tables from './Tables';
import Stakes from './Stakes';
import NetworkGraph from './NetworkGraph';

class SocketData extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        connected: "",
        stakeVal: [],
        rankVal: [],
        dataVal: [],
        uidVal: []
      }
    }
    componentDidMount() {
        var sensorEndpoint = "http://204.48.29.198:5000"
        this.socket = io.connect(sensorEndpoint, {
        reconnection: true
        });
        console.log("component mounted")
        this.socket.on("response", msg => {
            this.setState({'connected': msg.data})
            console.log("connection succeeded")
        })
        this.socket.emit("stake", msg => {
          console.log(msg)
        });

        
        let ranks = this.socket.on("rank", this.rank);
        if (ranks){
          console.log(ranks)
        }
        this.setState({'ranks' : ranks})

    }
    render() {
        return (
            <React.Fragment>
          <div>
            <Tables data={this.state.data}/>
            <br/>
          </div>
          <hr/>
          <div>
            <Stakes rank={this.state.rankVal} uid={this.state.uidVal} stake={this.state.stakeVal}/>
            <br/>
          </div>
          <hr/>
          <div>
            <NetworkGraph />
            <br/>
          </div>
            </React.Fragment>
        )
    }
}
export default SocketData;
