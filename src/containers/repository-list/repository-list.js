import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';
import RepositoryListHeader from '../../components/repository-list-header/repository-list-header';
import RepositoryDetails from '../repository-details/repository-details';
import SearchBox from '../search-box/search-box'
import axios from 'axios';
import './repository-list.css';
import { getReposAction, filterReposAction } from '../../actions/repos-action'

// component representing repository list table
class RepositoryList extends Component {

    constructor(props) {
        super(props);
        this.onClickUrl = this.onClickUrl.bind(this);
    }

    componentDidMount() {
        if (!this.props.searchString || this.props.searchString === "")
            // gets repositories
            this.props.getReposAction();
    }

    onClickUrl = (url, title) => {
        this.props.onClickUrl(url, title);
    }

    render = () => {
        if (this.props.repos && this.props.repos.length > 0) {
            return <Container>
                {/* serach box */}
                <Row>
                    <Col xs="4" className="search-box">
                        <SearchBox />
                    </Col>
                </Row>
                {/* repos list table */}
                <Row>
                    <Col>
                        <Table hover bordered>
                            <thead>
                                {/* column headers */}
                                <RepositoryListHeader headers={this.props.headers} />
                            </thead>
                            <tbody>
                                {/* repositories */}
                                {
                                    this.props.filteredRepos.map((repo, index) =>
                                        <RepositoryDetails key={repo.id} index={index + 1} {...repo} onClickUrl={this.onClickUrl} />)
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        } else {
            return <Container><Row><h5>Something went wrong... please try again</h5></Row></Container>
        }
    }

}

const mapStateToProps = (state) => ({
    repos: state.reposReducer.repos,
    filteredRepos: state.reposReducer.filteredRepos,
    headers: state.reposReducer.headers,
    searchString: state.reposReducer.searchString
});

const mapDispatchToProps = (dispatch) => ({
    getReposAction: () => {
        dispatch(getReposAction());
    },
    filterReposAction: (searchString) => {
        dispatch(filterReposAction(searchString));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
