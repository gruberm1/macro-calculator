import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const PersonInfoForm = ({personInfo, onSave, onChange, saving, errors}) => {
  return (
    <div className="row">
      <form className ='col-md-4 col-md-offset-4'>
        <h1 className="title">MACRO CALCULATOR</h1>

        <SelectInput
          name="gender"
          label="GENDER"
          width="col-md-6"
          value={personInfo.gender}
          defaultOption="Select Gender"
          options={["Male", "Female"]}
          onChange={onChange}
          error={errors.gender}/>

          <TextInput
            name="age"
            label="AGE"
            width="col-md-6"
            value={personInfo.age || ''}
            onChange={onChange}
            error={errors.age}/>

        <SelectInput
          name="measurement"
          label="UNITS"
          width="col-md-6"
          value={personInfo.system}
          defaultOption="SELECT UNITS"
          options={["kg/cms", "lbs/inches"]}
          onChange={onChange}
          error={errors.gender}/>

          <TextInput
            name="weight"
            label="WEIGHT"
            width="col-md-6"
            value={personInfo.weight || ''}
            onChange={onChange}
            error={errors.weight}/>

        <SelectInput
          name="goal"
          label="GOAL"
          width="col-md-6"
          value={personInfo.goal}
          defaultOption="Select Goal"
          options={["Lose Fat", "Build Muscle"]}
          onChange={onChange}
          error={errors.goal}/>


        <TextInput
          name="height"
          label="HEIGHT"
          width="col-md-6"
          value={personInfo.height || ''}
          onChange={onChange}
          error={errors.height}/>

          <SelectInput
            name="activity"
            label="ACTIVITY LEVEL"
            width="col-md-12"
            value={personInfo.activity}
            defaultOption="Select Activity Level"
            options={["I DO NOTHING", "1-2 DAYS A WEEK", "3-4 DAYS A WEEK", "5-7 DAYS A WEEK"]}
            onChange={onChange}
            error={errors.goal}/>

        <input
          type="submit"
          disabled={saving}
          value="CALCULATE"
          className="btn-calculate col-md-10 col-md-offset-1"
          onClick={onSave}/>
      </form>
    </div>
  );
};

  PersonInfoForm.propTypes = {
    personInfo: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default PersonInfoForm;
