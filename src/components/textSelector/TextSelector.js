import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function TextSelector({ artist, works }) {

  return (
    <Fragment>
      <input
        type="text"
      ></input>

    </Fragment>
  );
}

TextSelector.propTypes = {
  // note: PropTypes.object.isRequired
};

export default TextSelector;
