import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ action, placeholderText, name }) => (
  <input
    type="text"
    placeholder={placeholderText}
    className="my-2 p-1"
    onChange={action}
    name={name}
  />
);

FormInput.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
};

export default FormInput;
