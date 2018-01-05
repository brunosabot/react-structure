import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import Me from './Me';

describe('Test Me route component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      (
        <MemoryRouter>
          <Me />
        </MemoryRouter>
      ), div,
    );
  });
});
