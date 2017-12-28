import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ), div,
  );
});
