import React from 'react';
import PropTypes from 'prop-types';

const ColorSelector = props => {
  return (
    <div>
      <label htmlFor="font-color">Font Color</label>
      <input type="color" name="font-color"/>
      <label htmlFor="background-color">Background Color</label>
      <input type="color" name="background-color"/>
    </div>
  );
};

ColorSelector.propTypes = {

};

export default ColorSelector;
