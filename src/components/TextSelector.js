import React from 'react';
import PropTypes from 'prop-types';

const TextSelector = props => {
  return (
    <div>
      <label htmlFor="text">Text</label>
      <input type="text" name="text"/>
    </div>
  );
};

TextSelector.propTypes = {

};

export default TextSelector;
