import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function personReducer(state = initialState.personInfo, action) {
  switch (action.type) {
    case types.CALCULATE_CALORIES:
    console.log("REDUCER", action.personInfo)
    return  Object.assign({}, action.personInfo);
    default:
      return state;

  }
}
