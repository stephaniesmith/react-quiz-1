import React, { Fragment } from 'react';

const Shape = ({ text, textColor, backgroundColor }) => {

  return (
    <div style={{ background: backgroundColor }}>
      <h1 style={{ color: textColor }}>{text}</h1>
    </div>
  );
};

export default Shape;


<div style={{ width: '100px', height: '100px' }}></div>
