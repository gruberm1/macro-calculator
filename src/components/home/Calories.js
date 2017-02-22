import React from 'react';
import MacroCyle from './MacroCycle';

const Calories = ({personInfo}) => {
  return (
    <div>
      <div className="row">
        <div className ='col-md-4 col-md-offset-4 text-center'>
          <h3>Calories: {personInfo.cals}</h3>
        </div>
      </div>
      <hr />
      <MacroCyle personInfo={personInfo}/>
    </div>
  );
};

  Calories.propTypes = {
    personInfo: React.PropTypes.object.isRequired
  };

export default Calories;
