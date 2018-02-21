import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import HomeLogin from "../components/HomeLogin/HomeLogin";

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <NavLink to="/about">About</NavLink>
    -
    <NavLink to="/about/me">About me</NavLink>
    <HomeLogin />
  </Fragment>
);

export default Home;
