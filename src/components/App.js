import React, { Component } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';

export default class App extends Component {
  state = {
    text: 'Text Here',
    color: 'white',
    backgroundColor: 'black'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <h1>App</h1>
        <TextSelector text={text} onChange={this.handleChange}/>
        <ColorSelector onChange={this.handleChange}/>
        <Shape  {...this.state}/>
      </div>
    );
  }
}
