import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

import Home from "./Home";

describe("Test Home route component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
      div
    );
  });
});
