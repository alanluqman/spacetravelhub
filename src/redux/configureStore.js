import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rockets from './rockets';

const rootReducer = combineReducers({ rockets });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
