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
    
    return (
      <Fragment>
        <input name="text" value={ text } onChange={this.onInputChange}/>
    
        <div className="colorText">
          <p className="text">{text}</p>
        </div>
      </Fragment>
    );
  }
}
