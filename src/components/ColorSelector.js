import React, { Component } from 'react';

export default class Shape extends Component {
    state = {
      color: '',
      background: ''
    };

    onChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    render() {
      const colors = ['Yellow', 'Red', 'White', 'Black'].map(color => {
        return <option key={color} value={color}>{color}</option>;
      });
      return (
        <div>
          <label>Text Color:</label>
          <select name='color' id='color' onChange={this.onChange}>
            {colors}
          </select>
          <br/>
          <label>Background Color:</label>
          <select name='background' id='background' onChange={this.onChange}>
            {colors}
          </select>
        </div>
      ); 
    }
}
