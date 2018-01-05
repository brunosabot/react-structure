import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../routes/About';
import Home from '../routes/Home/Home';

import './App.css';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);

export default App;
