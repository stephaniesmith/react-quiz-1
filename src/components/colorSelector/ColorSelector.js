import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ artist, works }) {

  return (
    <Fragment>
      <input
        type="color"
      ></input>

    </Fragment>
  );
}

ColorSelector.propTypes = {
  // note: PropTypes.object.isRequired
};

export default ColorSelector;
