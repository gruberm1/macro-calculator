import React from 'react';
import MacroCyle from './MacroCycle';
import DietPlan from './DietPlan';
import { Accordion, AccordionItem } from 'react-sanfona';

const DietPlanTable = ({meal}) => {

let ingredients = [];

for(let x = 0; x < meal.ingredients.length; x ++){
  ingredients.push(
        <tr>
          <td>
            <h4 className='text-center table-text'>{meal.ingredients[x].quantity.amount} {meal.ingredients[x].quantity.measurement} - {meal.ingredients[x].name}</h4>
          </td>
        </tr>);
    ingredients.push(
      <tr>
        <td>
          <p className='text-center table-text col-md-2 col-md-offset-3 border-right'>PROTEIN: {meal.ingredients[x].macros.protein}g</p>
          <p className='text-center table-text col-md-2 border-right'>CARBOHYDRATE: {meal.ingredients[x].macros.carbohydrate}g</p>
          <p className='text-center table-text col-md-2'>FAT: {meal.ingredients[x].macros.fat}g</p>
        </td>
      </tr>);
}

return (
  <div>
    <Accordion className='row'>
      <hr className="major-break" />
       <AccordionItem title={meal.name} slug={meal.name} key={meal.name} className="col-md-12 text-center">
         <div className='row'>
           <table className="table table-striped">
             <tbody>
               {ingredients}
            </tbody>
          </table>
         </div>
         <div className='row'>
           <div className="total">
             <h3 className="total-text col-md-offset-3">TOTAL</h3>
           </div>
         </div>
         <div className='row'>
           <table className="table table-striped">
          <tbody>
            <tr>
              <td>
                <p className='text-center table-text'>CALORIES: {meal.macros.calories}</p>
              </td>
            </tr>
          <tr>
            <td>
              <p className='text-center table-text col-md-2 col-md-offset-3 border-right'>PROTEIN: {meal.macros.protein}g</p>
              <p className='text-center table-text col-md-2 border-right'>CARBOHYDRATE: {meal.macros.carbohydrate}g</p>
              <p className='text-center table-text col-md-2'>FAT: {meal.macros.fat}g</p>
            </td>
          </tr>
          </tbody>
          </table>
         </div>
       </AccordionItem>
    </Accordion>
  </div>
  );
};

export default DietPlanTable;
