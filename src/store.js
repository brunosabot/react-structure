import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import active from './reducers/active';

let store = null;

const initStore = () => {
  const reducers = combineReducers({ active });

  store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

  if (process.env.NODE_ENV === 'development') {
    const debug = () => { global.$$state = store.getState(); };
    store.subscribe(debug);
    debug();
  }

  return store;
};

export const getStore = () => (store === null ? initStore() : store);
export const getState = reducer => getStore().getState()[reducer];
export const { dispatch } = getStore();
