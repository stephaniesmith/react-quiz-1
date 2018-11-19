import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Shape({ artist, works }) {

  return (
    <Fragment>
      <div>
        I am shape.
      </div>
    </Fragment>
  );
}

Shape.propTypes = {
  // note: PropTypes.object.isRequired
};

export default Shape;
