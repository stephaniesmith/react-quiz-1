import React, { Component, Fragment } from 'react';

export default class App extends Component {
    state = {
        textInput: ''
    };

    onChange = ({ target }) => {
        console.log('target', target.name, target.value);
        this.setState({ [target.name]: target.value });
    };

    render() {
        const { textInput } = this.state;
        return (
            <Fragment>
                <h1>React Quiz</h1>
                <form>
                    <label> Text: 
                        <input name="textInput" value={textInput} onChange={this.onChange} />
                    </label>
                </form>
                {textInput && <p>{textInput}</p> }
            </Fragment>
        );
    }
}
