import React from "react";
import ReactDOM from "react-dom";

import HomeLogin from "./HomeLogin";

describe("Test HomeLogin route component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<HomeLogin />, div);
  });
});
