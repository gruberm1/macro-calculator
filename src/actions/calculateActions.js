import * as types from './actionTypes';
import calculateAPI from '../api/mockCalculateApi';
import http from 'http';

export function calculateCaloriesSuccess(personInfo) {
  return {type: types.CALCULATE_CALORIES_SUCCESS, personInfo}
}

export function calculateCalories(personInfo) {
  return {type: types.CALCULATE_CALORIES, personInfo}
}

export function getCalories(personInfo){
  return function(dispatch){
    return calculateAPI.calculateCalories(personInfo)
    .then(personCals => {
      console.log("HERE", personInfo);
      dispatch(calculateCaloriesSuccess(personCals))
    })
    .catch(error => {
      throw(error);
    });
  }
}
