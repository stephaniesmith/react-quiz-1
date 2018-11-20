import React, { Component, Fragment } from 'react';
import Shape from './Shape.js';
import PropTypes from 'prop-types';

export default class ColorSelector extends Component {
    state = {
        fontColor: '',
        backgroundColor: ''
    };

    static propTypes = {
        textInput: PropTypes.string
    };

    onChange = ({ target }) => {
        console.log('target', target.name, target.value);
        this.setState({ [target.name]: target.value });
    };

    render() {
        const { fontColor, backgroundColor } = this.state;
        const { textInput } = this.props;
        const fontColorOptions = [
            'black',
            'white',
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'purple',
            'brown',
            'grey'
        ].map(fontColor => {
            return (
                <option key={fontColor} value={fontColor}>
                    {fontColor}
                </option>
            );
        });
        const backgroundColorOptions = [
            'black',
            'white',
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'purple',
            'brown',
            'grey'
        ].map(backgroundColor => {
            return (
                <option key={backgroundColor} value={backgroundColor}>
                    {backgroundColor}
                </option>
            );
        });

        return (
            <Fragment>
                <label>
                    Text Color:
                    <br />
                    <select
                        name="fontColor"
                        defaultValue={fontColor}
                        onChange={this.onChange}
                    >
                        {fontColorOptions}
                    </select>
                </label>
                <br />
                <label>
                    Background Color:
                    <br />
                    <select
                        name="backgroundColor"
                        defaultValue={backgroundColor}
                        onChange={this.onChange}
                    >
                        {backgroundColorOptions}
                    </select>
                    <br />
                </label>
                <Shape backgroundColor={backgroundColor} fontColor={fontColor} textInput={textInput}/>
            </Fragment> 
        );
    }
}
