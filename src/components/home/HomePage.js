import React from 'react'
import { Button } from 'react-bootstrap'
import AlertClass from './Alert'

const profile = require('../../assets/profile.png')

export default class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isToggled: false }
        // Gotta remember to bind functions
        this.handleClick = this.handleClick.bind(this)
    }
    
    render() {
        return (
            <div className="container">
                {this.state.isToggled ? <AlertClass></AlertClass> : null}
                <center>
                    <img alt="" src={profile} />
                    <h1>Welcome to the Home Page</h1>
                </center>
                <h2>This is where Dan says stuff on the internet.</h2>
                <p>I hope to write many things here.</p>
                <Button bsStyle="primary" onClick={this.handleClick}>
                    Test Me
                </Button>
            </div>
        )
    }

    handleClick(props) {
        this.setState(state => ({
            isToggled: !state.isToggled
        }))
    }
}