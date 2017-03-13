import React from 'react';
import DietPlanTable from './DietPlanTable';

const DietPlan = ({personInfo}) => {

  let meals = [];
  for(let i = 0; i < personInfo.diet.length; i++){
  console.log(personInfo.diet[i]);
    meals.push(<DietPlanTable meal={personInfo.diet[i]} />);
  }
  console.log(meals);

  return (
    <div>
      <div className="row">
        <div className ='col-md-4 col-md-offset-4 text-center'>
          <h3>{personInfo.name}</h3>
        </div>
      </div>
      <div>
        {meals}
      </div>

    </div>
  );
};

  DietPlan.propTypes = {
    personInfo: React.PropTypes.object.isRequired
  };

export default DietPlan;
