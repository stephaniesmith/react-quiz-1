import React, { Fragment } from 'react';

const Shape = ({ text, textColor, backgroundColor }) => {

  return (
    <h1 style={{color: textColor, background: backgroundColor }}>{text}</h1>
  );
};

export default Shape;


<div style={{ width: '100px', height: '100px' }}></div>
