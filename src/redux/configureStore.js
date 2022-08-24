
import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import mission from './missions';

const rootReducer = combineReducers({ mission });
const store = createStore(rootReducer, applyMiddleware(thunk));
// subscribe store to monitor state changes
// store.subscribe(() => {
//   console.log('Store changed ! ', store.getState());
// });

import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rockets from './rockets';

const rootReducer = combineReducers({ rockets });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
