import { TOGGLE_ACTIVE_ACTION } from '../dispatchers/active';

const defaultState = {
  active: false,
};

export default (state = defaultState, action) => {
  if (action.type === TOGGLE_ACTIVE_ACTION) {
    return { ...state, active: !state.active };
  }

  return state;
};
