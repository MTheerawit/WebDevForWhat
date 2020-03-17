import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
// import About from './components/About';
// import NotFound from './components/NotFound';
// import TestAPI from './components/TestAPI';

class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* <Route path='/about' component={About} />
        <Route path='/404' component={NotFound} />
        <Route path='/testAPI' component={TestAPI} /> */}
        <Route path='/' component={App} />

      </Switch>
    )
  }
}

export default Routes;