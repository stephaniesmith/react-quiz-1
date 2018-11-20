import React, { Component, Fragment } from 'react';

export default class App extends Component {
  state = {
    color: { color: 'Black' }
  };

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text } = this.state;
    const colorOptions = ['Black', 'White', 'Blue', 'Red', 'Yellow'].map(color => {
      return <option key={color} value={color}>{color}</option>;
    });

    return (
      <Fragment>
        <div className="colorText">
          <label htmlFor="color">Color Type:</label>
          <select name="color"onChange={this.changeColor}>
            {colorOptions}
          </select>
          <p className="text">{text}</p>
        </div>
      </Fragment>
    );
  }
}
