import items from './items';
import editor from './editor';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  items,
  editor,
});

export default rootReducer;