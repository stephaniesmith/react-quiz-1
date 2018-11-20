import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Shape({ text, fontColor, backgroundColor }) {

  return (
    <Fragment>
      <div style={{ color: fontColor, backgroundColor }}>
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
