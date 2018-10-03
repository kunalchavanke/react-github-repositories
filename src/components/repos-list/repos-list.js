import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import ReposListHeader from './repos-list-header/repos-list-header';
import Repos from './repos/repos';

// component representing repository list table
class ReposList extends Component {

    state = {
        // holds all the repositories
        repos: [],
        // holds column headers
        headers: ['Sr.no', 'Repo name', 'Created at', 'Last updated at', 'Repo url', 'Owner']
    }

    constructor() {
        super();
        // gets repositories
        axios.get(`https://api.github.com/users/rashmivishwakarma/repos`)
            .then(res => {
                const repos = res.data;
                this.setState({ repos });
            });
    }

    render = () => (
        // repos list table
        <Table hover bordered responsive>
            <thead>
                {/* column headers */}
                <ReposListHeader headers={this.state.headers} />
            </thead>
            <tbody>
                {/* repositories */}
                {this.state.repos.map((repo, index) => <Repos key={repo.id} index={index + 1} {...repo} />)}
            </tbody>
        </Table>
    );

}
export default ReposList;