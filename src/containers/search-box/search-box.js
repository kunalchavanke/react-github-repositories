import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import { filterReposAction } from '../../actions/repos-action'

class SearchBox extends Component {
    
    // called on value change of search box input 
    onChange = (event) => {
        let searchString = event.target.value || '';
        this.props.filterReposAction(searchString);
    }

    render = () => (
        <Input type="text"
            id="searchBox"
            placeholder="Search repository"
            value={this.props.searchString}
            onChange={this.onChange}
        />
    )
}
const mapStateToProps = (state) => ({
    searchString: state.reposReducer.searchString
});

const mapDispatchToProps = (dispatch) => ({
    filterReposAction: (searchString) => {
        dispatch(filterReposAction(searchString));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);