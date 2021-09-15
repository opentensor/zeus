import React from "react";
import io from 'socket.io-client';

class SocketData extends React.Component {
    state = {
        socketData: "",
        socketStatus:"On"
    }
    componentWillUnmount() {
        this.socket.close()
        console.log("component unmounted")
    }
    componentDidMount() {
        var sensorEndpoint = "http://204.48.29.198:5000"
            this.socket = io.connect(sensorEndpoint, {
            reconnection: true,
            // transports: ['websocket']
        });
        console.log("component mounted")
        this.socket.on("responseMessage", message => {
            this.setState({'socketData': message.stake})

            console.log("responseMessage", message)
        })

    }
    handleEmit=()=>{
        if(this.state.socketStatus==="On"){
        this.socket.emit("message", {'data':'Stop Sending', 'status':'Off'})
        this.setState({'socketStatus':"Off"})
    }
    else{
        this.socket.emit("message", {'data':'Start Sending', 'status':'On'})
        this.setState({'socketStatus':"On"})
        }
        console.log("Emit Clicked")
    }
    render() {
        return (
            <React.Fragment>
            <div>Data: {this.state.socketData}</div>
            <div>Status: {this.state.socketStatus}</div>
            <div onClick={this.handleEmit}> Start/Stop</div>
            </React.Fragment>
        )
    }
}
export default SocketData;
