import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const PersonInfoForm = ({personInfo, onSave, onChange, saving, errors}) => {
  return (
    <div className="row">
      <form className ='col-md-4 col-md-offset-4'>
        <h1>Macro Calculator</h1><hr />

        <SelectInput
          name="gender"
          label="Gender"
          width="col-md-6"
          value={personInfo.gender}
          defaultOption="Select Gender"
          options={["Male", "Female"]}
          onChange={onChange}
          error={errors.gender}/>

        <SelectInput
          name="measurement"
          label="Measurement System"
          width="col-md-6"
          value={personInfo.system}
          defaultOption="Select Measurement System"
          options={["kg/cms", "lbs/inches"]}
          onChange={onChange}
          error={errors.gender}/>

        <SelectInput
          name="goal"
          label="Goal"
          width="col-md-12"
          value={personInfo.goal}
          defaultOption="Select Goal"
          options={["Lose Fat", "Build Muscle"]}
          onChange={onChange}
          error={errors.goal}/>

        <TextInput
          name="age"
          label="Age"
          value={personInfo.age || ''}
          onChange={onChange}
          error={errors.age}/>

        <TextInput
          name="weight"
          label="Weight"
          value={personInfo.weight || ''}
          onChange={onChange}
          error={errors.weight}/>

        <TextInput
          name="height"
          label="Height"
          value={personInfo.height || ''}
          onChange={onChange}
          error={errors.height}/>

        <input
          type="submit"
          disabled={saving}
          value="Calculate"
          className="btn btn-primary"
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
