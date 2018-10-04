import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Header from './header/header';
import RepositoryList from './repository-list/repository-list';

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
              <Route path="/" component={ RepositoryList } />
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
