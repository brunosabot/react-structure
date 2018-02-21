import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Input from "./Input";

Enzyme.configure({ adapter: new Adapter() });

describe("Test functionnal Input component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input onChange={() => {}} />, div);
  });

  it("Should call the onChange when field content changes", () => {
    const callback = jest.fn();
    const component = shallow(<Input onChange={callback} />);

    component.find("Input").simulate("change", { target: { value: "test" } });

    expect(callback).toHaveBeenCalledWith("test");
  });

  it("Should change the value state when field content changes", () => {
    const callback = jest.fn();
    const component = shallow(<Input onChange={callback} />);

    component.find("Input").simulate("change", { target: { value: "test" } });

    expect(component.state("value")).toBe("test");
  });
});
