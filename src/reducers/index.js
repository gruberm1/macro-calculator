import {combineReducers} from 'redux';
import calculator from './calculateReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  calculator,
  ajaxCallsInProgress
});

export default rootReducer;
