import React, { Fragment } from 'react';

const ColorSelector = ({ updateTextColor, updateBackgroundColor }) => {

  const colorOptions = ['Black', 'White', 'Blue', 'Red', 'Yellow'].map(color => {
    return <option key={color} value={color}>{color}</option>;
  });

  return (
    <Fragment>
      <label>Change Text Color</label>
      <select onChange={updateTextColor}>
        {colorOptions}
      </select>

      <label>Change Background Color</label>
      <select onChange={updateBackgroundColor}>
        {colorOptions}
      </select>
    </Fragment>
  );
};

export default ColorSelector;
