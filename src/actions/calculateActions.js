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
    return fetch('http://localhost:8080/calories?age='+personInfo.age+'&measurement='+personInfo.measurement+'&gender='+personInfo.gender+'&weight='+personInfo.weight+'&height='+personInfo.height+'&goal='+personInfo.goal+'&activity='+personInfo.activity)
    .then(response => response.json())
    .then(personInfo => {
      console.log(personInfo)
      if (personInfo.reason){
        console.log("HERE")
        throw(personInfo.reason);
      }
      dispatch(calculateCaloriesSuccess(personInfo))
    })
    .catch(error => {
      console.log("ERROR!!!!", error);
      throw(error);

    });
  }
}
