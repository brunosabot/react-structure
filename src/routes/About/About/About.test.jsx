import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

import About from "./About";

describe("Test About route component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
      div
    );
  });
});
