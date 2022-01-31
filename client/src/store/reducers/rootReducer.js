import { combineReducers } from 'redux';
import { currentUserReducer } from './currentUser';

const rootReducer = combineReducers({ currentUser: currentUserReducer });

export default rootReducer;
