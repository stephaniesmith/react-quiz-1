import  React from 'react';

const Shape = ({ text, color, backgroundColor, onChange }) => {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <p style={{ color: color }}>{text}</p>
    </div>
  );
};

export default Shape;
