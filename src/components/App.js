import React, { Component, Fragment } from 'react';
import TextSelector from './TextSelector';
// import domToImage from 'dom-to-image';

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
        </Fragment>
      );
    }
}
