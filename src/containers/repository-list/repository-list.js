import React, { Component } from 'react';
import { Table } from 'reactstrap';
import RepositoryListHeader from '../../components/repository-list-header/repository-list-header';
import RepositoryDetails from '../repository-details/repository-details';

// component representing repository list table
class RepositoryList extends Component {

    render = () => (
        // repos list table
        <Table hover bordered responsive>
            <thead>
                {/* column headers */}
                <RepositoryListHeader headers={this.props.headers} />
            </thead>
            <tbody>
                {/* repositories */}
                {this.props.repos.map((repo, index) => <RepositoryDetails key={repo.id} index={index + 1} {...repo} />)}
            </tbody>
        </Table>
    );

}
export default RepositoryList;