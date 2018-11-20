import React, { Component, Fragment } from 'react';
import ColorSelector from './ColorSelector';
import Shape from './Shape';
import TextSelector from './TextSelector';

export default class App extends Component {
  state = {
    text: '',
    color: 'black',
    backgroundColor: 'white'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text, color, backgroundColor } = this.state;

    return (
      <Fragment>
        <TextSelector text={text} onChange={this.handleChange} />
        <ColorSelector name="color" color={color} backgroundColor={backgroundColor} onChange={this.handleChange} />
        <Shape text={text} color={color} backgroundColor={backgroundColor} />
      </Fragment>
    );
  }
}
