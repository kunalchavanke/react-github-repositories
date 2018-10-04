import React, { Component } from 'react';
// import { Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import Header from './header/header';
import RepositoryList from './repository-list/repository-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* header */}
        <Header />
        {/* body */}
        <Container className="container-fluid">
          {/* repository list table */}
          <RepositoryList />
        </Container>
      </div>
    );
  }
}
export default App;
