import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const Input = ({ input, name, label, placeholder, inputType, meta: { touched, error, dirty } }) => {
  let validateClass = touched && error ? 'error' : null;

  if (!error && dirty) {
    validateClass = 'success';
  }

  if (placeholder) {
    input.placeholder = placeholder;
  }

  return (
    <FormGroup
      controlId={name}
      validationState={validateClass}
    >
      {label && <ControlLabel>{label}</ControlLabel>}
      <FormControl
        name={name}
        type={inputType}
        {...input}
      />
      {touched && error &&
        <div>
          {Array.isArray(error) &&
            error.map(e => <HelpBlock key={e}>{e}</HelpBlock>)
          }
          {!Array.isArray(error) &&
            <HelpBlock>{error}</HelpBlock>
          }
        </div>
      }
    </FormGroup>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.array,
  touched: PropTypes.bool,
  error: PropTypes.bool
};

export default Input;
