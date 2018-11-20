import React, { Fragment } from 'react';

const Shape = ({ text, textChange, colorChange }) => {
  return (
    <Fragment>
      <div>
        <span value={text} onChange={textChange} onColorChange={colorChange}></span>
      </div>
    </Fragment>
  );
};

export default Shape;
