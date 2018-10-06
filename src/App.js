import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/header/header';
import RepositoryList from './containers/repository-list/repository-list';
import Languages from './containers/languages/languages';
import Subscribers from './containers/subscribers/subscribers';
import Contributers from './containers/contributers/contributers';

class App extends Component {

  constructor(){
    super();
    this.setUrlAndTitle = this.setUrlAndTitle.bind(this);
    this.state = {
      // holds url that has beed selected 
      url: '',
      // holds header title
      title: 'Dashboard'
    }
  }

  // called on click of the repository url
  setUrlAndTitle = (url, title) => { 
    this.setState({ url, title })
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col><Header title={this.state.title}/></Col>
        </Row>
        <br />
        <Row>
          <Col>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={()=><RepositoryList onClickUrl={this.setUrlAndTitle} />} />
                <Route path="/languages/:id" component={() => <Languages languagesUrl={this.state.url} />} />
                <Route path="/subscribers/:id" component={() => <Subscribers subscribersUrl={this.state.url} />} />
                <Route path="/contributors/:id" component={() => <Contributers contributorsUrl={this.state.url} />} />
              </Switch>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
