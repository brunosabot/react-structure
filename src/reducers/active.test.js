import reducer from "./active";
import { TOGGLE_ACTIVE_ACTION } from "../dispatchers/active";

describe("Active reducer", () => {
  it("Test default values", () => {
    expect(reducer(undefined, {})).toEqual({ active: false });
  });

  it("Test toggle active action", () => {
    const action = { type: TOGGLE_ACTIVE_ACTION };

    expect(reducer({ active: true }, action)).toEqual({ active: false });
    expect(reducer({ active: false }, action)).toEqual({ active: true });
  });
});
