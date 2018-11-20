import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Shape extends Component {
    static propTypes = {
        textInput: PropTypes.string,
        fontColor: PropTypes.string,
        backgroundColor: PropTypes.string
    };
    
    render() {
        const { textInput, fontColor, backgroundColor } = this.props;
        const font = { color: fontColor };
        const background = { backgroundColor: backgroundColor };

        return (
            <Fragment>
                <div style={background}>
                    {textInput && <p style={font}>{textInput}</p>}
                </div>
            </Fragment>
        );
    }

}
