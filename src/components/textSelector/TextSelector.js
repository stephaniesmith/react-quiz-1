import React, { Fragment } from 'react';

const TextSelector = ({ updateText }) => {
  return (
    <Fragment>
      <label htmlFor='textBox'>Input Text Here</label>
      <input name='textBox' id='textBox' type='text' onChange={updateText} />

    </Fragment>
  )
}

export default TextSelector;
