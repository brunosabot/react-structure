import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { getStore } from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

export default () => {
  ReactDOM.render(
    (
      <Provider store={getStore()}>
        <HashRouter>
          <Route render={App} />
        </HashRouter>
      </Provider>
    ), document.getElementById('root'),
  );

  registerServiceWorker();
};
