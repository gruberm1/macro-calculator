import React from 'react';
import MacroCyleTable from './MacroCyleTable';

const MacroCyle = ({personInfo}) => {
  let rest = personInfo.cals - 500;
  return (
    <div>
      <div className="row">
        <div className="col-md-2 col-md-offset-2 text-center">
          <h3 className="table-title">DAY</h3>
        </div>
        <div className="col-md-2 text-center">
          <h3 className="table-title">CALORIES</h3>
        </div>
        <div className="col-md-2 text-center">
          <h3 className="table-title">MACROS</h3>
        </div>
        <div className="col-md-2 text-center">
          <h3 className="table-title">TYPE</h3>
        </div>
      </div>
      <MacroCyleTable
        day="MONDAY"
        style="row"
        cals={personInfo.cals}
        protein={personInfo.macros.low.protein}
        carb={personInfo.macros.low.carb}
        fat={personInfo.macros.low.fat}
        type="LOW CARB"/>
      <MacroCyleTable
        day="TUESDAY"
        cals={personInfo.cals}
        protein={personInfo.macros.high.protein}
        carb={personInfo.macros.high.carb}
        fat={personInfo.macros.high.fat}
        style="row white"
        type="HIGH CARB"/>
      <MacroCyleTable
        day="WEDNESDAY"
        style="row"
        cals={personInfo.cals}
        protein={personInfo.macros.low.protein}
        carb={personInfo.macros.low.carb}
        fat={personInfo.macros.low.fat}
        type="LOW CARB"/>
      <MacroCyleTable
        day="THURSDAY"
        cals={personInfo.cals}
        protein={personInfo.macros.low.protein}
        carb={personInfo.macros.low.carb}
        fat={personInfo.macros.low.fat}
        style="row white"
        type="LOW CARB"/>
      <MacroCyleTable
        style="row"
        day="FRIDAY"
        cals={personInfo.cals}
        protein={personInfo.macros.high.protein}
        carb={personInfo.macros.high.carb}
        fat={personInfo.macros.high.fat}
        type="HIGH CARB"/>
      <MacroCyleTable
        day="SATURDAY"
        cals={personInfo.cals}
        protein={personInfo.macros.low.protein}
        carb={personInfo.macros.low.carb}
        fat={personInfo.macros.low.fat}
        style="row white"
        type="LOW CARB"/>
        <MacroCyleTable
          style="row"
          day="SUNDAY"
          cals={rest}
          protein={personInfo.macros.no.protein}
          carb={personInfo.macros.no.carb}
          fat={personInfo.macros.no.fat}
          type="REST"/>
    </div>
  );
};

  MacroCyle.propTypes = {
    personInfo: React.PropTypes.object.isRequired
  };

export default MacroCyle;
