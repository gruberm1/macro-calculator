import React from 'react';
import MacroCyle from './MacroCycle';
import DietPlan from './DietPlan';

const Calories = ({personInfo}) => {
  return (
    <div>
      <div className="row">
        <hr className="major-break"/>
        <div className ='col-md-4 col-md-offset-4 text-center'>
          <h2>YOUR CALORIES: {personInfo.cals}</h2>
        </div>
      </div>
      <hr className="major-break"/>
      <MacroCyle personInfo={personInfo}/>
      <hr className="major-break"/>
      <DietPlan personInfo={personInfo.dietPlan}/>
    </div>
  );
};

  Calories.propTypes = {
    personInfo: React.PropTypes.object.isRequired
  };

export default Calories;
