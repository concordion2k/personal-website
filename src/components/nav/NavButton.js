import React from 'react'

export default class NavButton extends React.Component {
    
    render() {
        return <button className="button">{this.props.name}</button>
    }

    
}