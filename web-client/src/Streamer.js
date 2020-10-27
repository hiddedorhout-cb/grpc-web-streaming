import React, { Component } from "react";
import {CounterServicePromiseClient, CountRequest, CountResponse} from "./streaming_grpc_web_pb";

class Streamer extends Component {
    constructor() {
        this.client = new CounterServicePromiseClient("http://localhost:8080")

        this.state = {
            value: 0
        }
    
    }

    componentDidMount() {
        const stream = this.client.count(CountRequest(), {})
        stream.on(`data`, (response) => {
            console.log(response)
            this.setState({value: response.value})
        })
    }

    render() {
        return (
            <div>
                {this.state.value}
            </div>
        )
    }
}

export default Streamer