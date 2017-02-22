import delay from './delay';
import macro from './calculateMacros';

class CourseApi {

  static calculateCalories(person) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (person.gender === "" ) {
          reject("Please select gender");
        }
        if (person.measurement === "") {
          reject("Please select measurement system");
        }
        if (person.goal === "") {
          reject("Please select goal");
        }
        if (person.age === "" ) {
          reject("Please add valid age");
        }
        if (person.weight === "") {
          reject("Please add valid weight");
        }
        if (person.height === "") {
          reject("Please add valid height");
        }
        
        if (person.measurement ==='lbs/inches' && person.gender ==='Female'){
          person.cals = (655 + ( 4.35 * person.weight ) + ( 4.7 * person.height ) - ( 4.7 * person.age )) * 1.5;
        } else if (person.measurement ==='kg/cms' && person.gender ==='Female'){
          person.cals = (447.593 + (9.247 * person.weight ) + (3.098 * person.height ) - (3.098 * person.age )) * 1.5;
        } else if (person.measurement ==='lbs/inches' && person.gender==='Male'){
          person.cals = (66 + ( 6.23 * person.weight ) + ( 12.7 * person.height ) - ( 6.8 * person.age )) * 1.5;
        } else {
          person.cals = (88.362 + (13.397 * person.weight ) + (4.799 * person.height ) - (5.677 * person.age )) * 1.5;
        }
        person.cals=Math.round(person.cals);

        let macros = {
          low: {},
          high:{},
          no:{}
        };

        let no = person.cals - 500;

        if(person.goal==='Build Muscle'){
          person.cals= person.cals + 100;
          macros.low.protein = Math.round((person.cals*0.30)/4);
          macros.low.carb = Math.round((person.cals*0.45)/4);
          macros.low.fat = Math.round((person.cals*0.25)/9);

          macros.high.protein = Math.round((person.cals*0.25)/4);
          macros.high.carb = Math.round((person.cals*0.55)/4);
          macros.high.fat = Math.round((person.cals*0.20)/9);

          macros.no.protein = Math.round((no*0.45)/4);
          macros.no.carb = Math.round((no*0.10)/4);
          macros.no.fat = Math.round((no*0.45)/9);

        } else {
          macros.low.protein = Math.round((person.cals*0.38)/4);
          macros.low.carb = Math.round((person.cals*0.28)/4);
          macros.low.fat = Math.round((person.cals*0.34)/9);

          macros.high.protein = Math.round((person.cals*0.35)/4);
          macros.high.carb = Math.round((person.cals*0.40)/4);
          macros.high.fat = Math.round((person.cals*0.25)/9);

          macros.no.protein = Math.round((no*0.45)/4);
          macros.no.carb = Math.round((no*0.13)/4);
          macros.no.fat = Math.round((no*0.42)/9);
        }

        person.macros= macros;
        resolve(Object.assign({}, person));
      }, delay);
    });
  }
}

export default CourseApi;
