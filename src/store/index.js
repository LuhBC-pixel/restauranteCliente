import { createStore, combineReducers } from 'redux';
import { AppReducer } from './AppReducer';
import { AuthReducer } from './AuthReducer';

export const store = createStore(
  combineReducers({ auth: AuthReducer, app: AppReducer })
);
