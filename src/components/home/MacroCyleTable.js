import React from 'react';

const MacroCyleTable = ({day, cals, protein, carb, fat, type, style}) => {

  return (
    <div>
      <div className={style}>
        <div className="col-md-2 col-md-offset-2 text-center macro-table-row">
          <p className="table-text align-middle">{day}</p>
        </div>
        <div className="col-md-2 text-center macro-table-row">
          <p className="align-middle table-text">{cals}</p>
        </div>
        <div className="col-md-2 text-center">
          <p className="table-text">PROTEIN: {protein}</p>
          <p className="table-text">CARBOHYDRATE: {carb}</p>
          <p className="table-text">FAT: {fat}</p>
        </div>
        <div className="col-md-2 text-center macro-table-row">
          <p className="align-middle table-text">{type}</p>
        </div>
      </div>
    </div>

  );
};

  MacroCyleTable.propTypes = {
    day: React.PropTypes.string.isRequired
  };

export default MacroCyleTable;
