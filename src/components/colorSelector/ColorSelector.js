import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ onChange, fontColor, backgroundColor }) {

  const colors = ['black', 'white', 'blue', 'red', 'yellow'];

  const fontColorOptions = colors.map(color => <option key={color} value={color}>{color}</option>);
  const backgroundColorOptions = colors.map(color => <option key={color} value={color}>{color}</option>);

  return (
    <Fragment>
      <label htmlFor="fontColorOptions">Font Color</label>
      <select
        name="fontColorOptions" defaultValue={fontColor}
        onChange={onChange}
      >{fontColorOptions}
      </select>

      <label htmlFor="backgroundColor">Background Color</label>
      <select
        name="backgroundColor" defaultValue={backgroundColor}
        onChange={onChange}
      >{backgroundColorOptions}
      </select>

    </Fragment>
  );
}

ColorSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default ColorSelector;
