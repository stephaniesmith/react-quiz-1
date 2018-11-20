import React from 'react';

export default class ColorSelector extends Component {

  state = {
    fontColor: 'red',
    backgroundColor: ''
  }

  onChange = ({ target }) => {
    // setState in async. It waits for all components to update
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { fontColor, textArea, backgroundColor } = this.state;

    const fontOptions = [ 'black', 'white', 'blue', 'red', 'yellow'].map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    const backgroundColor = [ 'black', 'white', 'blue', 'red', 'yellow'].map(backColors => {
      return <option key={backColors} value={backColors}>{backColors}</option>;
    });


    const textStyles = () => {
      return {
        fontColor: fontColor,
        backgroundColor: backgroundColor
      }
    }

    return (
      <Fragment>
        <h1>Select Fonts</h1>

          <div>
            <label htmlFor="font">Select Font Color </label>
            <select name="font" defaultValue={font} onChange={this.onChange}>
              {fontOptions}
            </select>
          </div>

          <div>
            <label htmlFor="backColors">Select color background </label>
            <select name="backColors" defaultValue={backColors} onChange={this.onChange}>
              {backgroundColor}
            </select>
          </div>

          <div>
            <label htmlFor="textArea">Enter Text here</label>
            <input name="textArea" type="text" value={textArea} onChange={this.onChange} />
          </div>
          <div style={textStyles()}>
              {textArea}
            </div>
      </Fragment>
    );
}
