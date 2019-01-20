import React from 'react';

export default class NavButton extends React.Component {
    
    constructor(props) {
        super(props)
    }
    render() {
        return <button className="button">{this.props.name}</button>
    }
}