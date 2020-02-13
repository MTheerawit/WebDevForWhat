import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import App from './components/App';
import App from './components/App';
// import About from './components/About';
// import NotFound from './components/NotFound';
// import TestAPI from './components/TestAPI';

class Routes extends Component {
    render() {
      return (
        <div className="App container">
            <Switch>
                {/* <Route path='/about' component={About} />
                <Route path='/404' component={NotFound} />
                <Route path='/testAPI' component={TestAPI} /> */}
                <Route path='/' component={App} />
            </Switch>
        </div>
      )
    }
}

export default Routes;