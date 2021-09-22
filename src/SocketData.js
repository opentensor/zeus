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
        uidVal: [],
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

            this.socket.emit("stake");
            let uidArray = [],
                stakeArray = [],
                rankArray = [],
                dataArray = [];
            this.socket.on("stakeResponse", msg => {
              for (let [key, value] of Object.entries(msg)) {
                uidArray.push(key)
                stakeArray.push(value);
              }
            });
            this.setState({"stakeVal" : stakeArray, "uidVal" : uidArray});



            this.socket.emit("rank");
            this.socket.on("rankResponse", msg => {
              for (let [key, value] of Object.entries(msg)) {
                rankArray.push(value);
                dataArray.push({uid: this.state.uidVal[key], stake: this.state.stakeVal[key], rank: value})
              }
            });
            this.setState({"rankVal" : rankArray, "dataVal" : dataArray});

        })
    }
    render() {
        return (
            <React.Fragment>
          <div>
            <Tables data = {this.state.dataVal}/>
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
