import { createStore, combineReducers } from 'redux';
import { AppReducer } from './AppReducer';
import { AuthReducer } from './AuthReducer';
import { OrderReducer } from './OrderReducer';

export const store = createStore(
  combineReducers({ auth: AuthReducer, app: AppReducer, order: OrderReducer })
);
