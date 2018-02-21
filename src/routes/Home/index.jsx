import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home";

const HomeIndex = () => (
  <Switch>
    <Route path="/" component={Home} exact />
  </Switch>
);

export default HomeIndex;
