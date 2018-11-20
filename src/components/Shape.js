import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Shape extends Component {
    static propTypes = {
        textInput: PropTypes.string,
        fontColor: PropTypes.string,
        backgroundColor: PropTypes.string
    };
    
    render() {
        const { textInput } = this.props;

        return (
            <Fragment>
                <h2>Shape</h2>
                {textInput && <p>{textInput}</p>}
            </Fragment>
        );
    }

}
