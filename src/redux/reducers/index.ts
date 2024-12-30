import { combineReducers } from 'redux';
import apiReducer from './apiReducer';

const rootReducer = combineReducers({
  api: apiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
