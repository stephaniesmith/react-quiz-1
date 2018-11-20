import React, { Component, Fragment } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';

export default class App extends Component {
  state = {
    fontColor: '',
    backgroundColor: '',
    text: ''
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { fontColor, backgroundColor, text } = this.state;

    return (
      <Fragment>
        <ColorSelector
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          onChange={this.onChange}
        />
        <TextSelector text={text} onChange={this.onChange} />
        <Shape
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          text={text}
        />
      </Fragment>
    );
  }
}
