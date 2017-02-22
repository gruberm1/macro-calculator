import React from 'react';

const MacroCyle = ({personInfo}) => {

  return (
      <div className="row">
        <table className="col-md-12 table">
          <thead>
            <tr>
              <th className ="text-center">Day</th>
              <th className ="text-center">Protein</th>
              <th className ="text-center">Carb</th>
              <th className ="text-center">Fat</th>
              <th className ="text-center">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className ="text-center">Monday</td>
              <td className ="text-center">{personInfo.macros.low.protein}</td>
              <td className ="text-center">{personInfo.macros.low.carb}</td>
              <td className ="text-center">{personInfo.macros.low.fat}</td>
              <td className ="text-center">Low Carb</td>
            </tr>
            <tr>
              <td className ="text-center">Tuesday</td>
              <td className ="text-center">{personInfo.macros.low.protein}</td>
              <td className ="text-center">{personInfo.macros.low.carb}</td>
              <td className ="text-center">{personInfo.macros.low.fat}</td>
              <td className ="text-center">Low Carb</td>
            </tr>
            <tr>
              <td className ="text-center">Wednesday</td>
              <td className ="text-center">{personInfo.macros.high.protein}</td>
              <td className ="text-center">{personInfo.macros.high.carb}</td>
              <td className ="text-center">{personInfo.macros.high.fat}</td>
              <td className ="text-center">High Carb</td>
            </tr>
            <tr>
              <td className ="text-center">Thursday</td>
              <td className ="text-center">{personInfo.macros.low.protein}</td>
              <td className ="text-center">{personInfo.macros.low.carb}</td>
              <td className ="text-center">{personInfo.macros.low.fat}</td>
              <td className ="text-center">Low Carb</td>
            </tr>
            <tr>
              <td className ="text-center">Friday</td>
              <td className ="text-center">{personInfo.macros.low.protein}</td>
              <td className ="text-center">{personInfo.macros.low.carb}</td>
              <td className ="text-center">{personInfo.macros.low.fat}</td>
              <td className ="text-center">Low Carb</td>
            </tr>
            <tr>
              <td className ="text-center">Saturday</td>
              <td className ="text-center">{personInfo.macros.high.protein}</td>
              <td className ="text-center">{personInfo.macros.high.carb}</td>
              <td className ="text-center">{personInfo.macros.high.fat}</td>
              <td className ="text-center">High Carb</td>
            </tr>
            <tr>
              <td className ="text-center">Sunday</td>
              <td className ="text-center">{personInfo.macros.no.protein}</td>
              <td className ="text-center">{personInfo.macros.no.carb}</td>
              <td className ="text-center">{personInfo.macros.no.fat}</td>
              <td className ="text-center">Rest</td>
            </tr>
          </tbody>
          </table>
        </div>
  );
};

  MacroCyle.propTypes = {
    personInfo: React.PropTypes.object.isRequired
  };

export default MacroCyle;
