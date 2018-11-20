import React, { Fragment } from 'react';

const TextSelector = ({ text, handleChange }) => {
  return (
    <Fragment>
      <input  name="text" value={text} onChange={handleChange}/>
    </Fragment>
  );
};

export default TextSelector;

