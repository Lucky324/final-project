import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <button type='button' className='button' onClick={this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
}