import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function TextSelector({ onChange, text }) {

  return (
    <Fragment>
      <label htmlFor="text">Text</label>
      <input
        name="text" type="text"
        value={text} onChange={onChange}
      ></input>

    </Fragment>
  );
}

TextSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default TextSelector;
