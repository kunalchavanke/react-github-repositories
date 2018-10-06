import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/header/header';
import RepositoryList from './containers/repository-list/repository-list';
import Languages from './containers/languages/languages';
import Subscribers from './containers/subscribers/subscribers';

class App extends Component {

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
        console.log(...repos);
        this.setState({ repos });
      });
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col><Header /></Col>
        </Row>
        <br />
        <Row>
          <Col>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={() => { return <RepositoryList repos={this.state.repos} headers={this.state.headers} /> }} />
                <Route path="/languages/:id" render={(props) => { return <Languages {...props} repos={this.state.repos} /> }} />
                <Route path="/subscribers/:id" render={(props) => { return <Subscribers {...props} repos={this.state.repos} /> }} />
              </Switch>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
