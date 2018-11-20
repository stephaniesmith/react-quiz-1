import React, { Component, Fragment } from 'react';
import ColorSelector from './ColorSelector/ColorSelector';
import TextSelector from './TextSelector/TextSelector';
import Shape from './Shape/Shape';

export default class App extends Component {

  state = {
    text: '',
    textColor: '#FFFFFF',
    backgroundColor: '#000000',
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render () {

    const { text, textColor, backgroundColor } = this.state;

    return (

      <Fragment>
        <h1>Quiz</h1>
        <TextSelector text={text} onChange={this.onChange} /><br />
        <ColorSelector textColor={textColor} backgroundColor={backgroundColor} onChange={this.onChange} />
        <Shape text={text} textColor={textColor} backgroundColor={backgroundColor} />
      </Fragment>

    )

  }

}