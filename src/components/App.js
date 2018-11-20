import React, { Component, Fragment } from 'react';

export default class App extends Component {
  state = {
    text: ''
  };

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text } = this.state;
    const textColors = ['Black', 'White', 'Blue', 'Red', 'Yellow'].map(color => {
      return <option key={color} value={color}>{color}</option>;
    });
    const backgroundColors = ['Black', 'White', 'Blue', 'Red', 'Yellow'].map(color => {
      return <option key={color} value={color}>{color}</option>;
    });

    return (
      <Fragment>
        <input name="text" value={ text } onChange={this.onInputChange}/>
    
        <div className="colorText">
          <label htmlFor="color">Text Color:</label>
          <select name="color"onChange={this.changeColor}>
            {textColors}
          </select>
        </div>

        <div className="colorBackground">
          <label htmlFor="color">Background Color:</label>
          <select name="color"onChange={this.changeColor}>
            {backgroundColors}
          </select>
          <p className="text">{text}</p>
        </div>
        
      </Fragment>
    );
  }
}
