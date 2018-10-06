import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchBox extends Component {

    // holds search string
    searchString = '';

    // called on value change of search box input 
    onChange = (event) => {
        this.searchString = event.target.value || '';
        this.props.onSearch(this.searchString);
    }

    render = () => (
        <Input type="text"
            id="searchBox"
            placeholder="Search repository"
            value={this.searchString}
            onChange={this.onChange}
        />
    )
}
export default SearchBox;