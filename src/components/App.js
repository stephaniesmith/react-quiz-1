import React, { Component, Fragment } from 'react';
import ColorSelector from './ColorSelector';
import Shape from './Shape';
import TextSelector from './TextSelector';

export default class App extends Component {
  state =  {
    text: '',
    color: '#000000',
    backgroundColor: '#FFFFFF'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text, color, backgroundColor } = this.state;

    return (
      <Fragment>
        <h1>Hello React Quiz</h1>
        <ColorSelector onChange={this.handleChange} value={color} />
        <ColorSelector onChange={this.handleChange} value={backgroundColor}/>
        <TextSelector onChange={this.handleChange} value={text}/>
        <Shape onChange={this.handleChange} />
      </Fragment>
    );
  }
}
