import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './modules/reducers';

export const history = createBrowserHistory();
const enhancers = [];

const DEVELOPMENT = process.env.NODE_ENV === 'development';

if (DEVELOPMENT) {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(routerMiddleware(history),
    thunk),
  ...enhancers
);

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composedEnhancers
  );

  return store;
}
