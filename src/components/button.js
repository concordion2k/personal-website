import React from 'react';

export default class NavButton extends React.Component {
    
    constructor(props) {
        super(props)
    }
    render() {
        return <button>{this.props.name}</button>
    }
}