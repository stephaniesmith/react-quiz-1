import React from 'react';
import PropTypes from 'prop-types';

const ColorSelector = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="color">Font Color</label>
      <input type="color" name="color" onChange={onChange}/>
      <label htmlFor="backgroundColor">Background Color</label>
      <input type="color" name="backgroundColor" onChange={onChange}/>
    </div>
  );
};

ColorSelector.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default ColorSelector;
