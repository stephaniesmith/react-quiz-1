import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Shape({ text, fontColor, backgroundColor }) {

  const style = {
    color: fontColor,
    backgroundColor
  };

  return (
    <Fragment>
      <div style={style}>
        {text}
      </div>
    </Fragment>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
