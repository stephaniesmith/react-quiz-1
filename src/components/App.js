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

  render() {
    return (
      <div>
        <h1>App</h1>
        <TextSelector/>
        <ColorSelector/>
        <Shape  {...this.state}/>
      </div>
    );
  }
}
