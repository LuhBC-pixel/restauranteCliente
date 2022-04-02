import { createStore, combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';

export const store = createStore(combineReducers({ auth: AuthReducer }));
