import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { allReducers } from './reducers';


// thunk - used allowe one action with object not pure
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// config for redux extension with redux-thunk
export const store = createStore(
    allReducers,
    composeEnhancer(applyMiddleware(thunk))
);