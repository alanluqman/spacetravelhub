import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import mission from './missions';
import rockets from './rockets';

const rootReducer = combineReducers({ rockets, mission });
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
