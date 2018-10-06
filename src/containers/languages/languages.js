import React, { Component } from 'react';
import axios from 'axios';

class Languages extends Component {

    constructor() {
        super();
        this.state = { languages: {} }
    }

    componentDidMount() {
        // get languages url for selected repository
        this.languagesUrl = this.props.repos.find(repo => repo.id == this.props.match.params.id).languages_url;
        // get languages
        axios.get(this.languagesUrl)
            .then(res => {
                this.setState({ languages: res.data });
            });
    }

    render = () => (
        <div >
            {
                Object.keys(this.state.languages).map((key, index) =>
                    <div key={index}>
                        <span> {key} : </span> <span> {this.state.languages[key]} </span>
                    </div>
                )
            }
        </div>
    );
}
export default Languages;