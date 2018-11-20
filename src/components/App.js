import React, { Component, Fragment } from 'react';
import TextSelector from './text-selector/TextSelector';
import ColorSelector from './color-selector/ColorSelector';

export default class App extends Component {

  state = {
    textColor: { color: 'black' },
    backgroundColor: { color: 'white' },
    text: 'hello'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleColorChange = ({ target }) =>{
    this.setState({ [target.name]: { [target.name]: target.value } });
  };

  render() {
    const { textColor, backgroundColor, text } = this.state;
    return (
      <Fragment>
        <h1>Lets Change The Colors</h1>
        <TextSelector text={text} handleChange={this.handleChange}/>
        <ColorSelector textColor={textColor} backgroundColor={backgroundColor} handleChange={this.handleColorChange}></ColorSelector>
      </Fragment>
    );
  }
}
