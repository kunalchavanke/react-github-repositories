import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Contributers extends Component {

    constructor(props) {
        super(props);
        this.state = { contributers: [] }
    }

    componentDidMount() {
        // get contributers url
        let repo = this.props.repos.find(repo => repo.id === +this.props.match.params.id);
        // get contributers
        axios.get(repo.contributors_url)
            .then(res => {
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
const mapStateToProps = (state) => ({
    repos: state.reposReducer.repos
});

const mapDispatchToProps = (dispatch) => ({
    // setTitleAction: (title) => {
    //     dispatch(setTitleAction(title));
    // }
});
export default connect(mapStateToProps, mapDispatchToProps)(Contributers);