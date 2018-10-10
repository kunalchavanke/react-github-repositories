import React, { Component } from 'react';
import axios from 'axios';

class Subscribers extends Component {

    constructor() {
        super();
        this.state = { subscribers: [] }
    }

    componentDidMount() {
        // get subscribers
        axios.get(this.props.subscribersUrl)
            .then(res => {
                this.setState({ subscribers: res.data })
            });
    }

    render = () => (
        <div >
            {this.state.subscribers.length > 0 &&

                this.state.subscribers.map((subscriber) => (
                    Object.keys(subscriber).map((key) =>
                        <div>
                            <span> {key} : </span>
                            <span> {subscriber[key]} </span>
                        </div>
                    )
                ))
            }
        </div>
    );
}
export default Subscribers;