import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import About from '../routes/About/About';
import Home from '../routes/Home/Home';

import './App.css';

const App = ({ location }) => (
  <div className="App">
    <Switch location={location} >
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);

App.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App;
