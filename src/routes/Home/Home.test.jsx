import React from 'react';
import ReactDOM from 'react-dom';

import Home from './';

describe('Test Home route component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render((<Home />), div);
  });
});
