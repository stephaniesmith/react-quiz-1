import  React from 'react';

const Shape = ({ text, color, backgroundColor, onChange }) => {
  return (
    <div style={{ width: '100px', height: '100px', backgroundColor }}>
      <p style={{ color }}>{text}</p>
    </div>
  );
};

export default Shape;
