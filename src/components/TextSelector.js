import React, { Component, Fragment } from 'react';

export default class TextSelector extends Component {
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
          <form>
            <input name="text" value={text} onChange={this.onInputChange}/>
          </form>
          <p>{text}</p>
        </Fragment>

      );
    }
}
