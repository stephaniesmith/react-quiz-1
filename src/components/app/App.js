import React, { Component } from 'react';

import TextSelector from '../textSelector/TextSelector.js';
import ColorSelector from '../colorSelector/ColorSelector.js';
import Shape from '../shape/Shape.js';

export default class App extends Component {

  state = {

  }


  render() {

    return (
      <main>
        <TextSelector />
        <ColorSelector />
        <Shape />
      </main>
    );
  }


}
