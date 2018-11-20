import React, { Component, Fragment } from 'react';
import TextSelector from './TextSelector';
import ColorSelector from './ColorSelector';

export default class App extends Component {
    state={
      text: ''
    };

    // onInputChange = ({ target }) => {
    //   this.setState({ [target.name]: target.value, text: '' });
    // };

    render() {
      return (
        <Fragment>
          <h1>React Quiz</h1>
          <TextSelector />
          <ColorSelector />
        </Fragment>
      );
    }
}
