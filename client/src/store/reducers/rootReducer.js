import { combineReducers } from 'redux';
import { userLoginReducer } from './userReducer';

const rootReducer = combineReducers({ user: userLoginReducer });

export default rootReducer;
