import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Header from './header/header';
import RepositoryList from './repository-list/repository-list';
import Languages from './languages/languages';

class App extends Component {
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
                <Route exact path="/" component={RepositoryList} />
                <Route path="/languages" component={Languages} />
              </Switch>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
