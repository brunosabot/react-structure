import React from 'react';
import ReactDOM from 'react-dom';

import Input from './Input';

describe('Test styled Input component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render((<Input onChange={() => { }} />), div);
  });
});
