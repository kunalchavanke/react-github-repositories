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
        axios.get(this.props.contributorsUrl)
            .then(res => {
                console.log(res.data);
                this.setState({ contributers: res.data })
            });
    }

    render = () => (
        <div >
            {this.state.contributers.length > 0 &&

                this.state.contributers.map((contributer) => (
                    Object.keys(contributer).map((key) =>
                        <div>
                            <span> {key} : </span>
                            <span> {contributer[key]} </span>
                        </div>
                    )
                ))
            }
        </div>
    );
}
export default Contributers;