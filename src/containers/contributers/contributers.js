import React, { Component } from 'react';
import axios from 'axios';

class Contributers extends Component {

    constructor() {
        super();
        this.state = { contributers: [] }
    }
    
    componentDidMount() {
        // get contributers
        console.log(this.props.contributorsUrl);
        axios.get(this.props.contributersUrl)
            .then(res => {
                this.setState({ contributers: res.data })
             });
    }

    render = () => (
        <div >
            {
                // Object.keys(this.state.subscribers).map((key, index) =>
                //     <div key={index}>
                //         <span> {key} : </span> <span> {this.state.languages[key]} </span>
                //     </div>
                // )
            }
        </div>
    );
}
export default Contributers;