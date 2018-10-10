import { combineReducers } from 'redux';
import reposReducer from './repos-reducer';
import appReducer from './app-reducer';

export default combineReducers({ reposReducer, appReducer });