import React, { Component, Fragment } from 'react';
import TextSelector from './textSelector/TextSelector';
import Shape from './shape/Shape';
import ColorSelector from './colorSelector/ColorSelector';


export default class App extends Component {

  state = {
    text: '',
    textColor: 'black',
    backgroundColor: 'black'
  };

  updateText = ({ target }) => {
    this.setState({ text: target.value });
  };

  updateTextColor = ({ target }) => {
    this.setState({ textColor: target.value });
  };

  updateBackgroundColor = ({ target }) => {
    this.setState({ backgroundColor: target.value });
  };

  render() {

    const { text, textColor, backgroundColor } = this.state;

    return (
      <Fragment>
        <TextSelector updateText={this.updateText} />
        <ColorSelector updateTextColor={this.updateTextColor}
          updateBackgroundColor={this.updateBackgroundColor}
        />
        <Shape text={text} backgroundColor={backgroundColor}
          textColor={textColor}
        />
      </Fragment>
    );
  }
}
