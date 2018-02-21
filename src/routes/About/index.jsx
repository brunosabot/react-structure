import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./About/About";
import Me from "./Me/Me";

const AboutIndex = () => (
  <Switch>
    <Route path="/about" component={About} exact />
    <Route path="/about/me" component={Me} />
  </Switch>
);

export default AboutIndex;
