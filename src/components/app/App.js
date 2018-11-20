import React, { Component } from 'react';

import TextSelector from '../textSelector/TextSelector.js';
import ColorSelector from '../colorSelector/ColorSelector.js';
import Shape from '../shape/Shape.js';

export default class App extends Component {

  state = {
    text: '',
    fontColor: 'black',
    backgroundColor: 'white'
  }


  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {

    const { text, fontColor, backgroundColor } = this.state;

    return (
      <main>
        <TextSelector
          text={text}
          onChange={this.onChange}
        /> <br/>
        <ColorSelector
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          onChange={this.onChange}
        /> <br />
        <Shape
          text={text}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
        />
      </main>
    );
  }


}
