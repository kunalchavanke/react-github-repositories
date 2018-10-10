import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Header from './components/header/header';
import RepositoryList from './containers/repository-list/repository-list';
import Languages from './containers/languages/languages';
import Subscribers from './containers/subscribers/subscribers';
import Contributers from './containers/contributers/contributers';
import { setTitleAction, setNavUrlAction } from './actions/app-actions'

class App extends Component {

  constructor(props) {
    super(props);
    this.setUrlAndTitle = this.setUrlAndTitle.bind(this);
  }

  // called on click of the repository url
  setUrlAndTitle = (url, title) => {
    this.props.setTitleAction(title);
    this.props.setNavUrlAction(url);
  }

  render() {
    return (
      <Container className="App">
        <BrowserRouter>
          <div>
            <Row>
              <Col><Header title={this.props.title} /></Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Switch>
                  <Route exact path="/" component={() => <RepositoryList onClickUrl={this.setUrlAndTitle} />} />
                  <Route path="/languages/:id" component={() => <Languages languagesUrl={this.props.url} />} />
                  <Route path="/subscribers/:id" component={() => <Subscribers subscribersUrl={this.props.url} />} />
                  <Route path="/contributors/:id" component={() => <Contributers contributorsUrl={this.props.url} />} />
                </Switch>
              </Col>
            </Row>
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.appReducer.title,
  url: state.appReducer.url
});

const mapDispatchToProps = (dispatch) => ({
  setTitleAction: (title) => {
    dispatch(setTitleAction(title));
  },
  setNavUrlAction: (url) => {
    dispatch(setNavUrlAction(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
