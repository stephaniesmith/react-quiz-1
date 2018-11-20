import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Shape = ({ text, textColor, backgroundColor }) => {

  const styles = {
    width: '100px',
    height: '100px',
    color: textColor,
    backgroundColor: backgroundColor
  };

  return (
    <Fragment>
      <div style={styles}>
        {text}
      </div>
    </Fragment>
  );
};

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
