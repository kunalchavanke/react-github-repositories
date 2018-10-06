import React, { Component } from 'react';
import axios from 'axios';

class Subscribers extends Component {

    constructor() {
        super();
        this.state = { subscribers: [] }
    }

    componentDidMount() {
        // get subscribers url for selected repository
        this.subscribersUrl = this.props.repos.find(repo => repo.id == this.props.match.params.id).subscribers_url;
        // get subscribers
        axios.get(this.subscribersUrl)
            .then(res => {
                this.setState({ subscribers: res.data });
            });
    }

    render = () => (
        <div >
            {
                this.state.subscribers.forEach(subscriber => {
                    return <div>{subscriber.toString()}
                        {/* <div>
                            Object.keys(subscriber).map((key, index) =>
                                    <div key={index}>
                                <span> {key} : </span> <span> {subscriber[key]} </span>
                            </div>
                            )
                        </div> */}
                        <hr />
                    </div>
                })
            }
        </div>
    );
}
export default Subscribers;