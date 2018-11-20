import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ColorSelector = ({ textColor, backgroundColor, onChange }) => {

  return (
    <Fragment>

      <label htmlFor="textColor">Text color: </label>
      <input name="textColor" value={textColor} type="color" onChange={onChange} />

      <label htmlFor="backgroundColor">Background color: </label>
      <input name="backgroundColor" value={backgroundColor} type="color" onChange={onChange} />

    </Fragment>

  );

};

ColorSelector.propTypes = {
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorSelector;
