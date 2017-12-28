import React from 'react';
import ReactDOM from 'react-dom';

import About from './';

describe('Test About route component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render((<About />), div);
  });
});
