import {combineReducers, ReducersMapObject} from 'redux';

export default function createReducer(asyncReducers: ReducersMapObject) {
  return combineReducers({
    ...asyncReducers
  });
}