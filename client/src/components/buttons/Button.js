import React, { Component } from 'react';

export default class Button extends Component {
    static defaultProps = {
        disabled: false,
        onClick: () => Promise.resolve(),
    }

    render() {
        // this.props.buttonText
        const { buttonText, disabled } = this.props;

        return ( 
            <button
                disabled={ disabled }
                onClick={ this.handleClick } >
                {buttonText}
            </button>
        );
    }

    handleClick = (event) => {
        const { onClick } = this.props;
        onClick({ props: this.props, event: event });
    }
}