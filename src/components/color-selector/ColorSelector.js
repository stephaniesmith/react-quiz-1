import React, { Fragment } from 'react';

const ColorSelector = ({ textColor, backgroundColor, handleChange }) => {

  const textColorOptions = ['black', 'white', 'blue', 'red', 'yellow'].map(color => {
    return <option key={color} value={color}>{color}</option>;
  });
  const backgroundColorOptions = ['black', 'white', 'blue', 'red', 'yellow'].map(color => {
    return <option key={color} value={color}>{color}</option>;
  });
  return (
    <Fragment>
      <select name={textColor} defaultValue={textColor} onChange={handleChange}>
        {textColorOptions}
      </select>
      <select name={backgroundColor} defaultValue={backgroundColor} onChange={handleChange}>
        {backgroundColorOptions}
      </select>

    </Fragment>
  );
};

export default ColorSelector;
