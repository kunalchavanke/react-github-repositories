import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import './App.css';
import NavigationBar from './navigation-bar/navigation-bar';
import ReposList from './repos-list/repos-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* navbar */}
        <NavigationBar />
        {/* body */}
        <Container className="Container">
          {/* table header */}
          <Row className="TableHeader"><h4 className="h4">List of repositories</h4></Row>
          {/* repository list table */}
          <Row><ReposList /></Row>
        </Container>
      </div>
    );
  }
}
export default App;
