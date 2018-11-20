import React from 'react';
import PropTypes from 'prop-types';

const Shape = ({ text, color, backgroundColor }) => {
  return (
    <div style={{ width: '100px', height: '100px', color, backgroundColor }}>
      <h2>{text}</h2>
    </div>
  );
};

Shape.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Shape;
