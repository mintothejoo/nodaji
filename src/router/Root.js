import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Media from 'react-media';
import { hot } from 'react-hot-loader';
import store from '../redux/store';

import { Home, About } from '../containers';
import { MobileNav, Nav, MobileBottomNav } from '../components';

import '../styles/main/main.scss';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Media query="(max-width: 768px)">{matches => (matches ? <MobileNav /> : <Nav />)}</Media>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </Router>
          <Media query="(max-width: 768px)">{matches => (matches ? <MobileBottomNav /> : '')}</Media>
        </div>
      </Provider>
    );
  }
}

export default hot(module)(Root);
