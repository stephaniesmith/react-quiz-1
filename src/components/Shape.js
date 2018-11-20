import React, { Component } from 'react';
// import { color, background } from './ColorSelector';
// import { text } from './TextSelector';

export default class Shape extends Component {
  constructor(props) {
    super(props);
  }

    state = {
      text: '',
      color: '',
      background: ''
    };

    render() {
      const { text, color, background } = this.state;
      return (
        <div style={{ color, background }}>{text}</div>
      ); 
    }
}
