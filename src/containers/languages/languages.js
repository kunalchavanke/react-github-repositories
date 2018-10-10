import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setTitleAction } from '../../actions/app-actions';

class Languages extends Component {

    constructor(props) {
        super(props);
        this.state = { languages: {} }
        this.props.setTitleAction('Languages');
    }

    componentDidMount() {
        // get languages
        axios.get(this.props.url)
            .then(res => { this.setState({ languages: res.data }) });
    }

    render = () => (
        <div >
            {
                Object.keys(this.state.languages).map((key, index) =>
                    <div key={index}>
                        <span strong> {key} : </span> <span> {this.state.languages[key]} </span>
                    </div>
                )
            }
        </div>
    );
}
const mapStateToProps = (state) => ({
    url: state.appReducer.url
});

const mapDispatchToProps = (dispatch) => ({
    setTitleAction: (title) => {
        dispatch(setTitleAction(title));
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Languages);