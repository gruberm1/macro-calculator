import React, {PropTypes} from 'react';

const TextInput = ({name, label, width, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group text-center '+ width;
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label className="sub-title" htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>

        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};


TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
