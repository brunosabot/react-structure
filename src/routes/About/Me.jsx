import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const About = () => (
  <Fragment>
    <h1>About me</h1>
    <NavLink to="/">Home</NavLink>
  </Fragment>
);

export default About;
