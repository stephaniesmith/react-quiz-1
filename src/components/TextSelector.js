import React from 'react';
import PropTypes from 'prop-types';

const TextSelector = ({ text, onChange }) => {
  return (
    <div>
      <label htmlFor="text">Text</label>
      <input type="text" name="text" value={text} onChange={onChange}/>
    </div>
  );
};

TextSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default TextSelector;
