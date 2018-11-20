import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TextSelector = ({ text, onChange }) => {

  return (
    <Fragment>
      <label htmlFor="text">Text: </label>
      <input name="text" value={text} type="text" onChange={onChange} />
    </Fragment>
  );
};

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextSelector;
