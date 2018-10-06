import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import RepositoryListHeader from '../../components/repository-list-header/repository-list-header';
import RepositoryDetails from '../repository-details/repository-details';
import SearchBox from '../search-box/search-box'
import axios from 'axios';
import './repository-list.css';

// component representing repository list table
class RepositoryList extends Component {

    state = {
        // holds all the repositories
        repos: [],
        // holds filtered repositories
        filteredRepos: [],
        // holds message to be shown if no filter result is found 
        filterResultMessage: '',
        // holds column headers
        headers: ['Id', 'Repo name', 'Languages', 'Subscribers', 'Contributers', 'Repo url', 'Owner']
    }

    constructor() {
        super();
        this.filterRepositories = this.filterRepositories.bind(this);
        this.onClickUrl = this.onClickUrl.bind(this);
        // gets repositories
        axios.get(`https://api.github.com/users/rashmivishwakarma/repos`)
            .then(res => {
                const repos = res.data;
                console.log(res.data[0]);
                this.setState({ repos, filteredRepos: repos });
            });
    }

    // filters reposiitories containing search string
    filterRepositories = (searchString) => {
        if (searchString === '') {
            this.setState({ filteredRepos: this.state.repos, message: '' });
        } else {
            let filteredRepos = this.state.repos.filter((repo) =>
                (repo.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0)
            );
            let filterResultMessage = (!filteredRepos || filteredRepos.length === 0) ? 'No such repository found!' : '';
            this.setState({ filteredRepos, filterResultMessage });
        }
    }

    onClickUrl = (url, title) => {
        this.props.onClickUrl(url, title);
    }

    render = () => (
        <Container>
            {/* serach box */}
            <Row>
                <Col xs="4" className="search-box">
                    <SearchBox onSearch={this.filterRepositories} />
                </Col>
            </Row>
            {/* repos list table */}
            <Row>
                <Col>
                    <Table hover bordered>
                        <thead>
                            {/* column headers */}
                            <RepositoryListHeader headers={this.state.headers} />
                        </thead>
                        <tbody>
                            {/* repositories */}
                            {
                                this.state.filteredRepos.map((repo, index) =>
                                    <RepositoryDetails key={repo.id} index={index + 1} {...repo} onClickUrl={this.onClickUrl} />)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );

}
export default RepositoryList;