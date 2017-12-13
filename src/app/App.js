import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Auth from '../auth/Auth';
import Nav from '../nav/Nav';
import About from '../about/About';
import Game from '../game/Game';
// import Error from './Error';
// import Loading from './Loading';
import PrivateRoute from '../auth/PrivateRoute';

import { connect } from 'react-redux';


class App extends Component {
  render() {
    const { loading, error } = this.props;

    return (
      <Router>
        <div className="App">
          <header>
            <h1>Memory App</h1>
            <Auth/>
            <Nav/>
          </header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <PrivateRoute path="/about" component={About}/>
            {/* <Route path="/game" component={Game}/> */}
            <PrivateRoute path="/game" component={Game}/>
          </Switch>
          {/* <Loading loading={loading}/> */}
          {/* <Error error={error}/> */}
          <footer>
            <h1>FOOOOOOOOOOOOOT</h1>
          </footer>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    error: state.error
  }),
  null
)(App);
