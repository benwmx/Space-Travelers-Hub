import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './missions/missions';

const reducer = combineReducers({
  missions: missionReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
