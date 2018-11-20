import React, { Component, Fragment } from 'react';
import TextSelector from './TextSelector';
import ColorSelector from './ColorSelector';
import Shape from './Shape';

export default class App extends Component {
    state={
    };

    render() {
      return (
        <Fragment>
          <h1>React Quiz</h1>
          <TextSelector />
          <ColorSelector />
          <Shape />
        </Fragment>
      );
    }
}
