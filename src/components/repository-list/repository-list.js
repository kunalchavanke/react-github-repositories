import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import RepositoryListHeader from './repository-list-header/repository-list-header';
import RepositoryDetails from './repository-details/repository-details';

// component representing repository list table
class RepositoryList extends Component {

    state = {
        // holds all the repositories
        repos: [],
        // holds column headers
        headers: ['Id', 'Repo name', 'Languages', 'Subscribers', 'Contributers', 'Repo url', 'Owner']
    }

    constructor() {
        super();
        // gets repositories
        axios.get(`https://api.github.com/users/rashmivishwakarma/repos`)
            .then(res => {
                const repos = res.data;
                console.log(repos);
                this.setState({ repos });
            });
    }

    render = () => (
        // repos list table
        <Table hover bordered responsive>
            <thead>
                {/* column headers */}
                <RepositoryListHeader headers={this.state.headers} />
            </thead>
            <tbody>
                {/* repositories */}
                {this.state.repos.map((repo, index) => <RepositoryDetails key={repo.id} index={index + 1} {...repo} />)}
            </tbody>
        </Table>
    );

}
export default RepositoryList;